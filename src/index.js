import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'mobx-react';

import board from './stores/Board';

ReactDOM.render(
    <Provider store={board}>
        <App/>
    </Provider>,
    document.getElementById('root')
);