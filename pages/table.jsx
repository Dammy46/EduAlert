import { Table, Text, Badge, Button } from "@mantine/core";

const InboxTable = () => {
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

  const handleRowClick = (id) => {
    // Handle row click event, e.g., navigate to message details page
    console.log(`Clicked on message with id: ${id}`);
  };

  return (
    <Table>
      <thead>
        <tr>
          <th>Sender</th>
          <th>Subject</th>
          <th>Date</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {messages.map((message) => (
          <tr
            key={message.id}
            onClick={() => handleRowClick(message.id)}
            style={{ cursor: "pointer" }}
          >
            <td>
              <Text size="sm">{message.sender}</Text>
            </td>
            <td>
              <Text size="sm">{message.subject}</Text>
            </td>
            <td>
              <Text size="sm">{message.date}</Text>
            </td>
            <td>
              {message.unread ? (
                <Badge color="#1f7a1f">Unread</Badge>
              ) : (
                <Badge color="gray">Read</Badge>
              )}
            </td>
            <td>
              <Button size="xs" variant="outline" >
                Archive
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default InboxTable;
