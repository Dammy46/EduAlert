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
    alignItems: "center",
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
      fontSize: "1.25rem",
    },
    "&:hover": {
      color: "#1f7a1f",
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


  return (
    <Header height={HEADER_HEIGHT} mb={45} className={classes.root}>
      <Container className={classes.header}>
        <Box className={classes.img}>
          <Link href="/">
            <Image src="/brand.png" alt="edu-alert" width={130} />
          </Link>
        </Box>
        <Group spacing={5}>
 
          <Menu
            trigger="click"
            exitTransitionDuration={0}
            className={classes.dropdown}
            withArrow
          >
            <Menu.Target>
              <Box>
                <Center>
                
                    <Avatar
                      src={
                        "https://ui-avatars.com/api/?name=John+Doe&background=0A0A0A&color=fff&bold=true"
                      }
                      alt=""
                      radius="xl"
                    />
                  
                  {/* <IconChevronDown
                    size={12}
                    stroke={1.5}
                    className={classes.Icon}
                  /> */}
                </Center>
              </Box>
            </Menu.Target>
            <Menu.Dropdown>
              <Text
                align="center"
                weight="600"
                px="md"
                size="md"
                transform="capitalize"
              >
               John Doe
              </Text>
              <Text align="center" size="xs">
              Doe@gmail.com
              </Text>
              <Divider mt="xs" />
      
                <Link href="/profile">
                  <Menu.Item p={5}>Profile</Menu.Item>
                </Link>
            
              <Link href="/settings">
                <Menu.Item p={5}>Settings</Menu.Item>
              </Link>
              <Divider mt="xs" />
              <Link href="">
                <Text >
                  <Menu.Item p={5}>Sign out</Menu.Item>
                </Text>
              </Link>
            </Menu.Dropdown>
          </Menu>
        </Group>

      
      </Container>
    </Header>
  );
}
