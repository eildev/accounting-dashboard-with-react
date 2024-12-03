import * as Icons from "@mui/icons-material";

export const getImage = (iconKey) => {
  if (!iconKey) return <DefaultIcon />; // Return a default icon if no key is provided.
  return iconKey; // Return the resolved JSX (e.g., an SVG or image component).
};
