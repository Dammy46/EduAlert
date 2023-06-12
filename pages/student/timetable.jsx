import Head from "next/head";
import { Box, Card, Container, ScrollArea, Table, Text } from "@mantine/core";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import HomeNavbar from "@/components/HomeNavbar";

const TimetablePage = () => {
  const [scrolled, setScrolled] = useState(false);
  const timetable = [
    { time: "9AM-12PM", day: "Monday", event: "Logic and Linear Algebra" },
    { time: "8AM-11AM", day: "Tuesday", event: "Programming with Python" },
    { time: "9AM-12PM", day: "Wednesday", event: "Uses of English" },
    { time: "9AM-12PM", day: "Thursday", event: "Assembly Language" },
    { time: "9AM-12PM", day: "Friday", event: "Character Building Studies" },
    { time: "9AM-12PM", day: "Monday", event: "Logic and Linear Algebra" },
    { time: "8AM-11AM", day: "Tuesday", event: "Programming with Python" },
    { time: "9AM-12PM", day: "Wednesday", event: "Uses of English" },
    { time: "9AM-12PM", day: "Thursday", event: "Assembly Language" },
    { time: "9AM-12PM", day: "Friday", event: "Character Building Studies" },
    { time: "9AM-12PM", day: "Monday", event: "Logic and Linear Algebra" },
    { time: "8AM-11AM", day: "Tuesday", event: "Programming with Python" },
    { time: "9AM-12PM", day: "Wednesday", event: "Uses of English" },
    { time: "9AM-12PM", day: "Thursday", event: "Assembly Language" },
    { time: "9AM-12PM", day: "Friday", event: "Character Building Studies" },
  ];

  return (
    <>
      <Head>
        <title>EduAlert | Timetable</title>
      </Head>
      <Box>
        <header>
          <HomeNavbar />
        </header>
        <Container>
          <Text size="24px" weight={600}>
            Timetable
          </Text>
          <Card p="20px" shadow="md"
            my="20px"
          >
            <ScrollArea
              h={500}
              onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
              w="100%"
            >
              <Table
                miw={700}
                striped
                verticalSpacing="md"
                horizontalSpacing="xl"
              >
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Day</th>
                    <th>Event</th>
                  </tr>
                </thead>
                <tbody>
                  {timetable.map(({ time, day, event }) => (
                    <tr key={`${day}-${time}`}>
                      <td>{time}</td>
                      <td>{day}</td>
                      <td>{event}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </ScrollArea>
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default TimetablePage;
