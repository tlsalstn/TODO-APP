import React from 'react';
import './Board.css';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class Board extends React.Component {
    render() {
        const { idx, title } = this.props;
        const { deleteBoard, setTitle, select } = this.props.store;

        return (
            <div className="board">
                <button onClick={() => {
                    deleteBoard(idx);
                }}>X</button>
                <input type="text" value={title} onChange={(e) => setTitle(idx, e.target.value)} />
                <button onClick={() => {
                    select(idx);
                }}>▼</button>
            </div>
        );
    };
};

export default Board;