import { Container, Stack, Typography, Grid } from "@mui/material";
import React from "react";
import SectionHead from "src/components/sectionHead/SectionHead";
import IndustryCoverageCard from "../../components/home/IndustryCoverageCard";
import { useQuery } from "@apollo/client";
import { GET_INDUSTRY_COVERAGE } from "src/graphql/queries";
import LoadingFallback from "src/components/LoadingFallback";

export interface GetIndustryCoverageData {
  page: {
    title: string;
    homePageFieldsIndustryCoverage: {
      industryCoverageMainHeading: string;
    };
  };
  industries: {
    nodes: {
      title: string;
      content: string | null;
      uri: string;
      featuredImage: {
        node: {
          sourceUrl: string;
        };
      };
      industriesFieldOptions: {
        colorCode: string;
      };
    }[];
  };
}

const IndustryCoverage = () => {
  const { data, loading, error } = useQuery<GetIndustryCoverageData>(
    GET_INDUSTRY_COVERAGE
  );

  if (loading) return <LoadingFallback />;
  if (error)
    return <Typography color="error">Error: {error.message}</Typography>;

  return (
    <Stack
      color={"white"}
      sx={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(114.75deg, #242E40 100%, #343D4D 0%)",
      }}
    >
      <Container maxWidth="xl">
        <SectionHead
          title={
            data?.page?.homePageFieldsIndustryCoverage
              ?.industryCoverageMainHeading || "INDUSTRY COVERAGE"
          }
          titleColor="white"
        />

        <Grid
          container
          rowGap={3}
          mb={10}
          columnSpacing={5}
          alignItems={"center"}
        >
          {data?.industries?.nodes?.map((item, index) => (
            <React.Fragment key={index}>
              <Grid size={{ xs: 12, sm: 6, md: 4 }} mt={3} p={0}>
                <IndustryCoverageCard item={item} />
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Container>
    </Stack>
  );
};

export default IndustryCoverage;
