import { Typography, Box } from "@mui/material";

const Header = () => {
  return (
    <Typography component="div">
      <Box
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "h5.fontSize",
          m: 4,
        }}
      >
        If the 1Password in Safari gets stuck at loading or doesn't open
      </Box>
    </Typography>
  );
};

export default Header;
