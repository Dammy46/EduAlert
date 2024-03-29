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
} from "@mantine/core";
import { useForm } from "@mantine/form";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

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
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  const handleFormSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://edualert.skinx.skin/login.php",
        form.values
      );
      console.log(response);
      const { token } = response.data[0];
      const { fullname } = response.data[0].results;
      localStorage.setItem("token", token);
      if (fullname === "Admin") {
        router.push("/admin");
      } else {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
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
            <Text align="center" component="h2" className={classes.intro}>
              Welcome back!
            </Text>
            <Text size="sm" align="center" mt={5}>
              Do not have an account yet?{" "}
              <Link href="/signup" className={classes.link}>
                Create an account
              </Link>
            </Text>
            <Paper
              shadow="md"
              className={classes.app__individual}
              radius="md"
              p="xl"
              withBorder
            >
              <form
                className={classes.form}
                onSubmit={form.onSubmit(handleFormSubmit)}
              >
                <Grid>
                  <Grid.Col span={12}>
                    <TextInput
                      placeholder="hello@eduAlert.com"
                      className={classes.app__input}
                      size="lg"
                      required
                      withAsterisk
                      label="Email"
                      value={form.values.email}
                      onChange={(event) =>
                        form.setFieldValue("email", event.currentTarget.value)
                      }
                    />
                  </Grid.Col>

                  <Grid.Col span={12}>
                    <PasswordInput
                      withAsterisk
                      placeholder="Password"
                      size="lg"
                      required
                      label="Password"
                      value={form.values.password}
                      onChange={(event) =>
                        form.setFieldValue(
                          "password",
                          event.currentTarget.value
                        )
                      }
                    />
                  </Grid.Col>
                  <Grid.Col span={12}>
                    <Group position="right" mt="md">
                      <Link href="/forgot-password" className={classes.reset}>
                        Forgot password?
                      </Link>
                    </Group>
                  </Grid.Col>

                  <Grid.Col span={12}>
                    <Button
                      radius="md"
                      className={classes.custom__button}
                      type="submit"
                      loading={isLoading}
                      disabled={isLoading}
                    >
                      Sign In
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
