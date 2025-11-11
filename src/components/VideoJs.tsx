/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useMemo, useRef } from "react";
import { Box, useTheme } from "@mui/material";
import "video.js/dist/video-js.css"; // <-- optional: if you want CSS bundled with this file, but for SSR-safe move this below in useEffect

export interface VideoJSProps {
  options: any;
  onReady?: (player: any) => void;
  debug?: boolean;
}

const VideoJS: React.FC<VideoJSProps> = ({ options, onReady, debug = false }) => {
  const theme = useTheme();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<any | null>(null);

  const optionsKey = useMemo(() => {
    return JSON.stringify({
      sources: options?.sources ?? null,
      autoplay: options?.autoplay ?? null,
      muted: (options as any)?.muted ?? null,
      poster: options?.poster ?? null,
      preload: options?.preload ?? null,
    });
  }, [options]);

  useEffect(() => {
    // client-only: dynamic import of video.js and its css
    let mounted = true;
    let videojsLib: any;
    let player: any;

    if (typeof window === "undefined") return;

    async function setupPlayer() {
      // dynamic import prevents SSR issues
      const videojsModule = await import("video.js");
      videojsLib = videojsModule?.default ?? videojsModule;

      // import CSS dynamically so SSR doesn't try to load it
      try {
        await import("video.js/dist/video-js.css");
      } catch (e) {
        // ignore; CSS import may be handled globally
      }

      if (!mounted || !containerRef.current) return;

      if (playerRef.current) return;

      const videoEl = document.createElement("video");
      videoEl.className = "video-js vjs-big-play-centered";
      videoEl.setAttribute("playsinline", "");
      videoEl.setAttribute("preload", (options.preload as string) || "none");
      if (options.poster) videoEl.setAttribute("poster", String(options.poster));

      containerRef.current.appendChild(videoEl);

      player = (playerRef.current = videojsLib(videoEl, options, function onPlayerReady() {
        if (debug) console.log("[VideoJS] Player ready");
        onReady?.(player);
      }));

      if (debug) console.log("[VideoJS] Player created", options);
    }

    setupPlayer().catch((err) => {
      console.error("[VideoJS] failed to init player", err);
    });

    return () => {
      mounted = false;
      if (playerRef.current) {
        if (debug) console.log("[VideoJS] Disposing player");
        playerRef.current.dispose();
        playerRef.current = null;
      }
      if (containerRef.current) containerRef.current.innerHTML = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run only once on mount

  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;

    const { sources, autoplay, muted, poster, preload } = JSON.parse(optionsKey);

    try {
      if (Array.isArray(sources) && sources.length > 0) {
        player.pause();
        player.src(sources as any);
        if (debug) console.log("[VideoJS] Updated sources", sources);
      } else {
        player.src([]);
      }

      if (poster) player.poster(String(poster));
      if (typeof autoplay !== "undefined") {
        player.autoplay(Boolean(autoplay));
        if (autoplay) {
          if (typeof player.play === "function") {
            const playPromise = (player.play as unknown as () => Promise<void>)();
            void playPromise?.catch((err: unknown) => {
              if (debug) console.warn("[VideoJS] Autoplay blocked:", err);
            });
          }
        }
      }
      if (typeof muted !== "undefined") player.muted(Boolean(muted));

      if (preload && player.el()) {
        const videoTag = player.el().querySelector("video");
        if (videoTag) (videoTag as HTMLVideoElement).preload = String(preload) as HTMLVideoElement["preload"];
      }
    } catch (err) {
      console.error("[VideoJS] Error updating player", err);
    }
  }, [optionsKey, debug]);

  return (
    <Box
      component="div"
      data-vjs-player
      sx={{
        borderRadius: 0,
        overflow: "hidden",
        width: "100%",
        height: "100%",
        [theme.breakpoints.down("sm")]: {
          borderRadius: "5px",
        },
        "& .video-js": {
          width: "100% !important",
          height: "100% !important",
        },
      }}
    >
      <div ref={containerRef} />
    </Box>
  );
};

export default VideoJS;
