/*
    大神主界面路由容器组件

*/
import React,{Component} from 'react'
//容器
import {connect} from 'react-redux'
class Dashen extends Component{
	render(){
		return(
            <div>Dashen</div>
			)
	}
}

export default connect(
     state =>({}),
     {}
	)(Dashen);