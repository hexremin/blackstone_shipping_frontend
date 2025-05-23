import { Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import SectionHead from "src/components/sectionHead/SectionHead";
import IndustryCoverageCard from "../../components/home/IndustryCoverageCard";
import { useQuery } from "@apollo/client";
import { GET_INDUSTRY_COVERAGE } from "src/graphql/queries";

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
  const { data, loading, error } = useQuery<GetIndustryCoverageData>(GET_INDUSTRY_COVERAGE);

  if (loading) return <Typography color="white">Loading...</Typography>;
  if (error) return <Typography color="error">Error: {error.message}</Typography>;

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
          title={data?.page?.homePageFieldsIndustryCoverage?.industryCoverageMainHeading || "INDUSTRY COVERAGE"}
          titleColor="white"
        />

        <Grid container rowGap={3 } mb={10} columnSpacing={4} justifyContent="space-between">
          {data?.industries?.nodes?.map((item, index) => (
            <Grid mt={3} size={4} width={"359px"} height={"218px"}   key={index} p={0}>
              <IndustryCoverageCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Stack>
  );
};

export default IndustryCoverage;
