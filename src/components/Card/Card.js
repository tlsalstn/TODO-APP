import React from 'react';
import './Card.css';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class Card extends React.Component {
    render() {
        const { idx1, idx2, content } = this.props;
        const { deleteContent } = this.props.store;
        return (
            <div className="card">
                <span>{content}</span>
                <div className="menu">
                    <button onClick={() => {
                        deleteContent(idx1, idx2);
                    }}>D</button>
                </div>
            </div>
        );
    };
};

export default Card;