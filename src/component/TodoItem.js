import React from 'react';
import './TodoItem.css';

class TodoItem extends React.Component {

    render () {
        const {item, onClick} = this.props;
        let className = 'TodoItem';
        if(item.isComplete === true) {
            className += ' TodoItem-complete';
        }
        return (
            <div onClick={onClick} className={className}>
                <p>{item.title}</p>
            </div>
        );
    }
}

export default TodoItem;