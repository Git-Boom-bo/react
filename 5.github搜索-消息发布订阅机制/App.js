//1.引入react核心库
import React,{Component} from 'react'
// import './App.css'
//2.引入我们自定义的组件
import Search from './components/search'
import List from './components/list'


//3.定义app组件  随后暴露
export default class App extends Component{
  render(){
    return (
      <div id="app">
        <div className="container">
          <Search />
          <List />
        </div>
      </div>
    )
  }
}