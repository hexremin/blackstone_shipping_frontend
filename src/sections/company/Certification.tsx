import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { GetCompanyCertificationsResponse } from "src/types/graphql/types/company.types";

const Certification = ({
  data,
}: {
  data: GetCompanyCertificationsResponse;
}) => {
  return (
    <Container maxWidth="xl" sx={{ my: 5 }}>
      <Stack gap={3}>
        <Typography variant="h2" sx={{ fontWeight: "700 !important" }}>
          {data.page.companyPageCertifications.certificationMainTitle.toUpperCase()}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: "600 !important" }}>
          {data.page.companyPageCertifications.certificationSubTitle1.toUpperCase()}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: "500 !important" }}
          color="rgba(45, 55, 72, 0.8)"
          fontWeight={500}
        >
          {data.page.companyPageCertifications.certificationContent1}
        </Typography>
        <Typography id="industryCertifications" variant="h6" sx={{ fontWeight: "600 !important" }}>
          {data.page.companyPageCertifications.certificationSubTitle2.toUpperCase()}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: "500 !important" }}
          color="rgba(45, 55, 72, 0.8)"
          fontWeight={500}
        >
          {data.page.companyPageCertifications.certificationContent2}
        </Typography>

        <Grid container spacing={{ xs: 2, md: 4 }}>
          {data.certifications.nodes.map((item, index) => (
            <Grid size={{ xs: 6, sm: 4, lg: 3 }} key={index}>
              <Stack
                sx={{
                  border: "1px solid rgba(182, 183, 184, 0.3)",
                  width: "100%",
                  height: "156px",
                  borderRadius: "8px",
                }}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Box
                  component={"img"}
                  alt={item.title}
                  src={item.featuredImage.node.sourceUrl}
                  width={"180px"}
                  // height={"80px"}
                  sx={{ objectFit: "cover" }}
                />
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Typography id="strategicalliances" variant="h6" sx={{ fontWeight: "600 !important" }}>
          {data.page.companyPageCertifications.certificationSubTitle3.toUpperCase()}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: "500 !important" }}
          color="rgba(45, 55, 72, 0.8)"
          fontWeight={500}
        >
          {data.page.companyPageCertifications.certificationContent3}
        </Typography>

        <Grid container spacing={{ xs: 2, md: 4 }}>
          {data.partners.nodes.map((item, index) => (
            <Grid size={{ xs: 6, sm: 4, lg: 3 }} key={index}>
              <Stack
                sx={{
                  border: "1px solid rgba(182, 183, 184, 0.3)",
                  width: "100%",
                  height: "156px",
                  borderRadius: "8px",
                }}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Box
                  component={"img"}
                  alt={item.title}
                  src={item.featuredImage.node.sourceUrl}
                  width={"200px"}
                  // height={"70px"}
                  sx={{ objectFit: "contain" }}
                />
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
};

export default Certification;
