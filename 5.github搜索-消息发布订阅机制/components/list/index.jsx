import React, { Component } from 'react'
import Item from '../item'
import PubSub from 'pubsub-js'
export default class List extends Component {

    state = {
        userList:[],//用户列表
        isFirst:true,//是否第一次展示
        isLoading:false,//是否处于加载中
        error:'',//请求错误信息
      }

      componentDidMount(){
          PubSub.subscribe('updateListDate',(_,stateObj)=>{
            this.setState(stateObj)
          })
      }

    render() {
        const {userList,isFirst,isLoading,error} = this.state
        let content =''
        if(isFirst){
            content = <h2>输入关键字，点击搜索</h2>
        }else if(isLoading){
            content = <h2>loading......</h2>
        }else if(error){
            content = <h2>{error}</h2>
        }else{
            content =userList.map((userObj)=>{
                return <Item key ={userObj.login} {...userObj}/>
            })
        }
        return (
            <div className="row">
                {content}
                
            </div>
        )
    }
}
