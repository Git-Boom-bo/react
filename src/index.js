//引入核心库
import React from 'react'
//引入react-dom库
import ReactDOM from 'react-dom'
//引入组件
import App from './App'
//引入路由  这个是一个语法BrowserRouter必须把定义的每个了路由包裹起来
//这里直接包裹整个App组件  就不用逐个去包起来
import {BrowserRouter} from 'react-router-dom'
//渲染组件
ReactDOM.render(
    <BrowserRouter> 
        <App/>
    </BrowserRouter>,
    document.getElementById('root'))