/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Iconify } from "src/components/iconify";
import {
  GetDownloadsByCategoryResponse,
  ResourcesPageData,
} from "src/types/graphql/types/resourses.types";
import { useQuery } from "@apollo/client";
import { GET_DOWNLOADS } from "src/graphql/queries";

import brochure from "src/assets/icons/brochure.png";
import service from "src/assets/icons/service.png";
import whitepapper from "src/assets/icons/whitepapper.png";

async function downloadFile(url: any) {
  // try {
  //   const response = await fetch(url);
  //   const blob = await response.blob();
  //   const link = document.createElement("a");
  //   link.href = window.URL.createObjectURL(blob);
  //   link.download = url.split("/").pop();
  //   link.style.display = "none";
  //   document.body.appendChild(link);
  //   link.click();
  //   window.URL.revokeObjectURL(link.href);
  //   document.body.removeChild(link);
  // } catch (err) {
  //   console.error("Download failed:", err);
  // }
  window.open(url, "_blank")
}

const Downloads = ({ data }: { data: ResourcesPageData }) => {
  const resourseData = data.page.resourcesPageDownloadsSection;

  const { data: brochuresData, loading: brochuresLoading } =
    useQuery<GetDownloadsByCategoryResponse>(GET_DOWNLOADS, {
      variables: { slug: ["brochures"] },
    });

  const { data: servicesData, loading: servicesLoading } =
    useQuery<GetDownloadsByCategoryResponse>(GET_DOWNLOADS, {
      variables: { slug: ["co-corporate-presentations"] },
    });

  const { data: whitepapersData, loading: whitepapersLoading } =
    useQuery<GetDownloadsByCategoryResponse>(GET_DOWNLOADS, {
      variables: { slug: ["co-corporate-sustainability-reports"] },
    });

  if (brochuresLoading || servicesLoading || whitepapersLoading) {
    return (
      <Container maxWidth="xl" sx={{ my: 6 }}>
        <Typography>Loading downloads...</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ my: 6 }}>
      <Stack gap={3}>
        <Typography variant="h2">
          {resourseData.downloadsSectionTitle}
        </Typography>

        <Box
          component="div"
          sx={{
            "& p": {
              margin: 0,
              fontWeight: "600 !important",
              color: "rgba(45, 55, 72, 1)",
            },
          }}
          dangerouslySetInnerHTML={{
            __html: resourseData.downloadSectionContent,
          }}
        />

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 4 }}>
            <DownloadCard
              title="Brochure"
              icon={brochure}
              items={
                brochuresData?.downloads?.nodes?.map((n) => ({
                  name: n.title,
                  url: n.downloadOptions?.downloadFile?.node?.mediaItemUrl,
                })) || []
              }
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <DownloadCard
              title="Corporate Presentations"
              icon={service}
              items={
                servicesData?.downloads?.nodes?.map((n) => ({
                  name: n.title,
                  url: n.downloadOptions?.downloadFile?.node?.mediaItemUrl,
                })) || []
              }
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <DownloadCard
              title="Corporate Sustainability Reports"
              icon={whitepapper}
              items={
                whitepapersData?.downloads?.nodes?.map((n) => ({
                  name: n.title,
                  url: n.downloadOptions?.downloadFile?.node?.mediaItemUrl,
                })) || []
              }
            />
          </Grid>
        </Grid >
      </Stack >
    </Container >
  );
};

const DownloadCard = ({
  title,
  icon,
  items,
}: {
  title: string;
  icon: string;
  items: { name: string; url?: string }[];
}) => (
  <Stack
    sx={{
      borderRadius: "12px",
      background: "rgba(45, 55, 72, 1)",
      color: "white",
      p: 3,
      minHeight: 300,
      height: "100%",
    }}
    gap={2}
  >
    <Stack gap={2} direction="row">
      <Box
        src={icon}
        component="img"
        alt={title}
        height="42px"
        sx={{
          background: "#5C7DFF1A",
          padding: "6px",
          borderRadius: "6px",
        }}
      />
      <Typography
        sx={{
          typography: { xs: "h5", md: "h6" },
          height: "65px",
          fontWeight: 600,
        }}
      >
        {title}
      </Typography>
    </Stack>
    <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />

    <Stack gap={1.5}>
      {items.length > 0 ? (
        items.map((item, idx) => (
          <Button
            key={idx}
            onClick={(e) => {
              e.preventDefault();
              downloadFile(item.url);
            }}
            sx={{
              justifyContent: "space-between",
              background: "rgba(26, 86, 219, 1)",
              color: "white",
              textTransform: "none",
              fontWeight: 500,
              typography: "h5",
              px: 2,
              py: 2,
              borderRadius: "6px",
              "&:hover": { background: "rgba(26, 86, 219, 0.9)" },
            }}
            endIcon={<Iconify icon="charm:download" />}
          >
            {item.name}
          </Button>
        ))
      ) : (
        <Typography variant="body2" color="gray">
          No files available
        </Typography>
      )}
    </Stack>
  </Stack>
);

export default Downloads;
