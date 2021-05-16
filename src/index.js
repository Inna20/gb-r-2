import React from "react"
import ReactDOM from "react-dom"

const messages = ['hello']

const sendMessage = () => {
  messages.push('new message')
  render()
}

const Message = ({ message }) => {
  return (
    <React.Fragment>
      <h1>{message}</h1>
    </React.Fragment>
  )
}

const MessageField = ({ messages }) => {
  return (
    <>
      <button onClick={sendMessage}>Send</button>
      {messages.map((message, index) => (
        <Message message={message} key={index} isVisible={true} />
      ))}
    </>
  )
}

const render = () => {
  ReactDOM.render(
    <MessageField messages={messages} />,
    document.getElementById("root"),
  )
}

render()