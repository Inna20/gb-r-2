import React from "react"
import ReactDOM from "react-dom"
import Message from '../message/message.js'
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';

import '../../styles/styles.css'

export default class MessageField extends React.Component
{
	constructor(props) {
		super(props);
		// создадим ref в поле `textInput` для хранения DOM-элемента
		this.textInput = React.createRef();
	}
 
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
    	],
		messageInput: '',
   	};

	sendMessage = (author, text) => {
		this.setState({
			messages: [ ...this.state.messages, {author: author, text: text} ],
			messageInput: '' 
		});
   	};

	componentDidMount() {
		this.textInput.current.focus();
	}
 
   	componentDidUpdate() {
   		if (this.state.messages[this.state.messages.length - 1].author !== 'Robot') {
	   		setTimeout(() =>
		       this.setState(
		           { messages: [ ...this.state.messages, {author: 'Robot', text: 'Привет, я робот!'} ] }), 1000);
	   	}
   	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleKeyUp = (event, message) => {
		if (event.keyCode === 13) {
			this.sendMessage('Inna', message)
		}
	}; 

	render() {
		return (
			<div className="layout">
				<div className='message-field'>
				{this.state.messages.map((message, index) => (
					<Message text={message.text} author={message.author} key={index} isVisible={true} />
				))}
				</div>
				<div style={ { width: '100%', display: 'flex' } }>
               		<TextField
						ref={ this.textInput }
						name='messageInput'
						value={ this.state.messageInput }
						style={ { fontSize: '22px' } }
						onChange={ this.handleChange }
						onKeyUp={ (event) => this.handleKeyUp(event, this.state.messageInput) }
					/>

					<FloatingActionButton onClick={ () => this.sendMessage('Inna', this.state.messageInput) }>
						<SendIcon />
					</FloatingActionButton>
				</div>
			</div>
		)
	}
}