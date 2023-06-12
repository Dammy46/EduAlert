import Head from "next/head";
import { useForm } from "@mantine/form";
import {
  createStyles,
  Text,
  Box,
  Paper,
  Group,
  Button,
  Container,
  Grid,
  TextInput,
  Center,
  Image,
  Divider,
  PasswordInput,
} from "@mantine/core";
import Navbar from "../../components/HomeNavbar";
import Link from "next/link";

import { useState } from "react";

const useStyles = createStyles((theme) => ({
  app: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid #1f7a1f",
    borderRadius: "8px",
    [theme.fn.smallerThan("xs")]: {
      border: "none",
    },
    padding: "30px",
  },
  intro: {
    fontSize: 35,
    marginTop: 30,
    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },
  form: {
    marginTop: "1rem",
  },
  app__individual: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.fn.smallerThan("xs")]: {
      width: "100%  ",
    },
  },
  app__reset: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    margin: "2rem 0",
    [theme.fn.smallerThan("xs")]: {
      width: "100%  ",
    },
  },
  custom__button: {
    padding: "15px 48px",
    fontSize: "1rem",
    fontWeight: 600,
    border: "none",
    height: "auto",
    width: "100%",
    backgroundColor: "#1f7a1f",
    transition: "all .3s",
    "&:hover": {
      backgroundColor: "#1f7a1f",
    },
    [theme.fn.smallerThan("xs")]: {
      textAlign: "center",
    },
  },
  controls: {
    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column-reverse",
    },
  },
  control: {
    color: "#1f7a1f",
    cursor: "pointer",

    "&:hover": {
      textDecoration: "underline",
    },
    [theme.fn.smallerThan("xs")]: {
      width: "100%",
      textAlign: "center",
    },
  },
  img_wrapper: {
    width: "150px",
    margin: "1.5rem 0",
    padding: "20px",
  },
  divider: {
    width: "80%",
    border: "1px solid #1f7a1f",
    margin: "20px 0",
    [theme.fn.smallerThan("xs")]: {
      width: "100%",
    },
  },
  group: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    gap: "20px",
    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },
  card: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "10px",
    border: "1px solid #1f7a1f",
    borderRadius: "8px",
    padding: "20px",
    cursor: "pointer",
    transition: "all .3s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
}));
const bookSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-book-2"
    width="25%"
    height="25%"
    color="#1f7a1f"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z"></path>
    <path d="M19 16h-12a2 2 0 0 0 -2 2"></path>
    <path d="M9 8h6"></path>
  </svg>
);
const tableSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-layout-grid"
    width="25%"
    height="25%"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="currentColor"
    color="#1f7a1f"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
    <path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
    <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
    <path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
  </svg>
);
const noticeSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-bell-ringing-filled"
    width="25%"
    height="25%"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="currentColor"
    color="#1f7a1f"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path
      d="M17.451 2.344a1 1 0 0 1 1.41 -.099a12.05 12.05 0 0 1 3.048 4.064a1 1 0 1 1 -1.818 .836a10.05 10.05 0 0 0 -2.54 -3.39a1 1 0 0 1 -.1 -1.41z"
      stroke-width="0"
      fill="currentColor"
    ></path>
    <path
      d="M5.136 2.245a1 1 0 0 1 1.312 1.51a10.05 10.05 0 0 0 -2.54 3.39a1 1 0 1 1 -1.817 -.835a12.05 12.05 0 0 1 3.045 -4.065z"
      stroke-width="0"
      fill="currentColor"
    ></path>
    <path
      d="M14.235 19c.865 0 1.322 1.024 .745 1.668a3.992 3.992 0 0 1 -2.98 1.332a3.992 3.992 0 0 1 -2.98 -1.332c-.552 -.616 -.158 -1.579 .634 -1.661l.11 -.006h4.471z"
      stroke-width="0"
      fill="currentColor"
    ></path>
    <path
      d="M12 2c1.358 0 2.506 .903 2.875 2.141l.046 .171l.008 .043a8.013 8.013 0 0 1 4.024 6.069l.028 .287l.019 .289v2.931l.021 .136a3 3 0 0 0 1.143 1.847l.167 .117l.162 .099c.86 .487 .56 1.766 -.377 1.864l-.116 .006h-16c-1.028 0 -1.387 -1.364 -.493 -1.87a3 3 0 0 0 1.472 -2.063l.021 -.143l.001 -2.97a8 8 0 0 1 3.821 -6.454l.248 -.146l.01 -.043a3.003 3.003 0 0 1 2.562 -2.29l.182 -.017l.176 -.004z"
      stroke-width="0"
      fill="currentColor"
    ></path>
  </svg>
);
export default function Profile() {
  const { classes } = useStyles();
  const form = useForm({
    initialValues: {
      email: "",
    },
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
    },
  });

  return (
    <>
      <Head>
        <title>EduAlert | Dashboard</title>
      </Head>
      <Box>
        <header>
          <Navbar />
        </header>
        <Container>
          <Box className={classes.app}>
            <Text align="center" className={classes.intro} component="h2">
              Dashboard
            </Text>
            <Box className={classes.divider} />
            <Paper py="xl" className={classes.app__individual}>
              <Box className={classes.group}>
                <Link href="student/assignment">
                  <Box className={classes.card}>
                    {bookSvg}
                    <Text size="20px" weight={500}>
                      Assignments
                    </Text>
                  </Box>
                </Link>
                <Link href="student/timetable">
                  <Box className={classes.card}>
                    {tableSvg}
                    <Text size="20px" weight={500}>
                      Timetable
                    </Text>
                  </Box>
                </Link>
                <Link href="student/noticeboard">
                  <Box className={classes.card}>
                    {noticeSvg}
                    <Text size="20px" weight={500}>
                      View Notice
                    </Text>
                  </Box>
                </Link>
              </Box>
            </Paper>
          </Box>
        </Container>
      </Box>
    </>
  );
}
