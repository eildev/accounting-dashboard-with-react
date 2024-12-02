import { Box, Stack, Typography } from "@mui/material";
import MuiSelect from "./MuiSelect";
import { Paragraph } from "./Typography/MuiTypography";

const ChartTitle = ({
  title,
  subtitle,
  selectProps: { label, value, handleChange, options },
}) => (
  <Stack
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    spacing={0}
    sx={{ marginBottom: 2 }}
  >
    <Box>
      <Typography variant="h5">{title}</Typography>
      <Paragraph>{subtitle}</Paragraph>
    </Box>
    <Box>
      <MuiSelect
        label={label}
        value={value}
        handleChange={handleChange}
        options={options}
      />
    </Box>
  </Stack>
);

export default ChartTitle;
