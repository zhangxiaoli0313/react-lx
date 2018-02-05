import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './assets/fontSize/iconfont.css'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import mock from './mock'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

// const store = createStore((state={name: '000'}, action) => {
//     return {...state, age:19}
// })
// 判断环境变量
if (process.env.NODE_ENV === "development") mock()

ReactDOM.render(
    <Router>
        <App />
    </Router>, 
    document.getElementById('root')
);
registerServiceWorker();
