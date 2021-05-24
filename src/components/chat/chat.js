import React from "react"
import PropTypes from 'prop-types'

export class Chat extends React.Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        handleListItemClick: PropTypes.number,
        selected: PropTypes.number
    };

    render() {
        console.log(this.props)
        const { title, handleListItemClick, selected } = this.props

        return <div>{title}</div>
  }
}