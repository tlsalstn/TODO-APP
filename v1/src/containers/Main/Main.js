import React from 'react';
import NewBoard from '../../components/CreateBoard/CreateBoard';
import Board from '../../components/Board/Board';
import ContentList from '../../components/CardList/CardList';
import NewContent from '../../components/CreateCardList/CreateCardList';
import { inject, observer } from 'mobx-react';
import './Main.css';

@inject('store')
@observer
class Main extends React.Component {
    render() {
        const { boardList, selectedContent } = this.props.store;
        
        return (
            <div className="main">
                <div className="boardList">
                    {boardList.map((item, index) => {
                        return <Board idx={index} title={item.title} />
                    })}
                    <NewBoard />
                </div>
                <div className="todoList">
                    {selectedContent.map((item, index) => {
                        return <ContentList idx={index} content={item.posts}/>
                    })}
                    {selectedContent.length !== 0 ? <NewContent/> : ""}
                </div>
            </div>
        );
    };
};

export default Main;