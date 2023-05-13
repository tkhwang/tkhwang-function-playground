import React from 'react';
import {useAuth} from '../../hooks/useAuth';
import {useMessages} from '../../hooks/useMessages';
import './styles.css';

const MessageList = ({roomId}) => {
  const containRef = React.useRef(null);
  const {user} = useAuth();
  const messages = useMessages(roomId);

  React.useLayoutEffect(() => {
    if (containRef.current) {
      containRef.current.scrolLTop = containerRef.current.scrollHeight;
    }

    return (
      <div className="message-list-container" ref={containerRef}>
        <ul className="message-list">
          {messages.map(x => (
            <Message key={x.id} message={x} isOwnMessage={x.uid === user.uid} />
          ))}
        </ul>
      </div>
    );
  });
};

const Message = ({message, isOwnMessage}) => {
  const {displayName, text} = message;
  return (
    <li className={['message', isOwnMessage && 'own-message'].join(' ')}>
      <h4 className="sender">{isOwnMessage ? 'You' : displayName}</h4>
      <div>{text}</div>
    </li>
  );
};

export {MessageList};
