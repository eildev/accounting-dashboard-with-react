import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const MuiSelect = ({ label, value, handleChange, options }) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label={label}
        onChange={handleChange}
      >
        {options.map((item) => (
          <MenuItem key={item.id} value={item?.value ?? ""}>
            {item?.title ?? ""}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MuiSelect;
