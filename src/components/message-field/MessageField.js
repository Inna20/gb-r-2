import React from "react"
import ReactDOM from "react-dom"
import Message from './message/Message.js'

export default class MessageField extends React.Component
{
	state = {
    	messages: [
    		{
				author: 'Robot',
				text: "Привет!"
    		},
    		{
				author: 'Robot',
				text: "Как дела?"
    		}
    	]
   	};

	sendMessage = (author, text) => {
       this.setState({ messages: [ ...this.state.messages, {author: 'Inna', text: 'Привет, я Инна'} ] });
   	};

   	componentDidUpdate() {
   		if (this.state.messages.[this.state.messages.length - 1].author !== 'Robot') {
	   		setTimeout(() =>
		       this.setState(
		           { messages: [ ...this.state.messages, {author: 'Robot', text: 'Привет, я робот!'} ] }), 1000);
	   	}
   	}

	render() {
		const messageElements = this.state.messages.map((message, index) => (
		        <Message text={message.text} author={message.author} key={index} isVisible={true} />
		      ))

		return (
		    <>
		      <button onClick={this.sendMessage}>Send</button>
		      {messageElements}
		    </>
		)
	}
}