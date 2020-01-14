import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import store from './redux/store'
import { Provider } from 'react-redux'
import { render } from 'react-dom'


// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(

    <Provider store={store()}>
        <App />,
    </Provider>,
    document.getElementById('root')
);