import React, {Component} from 'react';
import './App.css';
import TodoItem from './component/TodoItem';

class App extends Component {
  constructor() {
    super();

    this.state = {
      todoItems: [
        {title: "Mua bim bim", isComplete: true}, 
        {title: "Di da bong", isComplete: false}, 
        {title: "Di do xang", isComplete: false}
      ]
    };

    this.onItemClicked = this.onItemClicked.bind(this);
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

  render() {
    const {todoItems} = this.state;

    if(todoItems.length) {
      return (
        <div className="App">
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
