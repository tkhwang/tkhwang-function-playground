const useMessages = roomId => {
  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    const unsubscribe = getMessages(roomId, setMessages);
    return unsubscribe;
  }, [roomId]);

  return messages;
};

export {useMessages};
