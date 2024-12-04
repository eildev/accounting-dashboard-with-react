import { Skeleton, Stack } from "@mui/material";

const SimpleSkeleton = () => {
  return (
    <Stack direction="row" spacing={5}>
      {/* For variant="text", adjust the height via font-size */}
      <Stack>
        <Skeleton variant="text" width={120} sx={{ fontSize: "12px" }} />
        <Skeleton variant="text" width={120} sx={{ fontSize: "28px" }} />
      </Stack>
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular" width={50} height={50} />
    </Stack>
  );
};

export default SimpleSkeleton;
