import React from 'react';
import './CreateCardList.css';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class NewContent extends React.Component {
    render() {
        const { addList } = this.props.store;
        return (
            <button className="newContent" onClick={() => {
                addList();
            }}>
                <span>Create New Content</span>
            </button>
        );
    };
};

export default NewContent;