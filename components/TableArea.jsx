import { useState } from "react";
import {
  createStyles,
  Table,
  ScrollArea,
  rem,
  Text,
  Badge,
  Button,
} from "@mantine/core";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  header: {
    position: "sticky",
    top: 0,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    transition: "box-shadow 150ms ease",
    zIndex: "10",
    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `${rem(1)} solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[3]
          : theme.colors.gray[2]
      }`,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },
  custom__button: {
  
 
    fontWeight: 500,
    border: "none",

    backgroundColor: "#1f7a1f",

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
}));

export function TableArea({ data }) {
  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = useState(false);
  const handleRowClick = (id) => {
    // Handle row click event, e.g., navigate to message details page
    console.log(`Clicked on message with id: ${id}`);
  };
  return (
    <ScrollArea
      h={300}
      onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
      w="100%"
    >
      <Table miw={700} striped verticalSpacing="md" horizontalSpacing="xl">
        <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
          <tr>
            <th>Lecturer</th>
            <th>Course</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((message) => (
            <tr
              key={message.id}
              onClick={() => handleRowClick(message.id)}
              style={{ cursor: "pointer" }}
            >
              <td>
                <Text size="sm" weight={message.unread && 600}>
                  {message.sender}
                </Text>
              </td>
              <td>
                <Text size="sm" weight={message.unread && 600}>
                  {message.subject}
                </Text>
              </td>
              <td>
                <Text size="sm" weight={message.unread && 600}>
                  {message.date}
                </Text>
              </td>
              <td>
                {message.unread ? (
                  <Badge sx={{ color: "#1f7a1f" }}>Unread</Badge>
                ) : (
                  <Badge color="gray">Read</Badge>
                )}
              </td>
              <td>
                <Button size="xs" className={classes.custom__button}>
                  Archive
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </ScrollArea>
  );
}
