"use client";
import {
  Box,
  Container,
  Text,
  createStyles,
  Paper,
  Image,
} from "@mantine/core";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Head from "next/head";

const useStyles = createStyles((theme) => ({
  intro: {
    fontSize: 35,
    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },
  paper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    textAlign: "center",
    marginTop: "3.75em",
    cursor: "pointer",
    boxShadow: "0 1px 10px rgb(0 0 0 / 10%)",
    transition: "all .2s ease-in-out",
    "&:hover": {
      transform: "scale(1.10)",
    },
    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },
  paper2: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    textAlign: "center",
    margin: "3.75em 0",
    cursor: "pointer",
    boxShadow: "0 1px 10px rgb(0 0 0 / 10%)",
    transition: "all .2s ease-in-out",

    "&:hover": {
      transform: "scale(1.10)",
    },
    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },
  paper__img_wrap: {
    width: "200px",
    padding: "20px",
    [theme.fn.smallerThan("xs")]: {
      width: "150px",
    },
  },
  papper__info: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "50px",
    textAlign: "left",
    [theme.fn.smallerThan("xs")]: {
      padding: "20px",
    },
  },
  title: {
    fontSize: "1.5em",
    fontWeight: 600,
    color: "#0A0A0A",
    [theme.fn.smallerThan("xs")]: {
      fontSize: "1.25em",
    },
  },
  desciption: {
    fontSize: "1.125em",
    marginTop: ".374em",
    [theme.fn.smallerThan("xs")]: {
      fontSize: ".9em",
    },
  },
}));

export default function Signup() {
  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>EduAlert | Sign Up</title>
      </Head>
      <Box>
        <header>
          <Navbar />
        </header>
        <Container>
          <Box>
            <Text className={classes.intro} align="center" component="h2">
              Lets get started.
            </Text>
            <Link href="/signup/staff">
              <Paper className={classes.paper}>
                <Box className={classes.paper__img_wrap}>
                  <Image src="/assets/lecturer.svg" alt="" />
                </Box>
                <Box className={classes.papper__info}>
                  <Text className={classes.title}>Sign up as a Staff</Text>
                  {/* <Text className={classes.desciption}>
                    As a job seeker you will be able to search and apply for
                    jobs.
                  </Text> */}
                </Box>
              </Paper>
            </Link>
            <Link href="/signup/student">
              <Paper shadow="lg" className={classes.paper2}>
                <Box className={classes.paper__img_wrap}>
                  <Image src="/assets/student.svg" alt="" />
                </Box>
                <Box className={classes.papper__info}>
                  <Text className={classes.title}>Sign up as a Student</Text>
                  {/* <Text className={classes.desciption}>
                    As an employer you will be able to post your job openings.
                  </Text> */}
                </Box>
              </Paper>
            </Link>
          </Box>
        </Container>
      </Box>
    </>
  );
}
