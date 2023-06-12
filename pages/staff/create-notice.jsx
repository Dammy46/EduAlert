"use client";
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  createStyles,
  Box,
  Grid,
  Select,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { department } from "@/utils/data";

const useStyles = createStyles((theme) => ({
  app: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  intro: {
    fontSize: 35,
    margin: 0,
    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },
  form: {
    marginTop: "1rem",
  },
  app__individual: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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
    backgroundColor: "#1f7a1f",
    width: "100%",
    transition: "all .3s",
    "&:hover": {
      backgroundColor: "#1f7a1f",
    },
  },
  alt: {
    width: "100%",
    justifyContent: "center",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    marginTop: "1em",
  },
  forgot: {
    padding: "16px",
    color: "#1f7a1f",
  },
  reset: {
    textDecoration: "underline",
    color: "#1f7a1f",
  },
  link: {
    color: "#1f7a1f",
    "&:hover": {
      textDecoration: "underline",
    },
  },

  app__input: {
    input: {
      "&:focus": {
        borderColor: "#1f7a1f",
        outline: "none",
      },
    },
  },
  schoolBackground: {
    position: "absolute",
    top: "0",
    backgroundColor: "#1f7a1f",
  },
}));

const Login = () => {
  const { classes } = useStyles();
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  return (
    <>
      <Head>
        <title>EduAlert | Sign In</title>
      </Head>
      <Box sx={{ position: "relative" }}>
        <Box className={classes.schoolBackground} />
        <header>
          <Navbar />
        </header>
        <Container>
          <Box className={classes.app}>
            <Paper
              shadow="md"
              className={classes.app__individual}
              radius="md"
              p="xl"
              withBorder
            >
              <form className={classes.form}>
                <Grid>
                  <Grid.Col span={12}>
                    <Select
                      className={classes.app__input}
                      label="Department"
                      placeholder="Pick one"
                      size="lg"
                      data={department}
                      searchable
                      styles={() => ({
                        item: {
                          "&[data-selected]": {
                            "&, &:hover": {
                              backgroundColor: "#1f7a1f",
                            },
                          },
                        },
                      })}
                    />
                  </Grid.Col>

                  <Grid.Col span={12}>
                    <TextInput
                      className={classes.app__input}
                      placeholder="Use of English"
                      size="lg"
                      label="Course"
                      type="text"
                    />
                  </Grid.Col>
                  <Grid.Col span={12}>
                    <Textarea
                      placeholder="Compose Message"
                      label="Compose Message"
                      minRows={8}
                      size="lg"
                    />
                  </Grid.Col>

                  <Grid.Col span={12}>
                    <Button
                      radius="md"
                      className={classes.custom__button}
                      type="submit"
                      size="lg"
                    >
                      Upload Message
                    </Button>
                  </Grid.Col>
                </Grid>
              </form>
            </Paper>
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default Login;
