import React, { Component } from 'react'
import FancyButton from './FancyButton';

export default class List extends Component {
    render() {
        return (
            <ul>
                {this.props.listItems.map((item, idx) => {
                    return <li key={idx}>{item} <FancyButton customStyle="green">Remove</FancyButton></li>
                })}
            </ul>
        )
    }
}
