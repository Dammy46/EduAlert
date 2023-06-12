"use client";
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  Image,
  Button,
  CloseButton,
  Box,
  Avatar,
  Menu,
  Center,
  Divider,
  Text,
} from "@mantine/core";
// import { Notification } from "tabler-icons-react";
import { useDisclosure } from "@mantine/hooks";
// import { Notification } from "@tabler/icons";
import { useRouter } from "next/router";
import Link from "next/link";

const HEADER_HEIGHT = 100;

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
    border: "none",
    boxShadow: "0 1px 10px rgb(0 0 0 / 10%)",
  },

  navbar__menu: {
    position: "fixed",
    top: 0,
    right: 0,
    zIndex: 2,
    borderLeft: "1px solid #dee2e6",
    overflow: "hidden",
    width: "80%",
    height: "100vh",
    justifyContent: "flex-start",
    alignContent: "center",
    padding: "20px",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
  navbar__menu_links: {
    alignItems: "flex-end",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "flex-start",
    margin: 0,
    padding: 0,
    width: "100%",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    maxWidth: "100%",
    padding: 0,
    paddingLeft: "16px",
    paddingRight: "16px",
    maxWidth: "960px",
    marginLeft: "auto",
    marginRight: "auto",
  },

  hideLg: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
  custom__button: {
    padding: "15px 48px",
    fontSize: "1rem",
    fontWeight: 600,
    border: "none",
    backgroundColor: "#1f7a1f",
    marginLeft: "1rem",
    marginRight: "1.5rem",
    "&:hover": {
      backgroundColor: "#1f7a1f",
    },
    [theme.fn.smallerThan("sm")]: {
      margin: "1rem 0",
      width: " 100%",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
  burgerClose: {
    marginLeft: "auto",
    marginTop: "1rem",
    marginRight: "0",
    marginBottom: "1rem",
    color: "#0A0A0A",
  },
  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
  link: {
    display: "block",
    lineHeight: 1,
    margin: "0 1rem",
    textDecoration: "none",
    color: "#0A0A0A",
    fontWeight: 400,
    transition: "all .3s",
    letterSpacing: "3px",
    [theme.fn.smallerThan("sm")]: {
      margin: "1rem 0",
      fontSize: "1rem",
    },
    "&:hover": {
      color: "#1f7a1f",
      borderBottom: "2px solid #1f7a1f",
      paddingBottom: "8px",
      textDecoration: "none",
    },
  },
  dropdown: {
    cursor: "pointer",
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
  img: {
    cursor: "pointer",
  },
  Icon: {
    marginLeft: "5px",
  },
}));

export default function HomeNavbar() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes, cx } = useStyles();

  let linksData = [
    {
      link: "student",
      label: "Dashboard",
    },
    {
      link: "settings/change-password",
      label: "Change Password",
    },
    {
      link: "settings/profile",
      label: "Profile",
    },
  ];

  const items = linksData.map((link) => (
    <Link key={link.label} href={`/${link.link}`}>
      <Text
        className={cx(classes.link)}
        onClick={() => {
          close();
        }}
      >
        {link.label}
      </Text>
    </Link>
  ));

  return (
    <Header height={HEADER_HEIGHT} mb={45} className={classes.root}>
      <Container className={classes.header}>
        <Box className={classes.img}>
          <Link href="/">
            <Image src="/brand.png" alt="edu-alert" width={130} />
          </Link>
        </Box>
        <Group spacing={5} className={classes.links}>
          {items}

          <Link href="/signin">
            <Text className={cx(classes.link)}>Signout</Text>
          </Link>
        </Group>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.navbar__menu} withBorder style={styles}>
              <CloseButton
                className={classes.burgerClose}
                onClick={(e) => close()}
                size="xl"
                iconSize={20}
              />
              <div className={classes.navbar__menu_links}>
                {items}

                <Link href="/signin">
                  <Text className={cx(classes.link)}>Signout</Text>
                </Link>
              </div>
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}
