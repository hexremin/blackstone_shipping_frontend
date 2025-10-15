/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useMemo } from "react";
import {
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Typography,
  Container,
  Grid,
  Select,
  MenuItem,
  CircularProgress,
  InputAdornment,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";

interface ImageNode {
  node: { sourceUrl: string };
}

interface CarbonCalculatorInterface {
  calculatorSectionTitle: string;
  calculatorSectionImage: ImageNode;
  calculatorSectionContent: string;
}

type PortOption = {
  label: string;
  value: string;
  portNameOnly: string;
  portCode: string;
};

const CarbonCalculator = ({ data }: { data: CarbonCalculatorInterface }) => {
  const [pol, setPol] = useState<PortOption | null>(null);
  const [pod, setPod] = useState<PortOption | null>(null);
  const [grossWeight, setGrossWeight] = useState("");
  const [weightUnit, setWeightUnit] = useState("KGS");
  const [mtco2e, setMtco2e] = useState<string>("0 MTCO2e");

  const [loadingPol, setLoadingPol] = useState(false);
  const [loadingPod, setLoadingPod] = useState(false);
  const [polOptions, setPolOptions] = useState<PortOption[]>([]);
  const [podOptions, setPodOptions] = useState<PortOption[]>([]);

  const [polSearch, setPolSearch] = useState("");
  const [podSearch, setPodSearch] = useState("");

  const API_BASE = "https://api.blackstoneshipping.com/master-api";

  const debounce = (func: (...args: any[]) => void, delay: number) => {
    let timer: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  const fetchPorts = async (searchText: string, type: "POL" | "POD") => {
    if (!searchText.trim()) return;

    try {
      type === "POL" ? setLoadingPol(true) : setLoadingPod(true);
      const response = await axios.get(
        `${API_BASE}/port/Get_Port_Auto?searchText=${searchText}&type=${type}`
      );

      const results = response.data?.result?.Table || [];
      const mapped = results.map((p: any) => ({
        label: p.Label,
        value: p.Value,
        portNameOnly: p.PortNameOnly,
        portCode: p.PortCode,
      }));
      type === "POL" ? setPolOptions(mapped) : setPodOptions(mapped);
    } catch (err) {
      console.error("Error fetching ports:", err);
    } finally {
      type === "POL" ? setLoadingPol(false) : setLoadingPod(false);
    }
  };

  const debouncedFetchPol = useMemo(
    () => debounce((text: string) => fetchPorts(text, "POL"), 500),
    []
  );

  const debouncedFetchPod = useMemo(
    () => debounce((text: string) => fetchPorts(text, "POD"), 500),
    []
  );

  useEffect(() => {
    if (polSearch) debouncedFetchPol(polSearch);
  }, [polSearch]);

  useEffect(() => {
    if (podSearch) debouncedFetchPod(podSearch);
  }, [podSearch]);

  const handleCalculate = async () => {
    if (!pol?.value || !pod?.value || !grossWeight) {
      // alert("Please fill all fields");
      return;
    }

    try {
      const response = await axios.get(
        `${API_BASE}/report/get_sustain_Web`,
        {
          params: {
            PolID: pol.value,
            PodID: pod.value,
            GrWt: grossWeight,
            WtUnit: weightUnit,
            ContType: "G",
          },
        }
      );

      const result = response.data?.result?.Table?.[0]?.MTCO2e;
      if (result !== undefined) {
        setMtco2e(`${parseFloat(result).toFixed(2)} MTCO2e`);
      }
    } catch (err) {
      console.error("Error fetching emission data:", err);
    }
  };

  const styledContent = data.calculatorSectionContent.replace(
    /(sustainability@blackstoneshipping\.com)/g,
    '<a href="mailto:$1" style="color:#1A56DB;">$1</a>'
  );

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 5 }}>
            <img
              src={data.calculatorSectionImage.node.sourceUrl}
              alt="Carbon Emissions"
              width="100%"
              height="400px"
              style={{ objectFit: "cover", borderRadius: "8px" }}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="h2" gutterBottom>
              {data.calculatorSectionTitle}
            </Typography>

            {/* Port of Loading */}
            <Autocomplete
              options={polOptions}
              loading={loadingPol}
              value={pol}
              onChange={(e, newValue) => setPol(newValue)}
              onInputChange={(e, value) => setPolSearch(value)}
              getOptionLabel={(option) => option.label || ""}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Port of Loading (POL)"
                  placeholder="Start typing to search port..."
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <>
                        {loadingPol ? (
                          <CircularProgress size={20} />
                        ) : null}
                        {params.InputProps.endAdornment}
                      </>
                    ),
                  }}
                />
              )}
            />

            {/* Port of Discharge */}
            <Autocomplete
              options={podOptions}
              loading={loadingPod}
              value={pod}
              onChange={(e, newValue) => setPod(newValue)}
              onInputChange={(e, value) => setPodSearch(value)}
              getOptionLabel={(option) => option.label || ""}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Port of Discharge (POD)"
                  placeholder="Start typing to search port..."
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <>
                        {loadingPod ? (
                          <CircularProgress size={20} />
                        ) : null}
                        {params.InputProps.endAdornment}
                      </>
                    ),
                  }}
                />
              )}
            />

            <Grid container spacing={2} alignItems="center" marginTop={1}>
              <Grid size={{ xs: 6 }}>
                <TextField
                  fullWidth
                  label="Gross Weight"
                  type="number"
                  value={grossWeight}
                  onChange={(e) => setGrossWeight(e.target.value)}
                  margin="normal"
                  variant="outlined"
                />
              </Grid>

              <Grid size={{ xs: 6 }}>
                <FormControl fullWidth margin="normal" variant="outlined">
                  <InputLabel>Weight Unit</InputLabel>
                  <Select
                    value={weightUnit}
                    onChange={(e) => setWeightUnit(e.target.value)}
                    label="Weight Unit"
                  >
                    <MenuItem value="KGS">KGS</MenuItem>
                    <MenuItem value="TON">TON</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid size={{ xs: 6 }}>
                <Box
                  sx={{
                    borderBottom: "1px solid rgba(45, 55, 72, 1)",
                    padding: 1,
                  }}
                >
                  <Typography
                    variant="h3"
                    color="rgba(32, 189, 103, 1)"
                    sx={{ textAlign: "center !important" }}
                  >
                    {mtco2e}
                  </Typography>
                </Box>
              </Grid>

              <Grid size={{ xs: 6 }}>
                <Button
                  fullWidth
                  size="large"
                  variant="contained"
                  color="primary"
                  onClick={handleCalculate}
                >
                  Calculate
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4 }}>
          <Typography
            variant="body2"
            sx={{
              fontStyle: "medium italic",
              "& p": { fontStyle: "italic" },
            }}
            color="rgba(45, 55, 72, 0.5)"
            dangerouslySetInnerHTML={{ __html: styledContent }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default CarbonCalculator;
