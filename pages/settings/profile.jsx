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
  ActionIcon,
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
}));
const editSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-pencil"
    width="20"
    height="20"
    style={{ marginLeft: "8px" }}
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    color="#1f7a1f"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
    <path d="M13.5 6.5l4 4"></path>
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
        <title>EduAlert | Profile</title>
      </Head>
      <Box>
        <header>
          <Navbar />
        </header>
        <Container>
          <Box className={classes.app} my="30px">
            <Text align="center" className={classes.intro} component="h2">
              Personal Details
            </Text>
            <Box className={classes.divider} />
            <Paper py="xl" className={classes.app__individual}>
              <Grid>
                <Grid.Col span={12}>
                  <Text size={20} weight={600}>
                    Name
                  </Text>
                  <Text>Abdulkareem Azeez</Text>
                </Grid.Col>
                <Grid.Col span={12}>
                  <Text size={20} weight={600}>
                    Matriculation Number
                  </Text>
                  <Text>ND/21/COM/FT/1000</Text>
                </Grid.Col>
                <Grid.Col span={12}>
                  <Text size={20} weight={600}>
                    Department
                  </Text>
                  <Text>Computer Science</Text>
                </Grid.Col>
                <Grid.Col span={12}>
                  <Text
                    size={20}
                    weight={600}
                    display="inline-flex"
                    sx={{ alignItems: "center" }}
                  >
                    Phone Number
                    {editSvg}
                  </Text>

                  <Text>08021090706</Text>
                </Grid.Col>
                <Grid.Col span={12}>
                  <Text
                    size={20}
                    weight={600}
                    display="inline-flex"
                    sx={{ alignItems: "center" }}
                  >
                    Email Address
                    {editSvg}
                  </Text>
                  <Text>abd8ulazezz22@gmail.com</Text>
                </Grid.Col>
              </Grid>
            </Paper>
          </Box>
        </Container>
      </Box>
    </>
  );
}
