import React, { Component } from 'react'
import "./FancyButton.css"

export default class FancyButton extends Component {
    render() {
        return (
            <button onClick={this.props.onClick} className={this.props.customStyle ? "fancyButton " + this.props.customStyle : "fancyButton"}>
                {this.props.children}
            </button>
        )
    }
}
