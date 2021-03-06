/*
    大神信息完善的路由容器组件

*/

import React,{Component} from 'react';
import {connect} from 'react-redux';

import {Redirect} from 'react-router-dom';

import {NavBar,InputItem,TextareaItem,Button} from 'antd-mobile';
import HeaderSelector from './../../components/header-selector/header-selector';
import {updateUser} from './../../redux/actions'
class DashenInfo extends Component{

	state = {
    	header:'',   //头像
    	post:'',     //岗位
    	info:'',     //个人介绍
    }

    handleChange = (name,value)=>{
    	this.setState({
    		[name]:value
    	})
    }
    //保存
    save = () =>{
    	//console.log(this.state)
    	this.props.updateUser(this.state)
    }

    //更新头像header
    setHeader = (header)=>{
        this.setState({
    		header:header
    	})
    }

	render(){
		const {header,type} =  this.props.user;
		console.log(this.props.user)
		//假如有头像说明信息已经完善 ，否则就是显示以下界面
		if(header){
            const path = type == 'dashen' ? '/dashen' :'/laoban'
		    return <Redirect to = {path}/>
		}

		return(
            <div>
            	<NavBar>大神信息完善</NavBar>
            	<HeaderSelector setHeader = {this.setHeader} />
            	<InputItem placeholder = "请输入岗位" onChange = {val =>{this.handleChange('post',val)}} >求职岗位</InputItem>
            	
            	<TextareaItem title = "个人介绍" 
            	              rows ={3}
            	              onChange = {val =>{this.handleChange('info',val)}} />
            	<Button type = "primary" onClick = {this.save} >保存</Button>
            </div>

			)
	}
}

export default connect(
    state =>({user:state.user}),
    {updateUser} //用于放置action 函数	

	)(DashenInfo);