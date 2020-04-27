//该文件是入口文件，渲染APP
//1.引入react核心库
import React from 'react'
//2.引入react-dom库
import ReactDOM from 'react-dom'
//3.引入App
import App from './App'
//4.渲染App到root中
ReactDOM.render(<App/>,document.getElementById('root'))