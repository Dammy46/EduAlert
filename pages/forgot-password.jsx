import Head from 'next/head';
import { useForm } from '@mantine/form';

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
} from '@mantine/core';
import Navbar from '../components/Navbar';
import Link from 'next/link';

import { useState } from 'react';

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
    backgroundColor: "#1f7a1f",
    transition: "all .3s",
    "&:hover": {
      backgroundColor: "#1f7a1f",
    },
    [theme.fn.smallerThan("xs")]: {
      width: "100%",
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
}));

export default function ForgotPassword() {
  const { classes } = useStyles();
  const [display, setDisplay] = useState(false);
  const form = useForm({
    initialValues: {
      email: '',
    },
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
    },
  });


  return (
    <>
      <Head>
        <title>EduAlert | Forgot Password</title>
      </Head>
      <Box>
        <header>
          <Navbar />
        </header>
        <Container>
          {!display ? (
            <Box className={classes.app}>
              <Text align="center" className={classes.intro} component="h2">
                Forgot your password?
              </Text>
              <Text size="sm" align="center" mt={5}>
                Enter your email to get a reset link
              </Text>
              <Paper
                shadow="md"
                radius="md"
                p="xl"
                withBorder
                className={classes.app__individual}
              >
                <form
                  className={classes.form}
                >
                  <Grid>
                    <Grid.Col span={12}>
                      <TextInput
                        placeholder="hello@eduAlert.com"
                        {...form.getInputProps('email')}
                        size="lg"
                        required
                        withAsterisk
                        label="Email"
                        type="email"
                      />
                    </Grid.Col>

                    <Grid.Col span={12}>
                      <Group
                        position="apart"
                        mt="lg"
                        className={classes.controls}
                      >
                        <Link size="sm" href="/signin">
                          <Text className={classes.control}>
                            <Center inline>
                            
                              <Box ml={5}>Back to login page</Box>
                            </Center>
                          </Text>
                        </Link>

                        <Button
                          className={classes.custom__button}
                          type="submit"
                         
                        >
                          Reset password
                        </Button>
                      </Group>
                    </Grid.Col>
                  </Grid>
                </form>
              </Paper>
            </Box>
          ) : (
            <Box className={classes.app}>
              <Paper
                shadow="md"
                radius="md"
                p="xl"
                withBorder
                className={classes.app__reset}
              >
                <Box>
                  <Text
                    component="h2"
                    m=".5rem 0"
                    size="30px"
                    sx={{
                      '@media (max-width: 575px)': {
                        fontSize: '28px',
                      },
                    }}
                    align="center"
                  >
                    Check your email
                  </Text>
                </Box>
                <Text py="107pxpx" align="center">
                  We sent you an email to {''}
                  <span style={{ color: '#0CDC12' }}>
                    {form.values.email}
                  </span>{' '}
                  on how to reset your password.
                </Text>
                <Box className={classes.img_wrapper}>
                  <Image src="/mail.svg" alt="img" />
                </Box>
                <Text
                  onClick={() => setDisplay(false)}
                  sx={{
                    color: '#0CDC12',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  Didn&apos;t get the mail? Send it again
                </Text>
              </Paper>
            </Box>
          )}
        </Container>
      </Box>
    </>
  );
}