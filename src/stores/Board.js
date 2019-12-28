import { observable, action } from 'mobx';

class board {
    @observable boardList = [];
    @observable selectedContent = [];

    @action createBoard = () => this.boardList.push({
        title: "Title",
        content: [
            {
                posts: []
            }
        ]
    });

    @action deleteBoard = (idx) => {
        this.boardList.splice(idx, 1);
        this.selectedContent = [];
    };
    
    @action setTitle = (idx, txt) => {
        this.boardList[idx].title = txt;
    };

    @action select = (idx) => {
        this.selectedContent = this.boardList[idx].content;
    };

    @action addList = () => this.selectedContent.push({posts: []});
    
    @action addContent = (idx, txt) => {
        this.selectedContent[idx].posts.push({post: txt})
    };

    @action deleteContent = (idx1, idx2) => {
        console.log(this.selectedContent[idx1].posts);
        this.selectedContent[idx1].posts.splice(idx2, 1);
    };
}

export default new board();