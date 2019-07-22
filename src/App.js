import React, { Component } from 'react'
import FancyButton from './FancyButton';
import List from './List';
import SearchInList from './SearchInList';

export default class App extends Component {
  state = {
    listItems: [
      "do shopping",
      "wash the car",
      "return book to the library"
    ]  ,
    listItems2: [
      "go dance",
      "go on holidays"
    ]  
  }

  clickHandler(e) {
    alert('hola')
  }

  render() {
    return (
      <div>
        <SearchInList listItems={this.state.listItems}>
          <FancyButton onClick={(e) => this.clickHandler(e)}>Hola, i am not green</FancyButton>
        </SearchInList>
        <SearchInList listItems={this.state.listItems2}></SearchInList>
        {/* <List listItems={this.state.listItems}></List> */}
        {/* <FancyButton customStyle="green">click me!</FancyButton>
        <FancyButton>click me, I am red!</FancyButton>
        <button>Click me!</button> */}
      </div>
    )
  }
}
