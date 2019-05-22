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

  onFilterClick(item) {
    return (event => {
      if(item === 'all') {
        return;
      }

      if(item === 'active') {
        console.log(this.state.todoItems);
      }
    })
  }

  render() {
    const {newItem, currentFilter, todoItems} = this.state;

    let len = 0;
    for(let item of todoItems) {
      if(!item.isComplete) {
        len++;
      }
    }

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
          <div className="Footer">
            {
              (len <= 1) ? (<p>{len} item left</p>) : (<p>{len} items left </p>)
            }
            <div>
              {
                currentFilter.map((item, index) => 
                  <li className="CurrentFilter" key={index}>
                    <a href="#" onClick={this.onFilterClick(item)}>{item}</a>
                  </li>)
              }
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
