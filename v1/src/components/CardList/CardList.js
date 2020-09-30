import React from 'react';
import './CardList.css';
import Card from '../Card/Card';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class ContentList extends React.Component {
    render() {
        const { idx, content } = this.props;
        const { addContent } = this.props.store;

        return (
            <div className="contentList">
                <input type="text" placeholder="Add New Content" onKeyUp={(e) => {
                    if (window.event.keyCode === 13) {
                        addContent(idx, e.target.value);
                        e.target.value = "";
                    }
                }}/>
                {content.map((item, index) => {
                    return <Card idx1={idx} idx2={index} content={item.post} />
                })}
            </div>
        );
    };
};

export default ContentList;