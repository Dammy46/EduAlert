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
} from "@mantine/core";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useForm } from "@mantine/form";
import { IconCheck, IconX } from "@tabler/icons-react";
import Head from "next/head";
import { useState } from "react";


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
  const form = useForm({
    initialValues: {
      fullName: "",
      matricNumber: "",
      email: "",
      institute: "",
      department: "",
      level: "",
      modeOfStudy: "",
      password: "",
      confirmPassword: "",
    },
    validate: {
      fullName: (value) =>
        /^[A-Za-z]+$/.test(value) ? null : "No special characters or number",

      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
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
              <form>
                <Grid>
                  <Grid.Col span={12}>
                    <TextInput
                      className={classes.app__input}
                      placeholder="John Doe"
                      size="lg"
                      required
                      withAsterisk
                      label="Full Name"
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
                      type="text"
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
                            {...form.getInputProps("password")}
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
                      {...form.getInputProps("confirmPassword")}
                      label="Confirm Password"
                    />
                  </Grid.Col>

                  <Grid.Col span={12}>
                    <Group
                      position="apart"
                      mt="xl"
                      className={classes.controls}
                    >
                      <Link size="sm" href="/">
                        <Text className={classes.control}>
                          Already have an account? Login
                        </Text>
                      </Link>
                      <Button type="submit" className={classes.custom__button}>
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
