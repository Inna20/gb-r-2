import React from "react"
import { Chat } from "../chat"
import { List, ListItem } from 'material-ui';

export default class ChatList extends React.Component {
  state = {
    chats: ["room1", "room2", "room3"],
    selectedIndex: 0,
  }

  render() {
    const { chats, selectedIndex } = this.state

    return (
      <List>
        { chats.map((chat, index) => (
            <ListItem>
                <Chat title={chat} key={index} selected={selectedIndex} />
            </ListItem>
        ))}
      </List>
    )
  }
}
