import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {
    inputRef = React.createRef()
    search = async()=>{
        //1.获取用户输入
        const {value} = this.inputRef.current
        //2.数据校验
        if(!value ||!value.trim()){
            alert('输入不能为空')
            return
        }else{
            //3.发送ajax请求，获取数据（用axios）
            const url = `https://api.github.com/search/users?q=${value}`

            this.props.updateAppState({isFirst:false,isLoading:true})
            try{
                let res = await axios.get(url)
                const {items} = res.data
                this.props.updateAppState({isLoading:false,userList:items})
            }catch(error){
                this.props.updateAppState({isLoading:false,error:error.message})
            }
            //4.更新app状态
        }
        
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref ={this.inputRef} type="text" placeholder="enter the name you search" />&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
