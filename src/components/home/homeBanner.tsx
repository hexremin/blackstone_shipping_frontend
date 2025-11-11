/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, Suspense } from "react";
import {
  Button,
  Container,
  Stack,
  Typography,
  Box,
  useTheme,
} from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { ArrowForward } from "@mui/icons-material";
import { GET_SLIDERS } from "src/graphql/queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "src/routes/hooks";
// lazy-load MobileBanner and VideoJS
const MobileBanner = React.lazy(() => import("./MobileBanner"));
const VideoJS = React.lazy(() => import("../VideoJs"));
import arrow from "src/assets/icons/arrowcircle.png";
import LoadingFallback from "../LoadingFallback";

export interface GetSlidersResponse {
  page: {
    homePageFieldsSliderSection: {
      backgroundVideo: string;
    };
  };
  sliders: {
    nodes: SliderNode[];
  };
}

export interface SliderNode {
  title: string;
  sliderFields: {
    sliderMainHeading: string;
    subtitle: string;
    shortDescription: string;
    button1Text: string;
    button1Link: string;
    button2Text: string;
    button2Link: string;
  };
}


const HomeBanner: React.FC = () => {
  const { loading, error, data } = useQuery<GetSlidersResponse>(GET_SLIDERS);
  const router = useRouter();
  const playerRef = useRef<any | null>(null);

  if (loading) return <LoadingFallback />;
  if (error) return <p>Error: {error.message}</p>;

  const videoJsOptions: any = {
    autoplay: true,
    controls: false,
    responsive: true,
    fluid: true,
    loop: true,
    muted: true,
    playsinline: true,

    sources: [
      {
        src: data?.page.homePageFieldsSliderSection.backgroundVideo || "",
        type: "video/mp4",
      },
    ],
  };

  const handlePlayerReady = (player: any) => {
    playerRef.current = player;

    player.on("waiting", () => {
      // videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      // videojs.log("player will dispose");
    });
  };
  return (
    <>
      <Box
        width="100%"
        position={"relative"}
        height={{ xs: 400, md: 700 }}
        display={{ xs: "none", lg: "block" }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
            zIndex: 0,
          }}
        >
          <Box sx={{ filter: "brightness(0.5)" }}>
            <Suspense fallback={<LoadingFallback />}>
              <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
            </Suspense>
          </Box>
        </Box>

        <Container
          maxWidth="xl"
          sx={{
            position: "relative",
            zIndex: 3,
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Stack width={"100%"}>
            <Carousel
              showArrows={false}
              showStatus={false}
              showIndicators={false}
              infiniteLoop
              showThumbs={false}
              useKeyboardArrows
              autoPlay={true}
              stopOnHover
              swipeable
              emulateTouch
            >
              {data?.sliders.nodes.map((slide, index) => (
                <Stack
                  key={index}
                  style={{
                    MozUserSelect: "none",
                    WebkitUserSelect: "none",
                    msUserSelect: "none",
                    userSelect: "none",
                    position: "relative",
                  }}
                  display="flex"
                  alignItems={{ sm: "center", lg: "flex-start" }}
                  unselectable="on"
                  onMouseDown={(e) => e.preventDefault()}
                >
                  <Stack
                    width={{ sm: "600px", lg: "700px" }}
                    display="flex"
                    flexDirection="column"
                    gap={2}
                    textAlign={{ sm: "center", lg: "left" }}
                    alignItems={{ sm: "center", lg: "flex-start" }}
                  >
                    <Stack
                      direction="row"
                      gap={1}
                      borderBottom={2}
                      borderColor="rgba(32, 189, 103, 1)"
                      paddingBottom={1}
                      width="fit-content"
                    >
                      <Typography variant="h3" fontWeight={700} color="white">
                        {slide.sliderFields.subtitle.split(" ")[0]}
                      </Typography>
                      <Typography variant="h3" fontWeight={400} color="white">
                        {slide.sliderFields.subtitle.split(" ")[1]}
                      </Typography>
                    </Stack>

                    <Typography
                      textAlign={"left"}
                      variant="h1"
                      color="white"
                      fontWeight={700}
                    // sx={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}
                    >
                      {slide.sliderFields.sliderMainHeading.toUpperCase()}
                    </Typography>

                    <Typography
                      variant="h5"
                      color="white"
                      fontWeight={400}
                      textAlign={{ sm: "center", lg: "left" }}
                    >
                      {slide.sliderFields.shortDescription}
                    </Typography>

                    <Stack direction="row" spacing={2} mt={2} width={"100%"} flexWrap={"wrap"}>
                      <Button
                        onClick={() =>
                          router.push(slide.sliderFields.button1Link)
                        }
                        variant="contained"
                        endIcon={
                          <Box
                            component={"img"}
                            src={arrow}
                            sx={{
                              width: { xs: "24px", lg: "36px !important" },
                              height: { xs: "24px", lg: "36px !important" },
                            }}
                          />
                        }
                        sx={{
                          backgroundColor: "#0061f2",
                          width: { xs: "auto", lg: "auto" },
                          borderRadius: "4px",
                          px: 3,
                          py: 1.5,
                          // maxWidth:"227px",
                          height: "60px",
                          fontWeight: 600,
                          fontSize: "16px",
                          lineHeight: "100%",
                          letterSpacing: "3%",
                          "&:hover": {
                            backgroundColor: "#0052cc",
                          },
                          typography: "body1"
                        }}
                      >
                        {slide.sliderFields.button1Text}
                      </Button>
                      <Button
                        onClick={() => router.push(slide.sliderFields.button2Link)}
                        variant="contained"
                        sx={{
                          backgroundColor: "#28a745",
                          textTransform: "none",
                          borderRadius: "4px",
                          height: "60px",
                          fontWeight: 600,
                          fontSize: "16px",
                          lineHeight: "100%",
                          letterSpacing: "3%",
                          px: 3,
                          py: 1.5,
                          "&:hover": {
                            backgroundColor: "#218838",
                          },
                          typography: "body1"
                        }}
                      >
                        {slide.sliderFields.button2Text}
                      </Button>
                    </Stack>
                  </Stack>
                </Stack>
              ))}
            </Carousel>
          </Stack>
        </Container>
      </Box>

      {/* MOBILE SCREEEN */}
      <Stack display={{ xs: "block", lg: "none" }}>
        <Container maxWidth="xl">
          <Suspense fallback={<LoadingFallback />}>
            <MobileBanner />
          </Suspense>
          <Stack width={"100%"} gap={4}>
            <Carousel
              showArrows={false}
              showStatus={false}
              showIndicators={false}
              infiniteLoop
              showThumbs={false}
              useKeyboardArrows
              autoPlay={false}
              stopOnHover
              swipeable
              emulateTouch
            >
              {data?.sliders.nodes.map((slide, index) => (
                <Box
                  key={index}
                  style={{
                    MozUserSelect: "none",
                    WebkitUserSelect: "none",
                    msUserSelect: "none",
                    userSelect: "none",
                    position: "relative",
                  }}
                  unselectable="on"
                  onMouseDown={(e) => e.preventDefault()}
                >
                  <Box
                    width={"100%"}
                    display="flex"
                    flexDirection="column"
                    gap={2}
                    alignItems={"center"}
                  >
                    <Stack
                      direction="row"
                      gap={1}
                      borderBottom={2}
                      borderColor="rgba(32, 189, 103, 1)"
                      paddingBottom={1}
                      width="fit-content"
                    >
                      <Typography
                        variant="h3"
                        fontWeight={700}
                        color="rgba(109, 110, 113, 1)"
                      >
                        {slide.sliderFields.subtitle.split(" ")[0]}
                      </Typography>
                      <Typography
                        variant="h3"
                        fontWeight={400}
                        color="rgba(109, 110, 113, 1)"
                      >
                        {slide.sliderFields.subtitle.split(" ")[1]}
                      </Typography>
                    </Stack>

                    <Typography
                      textAlign={"center"}
                      variant="h1"
                      color="rgba(11, 19, 40, 1)"
                      fontWeight={700}
                    >
                      {slide.sliderFields.sliderMainHeading.toUpperCase()}
                    </Typography>

                    <Stack
                      direction="row"
                      spacing={1}
                      mt={2}
                      flexWrap={"nowrap"}
                      width={"100%"}
                      alignItems={"center"}
                      height={"100%"}
                    >
                      <Button
                        onClick={() =>
                          router.push(slide.sliderFields.button1Link)
                        }
                        variant="contained"
                        endIcon={<ArrowForward />}
                        sx={{
                          backgroundColor: "#0061f2",
                          textTransform: "none",
                          fontWeight: "600",
                          fontSize: "13px",
                          borderRadius: "8px",
                          // px: 3,
                          // py: 1.5,
                          width: "100%",
                          "&:hover": {
                            backgroundColor: "#0052cc",
                          },
                          height: "45px",
                        }}
                      >
                        {slide.sliderFields.button1Text}
                      </Button>
                      <Button
                        onClick={() =>
                          router.push(slide.sliderFields.button2Link)
                        }
                        variant="contained"
                        sx={{
                          backgroundColor: "#28a745",
                          textTransform: "none",
                          fontSize: "13px",
                          fontWeight: "600",
                          borderRadius: "8px",
                          width: "100%",
                          "&:hover": {
                            backgroundColor: "#218838",
                          },
                          height: "45px",
                        }}
                      >
                        {slide.sliderFields.button2Text}
                      </Button>
                    </Stack>
                  </Box>
                </Box>
              ))}
            </Carousel>
            <Suspense fallback={<LoadingFallback />}>
              <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
            </Suspense>
          </Stack>
        </Container>
      </Stack>
    </>
  );
};

export default HomeBanner;
