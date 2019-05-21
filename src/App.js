import React, {Component} from 'react';
import './App.css';
import TodoItem from './component/TodoItem';
import tick from './img/tick.svg';

class App extends Component {
  constructor() {
    super();

    this.state = {
      newItem: '',
      currentFilter: ['all', 'active', 'completed'],
      todoItems: [
        {title: "Mua bim bim", isComplete: true}, 
        {title: "Di da bong", isComplete: false}, 
        {title: "Di do xang", isComplete: false}
      ]
    };

    this.onKeyUp = this.onKeyUp.bind(this);

    this.onChange = this.onChange.bind(this);
  }

  onItemClicked(item) {
    return (event) => {
      const isComplete = item.isComplete;
      const todoItems = this.state.todoItems;
      const index = this.state.todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      })
    }
  }

  onKeyUp(event) {
    if(event.keyCode === 13) { //enter key
      let text = event.target.value;

      if(!text || text === '') {
        return;
      }

      text = text.trim();

      if(!text) {
        return;
      }

      this.setState({
        newItem: '',
        todoItems: [
          {title: text, isComplete: false},
          ...this.state.todoItems
        ]
      })
    }
  }

  onChange(event) {
    this.setState({
      newItem: event.target.value
    })
  }

  render() {
    const {newItem, currentFilter, todoItems} = this.state;

    if(todoItems.length) {
      return (
        <div className="App">
          <div className="Header">
            <img src={tick} width={32} height={32}></img>
            <input type="text"
                  placeholder="Add a new item" 
                  value={newItem}
                  onChange={this.onChange}
                  onKeyUp={this.onKeyUp}>
            </input>
          </div>
          {
            todoItems.length > 0 && todoItems.map((item, index) => 
              <TodoItem 
                key={index}
                item={item}
                onClick={this.onItemClicked(item)} />
            )
          }
        </div>
      );
    }
  }
}

export default App;
