import { Box, createStyles, Loader } from "@mantine/core";
const useStyles = createStyles((theme) => ({
  app: {
    position: "relative",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function Preloader() {
  const { classes } = useStyles();

  return (
    <Box className={classes.app}>
      <Loader variant="bars" color="#1f7a1f" size="lg" />
    </Box>
  );
}
