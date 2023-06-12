import Head from "next/head";
import { useForm } from "@mantine/form";
// import { IconBook2 } from "@tabler/icons";
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
  Input,
  Card,
} from "@mantine/core";
import Navbar from "../../components/HomeNavbar";
import Link from "next/link";

import { useState } from "react";
import { TableArea } from "@/components/TableArea";

const useStyles = createStyles((theme) => ({
  app: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "40px 0",
  },
  searchWrap: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },
  searchForm: {
    border: "2px solid #1f7a1f",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "5px",
  },
  text: {
    flex: ".5",
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },
}));

const searchSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-search"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
    <path d="M21 21l-6 -6"></path>
  </svg>
);
const messages = [
  {
    id: 1,
    sender: "John Doe",
    subject: "uses of English",
    date: "2023-06-01",
    unread: true,
  },
  {
    id: 2,
    sender: "Jane Smith",
    subject: "character building studies",
    date: "2023-06-02",
    unread: false,
  },
  {
    id: 3,
    sender: "Alice Johnson",
    subject: "algbra linear and algorithm",
    date: "2023-06-03",
    unread: true,
  },
  {
    id: 4,
    sender: "John Doe",
    subject: "uses of English",
    date: "2023-06-01",
    unread: true,
  },
  {
    id: 5,
    sender: "Jane Smith",
    subject: "character building studies",
    date: "2023-06-02",
    unread: false,
  },
  {
    id: 6,
    sender: "Alice Johnson",
    subject: "algbra linear and algorithm",
    date: "2023-06-03",
    unread: true,
  },
];
export default function Noticeboard() {
  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>EduAlert | Dashboard</title>
      </Head>
      <Box>
        <header>
          <Navbar />
        </header>
        <Container>
          <Box className={classes.searchWrap}>
            <Text size="24px" weight={600} className={classes.text}>
              Noticeboard
            </Text>
            <Input
              size="lg"
              icon={searchSvg}
              placeholder="search"
              radius="lg"
              sx={{ flex: "1", width: "100%" }}
            />
          </Box>
          <Card p="20px" shadow="md" className={classes.app}>
            <TableArea data={messages} />
          </Card>
        </Container>
      </Box>
    </>
  );
}
