import {
  Box,
  Button,
  createStyles,
  Group,
  Loader,
  Text,
  Container,
} from "@mantine/core";
import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/HomeNavbar";

// const useStyles = createStyles((theme) => ({
//   app__header: {
//     textAlign: "center",
//     fontSize: "3.75rem",
//     paddingTop: "4rem",
//     [theme.fn.smallerThan("md")]: {
//       fontSize: "2.75rem",
//       paddingTop: "2rem",
//     },
//     [theme.fn.smallerThan("xs")]: {
//       fontSize: "32px",
//       textAlign: "left",
//     },
//   },
//   app__header_text: {
//     textAlign: "center",
//     fontSize: "1.27rem",
//     marginTop: "1.5rem",
//     [theme.fn.smallerThan("xs")]: {
//       marginTop: "1.27rem",
//       fontSize: "20px",
//       textAlign: "left",
//     },
//   },
//   button__wrap: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: "2rem",
//     [theme.fn.smallerThan("xs")]: {
//       flexDirection: "column",
//       alignItems: "flex-start",
//       marginTop: "1.5rem",
//     },
//   },
//   custom__button2: {
//     background: "none",
//     transition: "all .3s",
//     border: "2px solid #1f7a1f",
//     color: "#1f7a1f",

//     "&:hover": {
//       backgroundColor: "#1f7a1f",
//       color: "#fff",
//     },
//   },
// }));

export default function Home() {
  //   const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>EduAlert | Staff</title>
      </Head>
      <Box>
        <header>
          <Navbar />
        </header>
        <Container>
          <Text>Settings...</Text>
          {/* <Box
            sx={{
              height: "100%",
              "@media (max-width: 575px)": {
                height: "65%",
              },
            }}
          >
            <Text component="h2" className={classes.app__header}>
              Empowering Education with Instant Notifications.
            </Text>
            <Text className={classes.app__header_text}>
              EduAlert is a powerful platform designed to empower education by
              delivering instant notifications to students, and lecturer.
            </Text>
            <Box className={classes.button__wrap}>
              <Link href="/signin">
                <Button
                  size="lg"
                  className={classes.custom__button2}
                  sx={{
                    "@media (max-width: 575px)": {
                      width: "100%",
                      marginTop: "20px",
                    },
                  }}
                >
                  Sign in to apply
                </Button>
              </Link>
            </Box>
          </Box> */}
        </Container>
      </Box>
    </>
  );
}
