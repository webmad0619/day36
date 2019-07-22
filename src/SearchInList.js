import React, { Component } from 'react'
import List from './List';

export default class SearchInList extends Component {
    state = {
        query: "",
        listItems: this.props.listItems,
        filteredListItems: this.props.listItems
    }

    handleChange(e) {
        this.state.filteredListItems = this.state.listItems
        let filteredItems = this.state.filteredListItems
        .filter(listItem => listItem.indexOf(e.target.value) > -1)

        this.setState({
            ...this.state,
            query: e.target.value,
            filteredListItems: filteredItems
        })
    }

    render() {
        return (
            <div style={{marginTop: 20, marginBottom: 100}}>
                <input type="text" placeholder="search in list" 
                    value={this.state.query}
                    onChange={(e) => this.handleChange(e) }></input>
                <List listItems={this.state.filteredListItems}></List>
                {this.props.children}
            </div>
        )
    }
}
