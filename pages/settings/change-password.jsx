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
  Popover,
  Progress,
} from "@mantine/core";
import Navbar from "../../components/HomeNavbar";
import Link from "next/link";

import { useState } from "react";
import axios from "axios";

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
    width: "50%",
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
      {meets ? "?" : "*"}
      <Box ml={10}>{label}</Box>
    </Text>
  );
};

export default function ChangePassword() {
  const { classes } = useStyles();
  const [popoverOpened, setPopoverOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");

  const form = useForm({
    initialValues: {
      token: "",
      old_password: "",
      new_password: "",
      confirm_password: "",
    },
  });
  const strength = getStrength(form.values.new_password);
  const color = strength === 100 ? "teal" : strength > 50 ? "yellow" : "red";
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement
      key={index}
      label={requirement.label}
      meets={requirement.re.test(form.values.new_password)}
    />
  ));
  const handleFormSubmit = async () => {
    setIsLoading(true);
    const getToken = token;
    const dataToSubmit = {
      ...form.values,
      token: getToken,
    };
    try {
      const response = await axios.post(
        "https://edualert.skinx.skin/change_password.php",
        dataToSubmit
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  if (!token) return;
  return (
    <>
      <Head>
        <title>EduAlert | Change Password</title>
      </Head>
      <Box>
        <header>
          <Navbar />
        </header>
        <Container>
          <Box className={classes.app}>
            <Text align="center" className={classes.intro} component="h2">
              Change Password
            </Text>
            <Box className={classes.divider} />
            <Paper py="xl" className={classes.app__individual}>
              <form
                className={classes.form}
                onSubmit={form.onSubmit(handleFormSubmit)}
              >
                <Grid>
                  <Grid.Col span={12}>
                    <PasswordInput
                      withAsterisk
                      placeholder="Enter your old password"
                      size="lg"
                      value={form.values.old_password}
                      onChange={(event) =>
                        form.setFieldValue(
                          "old_password",
                          event.currentTarget.value
                        )
                      }
                      label="Old Password"
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
                            size="lg"
                            label="Password"
                            value={form.values.new_password}
                            onChange={(event) =>
                              form.setFieldValue(
                                "new_password",
                                event.currentTarget.value
                              )
                            }
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
                          meets={form.values.new_password.length > 5}
                        />
                        {checks}
                      </Popover.Dropdown>
                    </Popover>
                  </Grid.Col>
                  <Grid.Col span={12}>
                    <PasswordInput
                      withAsterisk
                      placeholder="Confirm your new password"
                      size="lg"
                      value={form.values.confirm_password}
                      onChange={(event) =>
                        form.setFieldValue(
                          "confirm_password",
                          event.currentTarget.value
                        )
                      }
                      label="Confirm Password"
                    />
                  </Grid.Col>

                  <Grid.Col span={12}>
                    <Button
                      className={classes.custom__button}
                      type="submit"
                      size="lg"
                      loading={isLoading}
                      disabled={isLoading}
                    >
                      Change
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
}
