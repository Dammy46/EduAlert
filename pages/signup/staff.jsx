"use client";
import {
  createStyles,
  Progress,
  Text,
  Popover,
  Box,
  Paper,
  Group,
  Button,
  Container,
  Grid,
  PasswordInput,
  TextInput,
  Notification,
} from "@mantine/core";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useForm } from "@mantine/form";
import { IconCheck, IconX } from "@tabler/icons-react";
import Head from "next/head";
import { useEffect, useState } from "react";
import ClientService from "../../utils/ClientService";
import axios from "axios";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
  app: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  app__signup: {
    width: "70%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "2rem",

    [theme.fn.smallerThan("xs")]: {
      width: "100%  ",
    },
  },
  intro: {
    fontSize: 35,
    [theme.fn.smallerThan("xs")]: {
      fontSize: 27,
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
    "&:hover": {
      backgroundColor: "#1f7a1f",
    },
    "&:disabled": {
      backgroundColor: "#1f7a1f",
      color: "#fff",
    },
    [theme.fn.smallerThan("xs")]: {
      textAlign: "center",
    },
  },

  controls: {
    flexDirection: "column-reverse",
  },
  anchor: {
    color: "#1f7a1f",
  },
  control: {
    color: "#1f7a1f",
    [theme.fn.smallerThan("xs")]: {
      width: "100%",
      textAlign: "center",
    },
  },
}));
const requirements = [
  { re: /[0-9]/, label: "Includes number" },
  { re: /[a-z]/, label: "Includes lowercase letter" },
  { re: /[A-Z]/, label: "Includes uppercase letter" },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Includes special symbol" },
];

const getStrength = (string) => {
  let multiplier = string.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(string)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
};
const PasswordRequirement = ({ meets, label }) => {
  return (
    <Text
      color={meets ? "teal" : "red"}
      sx={{ display: "flex", alignItems: "center" }}
      mt={7}
      size="sm"
    >
      {meets ? <IconCheck size={14} /> : <IconX size={14} />}{" "}
      <Box ml={10}>{label}</Box>
    </Text>
  );
};

const Student = () => {
  const { classes } = useStyles();
  const [popoverOpened, setPopoverOpened] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter  ()
  const form = useForm({
    initialValues: {
      fullname: "",
      user_id: "",
      email: "",
      phone: "",
      password: "",
      cpassword: "",
    },
    validationRules: {
      fullname: (value) =>
        /^[A-Za-z\s]+$/.test(value) || "Only letters and spaces are allowed",
      user_id: (value) =>
        /^[A-Za-z0-9]+$/.test(value) || "Only letters and numbers are allowed",
      email: (value) => /^\S+@\S+$/.test(value) || "Invalid email format",
      phone: (value) => /^\d{10}$/.test(value) || "Invalid phone number format",
      cpassword: (value, values) =>
        value === values.password || "Passwords do not match",
    },
  });
  const strength = getStrength(form.values.password);
  const color = strength === 100 ? "teal" : strength > 50 ? "yellow" : "red";
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement
      key={index}
      label={requirement.label}
      meets={requirement.re.test(form.values.password)}
    />
  ));
  const handleFormSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://edualert.skinx.skin/staff_register.php",
        form.values
      );
      setIsSignedIn(true);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    let notificationTimer;

    if (isSignedIn) {
      notificationTimer = setTimeout(() => {
        setIsSignedIn(false);
      }, 3000);
    }

    return () => {
      clearTimeout(notificationTimer);
      router.push("/signin")
    };
  }, [isSignedIn]);
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
          {isSignedIn && (
            <Notification color="teal" title="Registration Successful!">
              Your Account is Under Review.
            </Notification>
          )}
          <Box className={classes.app}>
            <Text
              align="center"
              className={classes.intro}
              component="h2"
              mt={0}
            >
              Create a Staff account
            </Text>

            <Paper
              shadow="md"
              radius="md"
              p="xl"
              withBorder
              className={classes.app__signup}
            >
              <form onSubmit={form.onSubmit(handleFormSubmit)}>
                <Grid>
                  <Grid.Col span={12}>
                    <TextInput
                      className={classes.app__input}
                      placeholder="John Doe"
                      size="lg"
                      required
                      withAsterisk
                      label="Full Name"
                      value={form.values.fullname}
                      onChange={(event) =>
                        form.setFieldValue(
                          "fullname",
                          event.currentTarget.value
                        )
                      }
                      error={form.errors.fullname}
                    />
                  </Grid.Col>
                  <Grid.Col span={12}>
                    <TextInput
                      className={classes.app__input}
                      placeholder="ID Number"
                      size="lg"
                      required
                      withAsterisk
                      label="ID Num"
                      value={form.values.user_id}
                      onChange={(event) =>
                        form.setFieldValue("user_id", event.currentTarget.value)
                      }
                      error={form.errors.user_id}
                    />
                  </Grid.Col>
                  <Grid.Col span={12}>
                    <TextInput
                      className={classes.app__input}
                      placeholder="hello@EduAlert.com"
                      size="lg"
                      required
                      withAsterisk
                      label="Email"
                      type="email"
                      value={form.values.email}
                      onChange={(event) =>
                        form.setFieldValue("email", event.currentTarget.value)
                      }
                      error={form.errors.email}
                    />
                  </Grid.Col>
                  <Grid.Col span={12}>
                    <TextInput
                      className={classes.app__input}
                      placeholder="+234"
                      size="lg"
                      required
                      withAsterisk
                      label="Phone Number"
                      type="number"
                      value={form.values.phone}
                      onChange={(event) =>
                        form.setFieldValue("phone", event.currentTarget.value)
                      }
                      error={form.errors.phone}
                    />
                  </Grid.Col>

                  <Grid.Col span={12}>
                    <Popover
                      opened={popoverOpened}
                      position="bottom"
                      width="target"
                      transition="pop"
                    >
                      <Popover.Target>
                        <div
                          onFocusCapture={() => setPopoverOpened(true)}
                          onBlurCapture={() => setPopoverOpened(false)}
                        >
                          <PasswordInput
                            withAsterisk
                            placeholder="Password"
                            value={form.values.password}
                            onChange={(event) =>
                              form.setFieldValue(
                                "password",
                                event.currentTarget.value
                              )
                            }
                            error={form.errors.password}
                            size="lg"
                            label="Password"
                          />
                        </div>
                      </Popover.Target>
                      <Popover.Dropdown>
                        <Progress
                          color={color}
                          value={strength}
                          size={5}
                          style={{ marginBottom: 10 }}
                        />
                        <PasswordRequirement
                          label="Includes at least 6 characters"
                          meets={form.values.password.length > 5}
                        />
                        {checks}
                      </Popover.Dropdown>
                    </Popover>
                  </Grid.Col>

                  <Grid.Col span={12}>
                    <PasswordInput
                      withAsterisk
                      placeholder="Confirm Password"
                      size="lg"
                      value={form.values.cpassword}
                      onChange={(event) =>
                        form.setFieldValue(
                          "cpassword",
                          event.currentTarget.value
                        )
                      }
                      error={form.errors.cpassword}
                      label="Confirm Password"
                    />
                  </Grid.Col>

                  <Grid.Col span={12}>
                    <Group
                      position="apart"
                      mt="xl"
                      className={classes.controls}
                    >
                      <Link size="sm" href="/signin">
                        <Text className={classes.control}>
                          Already have an account? Login
                        </Text>
                      </Link>
                      <Button
                        type="submit"
                        loading={isLoading}
                        disabled={isLoading}
                        className={classes.custom__button}
                      >
                        Register
                      </Button>
                    </Group>
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
export default Student;
