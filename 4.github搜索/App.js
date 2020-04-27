//1.引入react核心库
import React,{Component} from 'react'
// import './App.css'
//2.引入我们自定义的组件
import Search from './components/search'
import List from './components/list'


//3.定义app组件  随后暴露
export default class App extends Component{
  state = {
    userList:[],//用户列表
    isFirst:true,//是否第一次展示
    isLoading:false,//是否处于加载中
    error:'',//请求错误信息
  }
  updateAppState= (stateObj)=>{
    //接受的是state的对象
    //更新状态
    this.setState(stateObj)
  }

  render(){
    return (
      <div id="app">
        <div className="container">
          <Search updateAppState={this.updateAppState}/>
          <List {...this.state}/>
        </div>
      </div>
    )
  }
}