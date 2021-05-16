import React from "react"
import PropTypes from 'prop-types'
import ReactDOM from "react-dom"

export default class Message extends React.Component
{
  static propTypes = {
       text: PropTypes.string.isRequired,
       author: PropTypes.string.isRequired
  };

  render() {
    return (
      <>
        <h1>{this.props.author}: {this.props.text}</h1>
      </>
    )
  }
}