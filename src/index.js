import React from "react"
import ReactDOM from "react-dom"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MessageField from './components/message-field/MessageField.js'
import ChatList from './components/chat-list/chat-list.js'
// import { MessageField, ChatList } from "./components"

const App = () => {
  return (
    <div style={{ display: "flex" }}>
      <ChatList />
      <hr />
      <MessageField />
    </div>
  )
}

ReactDOM.render(
  <MuiThemeProvider>  
    <App/>
  </MuiThemeProvider>,
  document.getElementById("root"),
)