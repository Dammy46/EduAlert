import Navbar from "@/components/HomeNavbar";
import {
  Box,
  Paper,
  Text,
  createStyles,
  Divider,
  Grid,
  Loader,
  Container,
} from "@mantine/core";
import Head from "next/head";

import { useEffect, useState } from "react";
const useStyles = createStyles((theme) => ({
  overview: {
    display: "flex",
    justifyContent: "space-around",
    [theme.fn.smallerThan("xs")]: {
      alignItems: "center",
      flexDirection: "column",
    },
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.fn.smallerThan("xs")]: {
      marginBottom: "35px",
    },
  },
  vertical: {
    display: "block",
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  overview_num: {
    fontSize: "3.5rem",
    color: "#0CDC12",
  },
  overview_cap: {
    fontSize: "23px",
  },
  data: {
    margin: "4.5rem 0",
  },
}));

export default function Admin() {
  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>EduAlert | Admin</title>
      </Head>
      <Box>
        <header>
          <Navbar />
        </header>
        <Container>
          <Box>
            <Box>
              <Text
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  fontSize: "18px",
                }}
                mb="20px"
              >
                Data Overview
              </Text>
              <Paper shadow="xs" p="md" className={classes.overview}>
                <Box className={classes.card}>
                  <Text component="h2" className={classes.overview_num}>
                    300
                  </Text>
                  <Text transform="capitalize" className={classes.overview_cap}>
                    Total Student
                  </Text>
                </Box>
                <Divider
                  color="#0CDC12"
                  orientation="vertical"
                  className={classes.vertical}
                />

                <Box className={classes.card}>
                  <Text component="h2" className={classes.overview_num}>
                    2.1k
                  </Text>
                  <Text transform="capitalize" className={classes.overview_cap}>
                    Total Staff
                  </Text>
                </Box>
                <Divider
                  color="#0CDC12"
                  orientation="vertical"
                  className={classes.vertical}
                />

                <Box className={classes.card}>
                  <Text component="h2" className={classes.overview_num}>
                    200
                  </Text>
                  <Text transform="capitalize" className={classes.overview_cap}>
                    Total Anouncement
                  </Text>
                </Box>
              </Paper>
            </Box>
            <Box className={classes.data}>
              <Grid>
                <Grid.Col lg={4} md={12}>
                  <Paper shadow="xs" p="md">
                    <Text
                      sx={{
                        display: "inline-flex",
                        alignItems: "flex-start",
                        fontSize: "18px",
                      }}
                      mb="20px"
                    >
                      Student
                    </Text>
                  </Paper>
                </Grid.Col>
                <Grid.Col lg={4} md={12}>
                  <Paper shadow="xs" p="md">
                    <Text
                      sx={{
                        display: "inline-flex",
                        alignItems: "flex-start",
                        fontSize: "18px",
                      }}
                      mb="20px"
                    >
                      Staff
                    </Text>
                  </Paper>
                </Grid.Col>
                <Grid.Col lg={4} md={12}>
                  <Paper shadow="xs" p="md">
                    <Text
                      sx={{
                        display: "inline-flex",
                        alignItems: "flex-start",
                        fontSize: "18px",
                      }}
                      mb="20px"
                    >
                      Anouncement
                    </Text>
                  </Paper>
                </Grid.Col>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
