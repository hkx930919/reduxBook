import React from "react";
import { render } from "react-dom";
import { Provider  } from "react-redux";
import { createStore } from "redux";
import todoApp  from './reducers.js'
import App from './components/App'


let store = createStore(todoApp)

render(
    <Provider store={store}>
        <App />
    </Provider >,
     document.getElementById('root')
)
// const unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )

// 发起一系列 action


// 停止监听 state 更新
// unsubscribe();