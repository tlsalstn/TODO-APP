import React from 'react';
import './CreateBoard.css';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class NewBoard extends React.Component {
    render(){
        return (
            <button className="newBoard" onClick={() => {
                this.props.store.createBoard();
            }}>
                <span>Create New Board</span>
            </button>
        );
    };
};

export default NewBoard;