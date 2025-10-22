/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import { useResponsive } from "src/hooks/useResponsive";

interface CardData {
  title: string;
  content: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
  peoplesOptions: {
    videoUrl: string;
  };
}

const SliderCard = ({ data, isPlayable }: { data: CardData, isPlayable: boolean }) => {
  const ytPlayerRef = useRef<any>(null);
  const videoUrl = data.peoplesOptions?.videoUrl;
  const thumbnail = data.featuredImage?.node?.sourceUrl;

  const mdDown = useResponsive("down", "md")

  const getYouTubeId = (url: string): string | null => {
    if (!url) return null;
    try {
      const parsed = new URL(url);
      if (parsed.hostname.includes("youtu.be")) {
        return parsed.pathname.split("/")[1] || null;
      }
      if (parsed.searchParams.get("v")) {
        return parsed.searchParams.get("v");
      }
      if (parsed.pathname.includes("/shorts/")) {
        return parsed.pathname.split("/shorts/")[1]?.split("?")[0] || null;
      }
    } catch {
      return null;
    }
    return null;
  };

  const videoId = videoUrl ? getYouTubeId(videoUrl) : null;

  const youtubeOpts: YouTubeProps["opts"] = {
    width: mdDown ? "100%" : "100%",
    height: mdDown ? "110%" : "100%",
    playerVars: {
      autoplay: 0,
      mute: 0,
      controls: 1,
      modestbranding: 1,
      rel: 0,
      fs: 0,
      iv_load_policy: 3,
      loop: 1,
      playlist: videoId,
      playsinline: 1,
    },
  };

  const handleYouTubeReady: YouTubeProps["onReady"] = (event) => {
    ytPlayerRef.current = event.target;
  };

  useEffect(() => {
    if (!ytPlayerRef.current) return;

    let timer: NodeJS.Timeout;

    if (isPlayable) {
      timer = setTimeout(() => {
        ytPlayerRef.current.mute();
        ytPlayerRef.current.playVideo();
        ytPlayerRef.current.unMute();

      }, 300);
    } else {
      timer = setTimeout(() => {
        ytPlayerRef.current?.pauseVideo();
      }, 300);
    }

    return () => clearTimeout(timer);
  }, [isPlayable]);

  return (
    <Stack
      ml={1}
      mt={2}
      gap={1}
      sx={{ width: { xs: 298, md: 225 } }}
    >
      <Box
        sx={{
          width: { xs: 298, md: 225 },
          borderRadius: 2,
          overflow: "hidden",
          height: "431px",
          transform: isPlayable ? "scale(1.02)" : "scale(1)",
          boxShadow: isPlayable ? 4 : 1,
          transition: "all 0.3s ease-in-out",
          position: "relative",
        }}
      >
        {videoId && (
          <>
            {!isPlayable && thumbnail ? (
              <Box
                component="img"
                src={thumbnail || ""}
                alt={data.title || "Video Thumbnail"}
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 2,
                  zIndex: 2,
                }}
              />
            ) : null}

            <YouTube
              videoId={videoId}
              opts={youtubeOpts}
              onReady={handleYouTubeReady}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "16px",
              }}
            />
          </>
        )}
      </Box>

      <Typography
        variant="h5"
        sx={{ textAlign: "left", textWrap: "wrap", lineHeight: '150% !important' }}
      >
        {data.title}
      </Typography>

      <Box
        component="div"
        sx={{ "& p": { typography: "body1", margin: 0, textWrap: "wrap" } }}
        dangerouslySetInnerHTML={{ __html: data.content }}
      />
    </Stack>
  );
};

export default SliderCard;
