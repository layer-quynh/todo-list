import React from 'react';
import './TodoItem.css';
import checkImg from '../img/check.svg';
import checkDoneImg from '../img/check-done.svg';

class TodoItem extends React.Component {

    render () {
        const {item, onClick} = this.props;
        let url = checkImg;
        if(item.isComplete === true) {
            url = checkDoneImg;
        }

        let className = 'TodoItem';
        if(item.isComplete === true) {
            className += ' TodoItem-complete';
        }
        return (
            <div className={className}>
                <img onClick={onClick} src={url} width={32} height={32}></img>
                <p>{item.title}</p>
            </div>
        );
    }
}

export default TodoItem;