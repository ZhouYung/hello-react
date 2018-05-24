import React, { Component } from 'react';
import './App.css';
import moment from 'moment';

var myStyle = {
    fontSize: 20,
    color: '#FF0000',
    textAlign: "center",
};
var liStyle = {
    listStyle:"none",
}
/**使用 ES6 class 来定义一个组件:*/
class ListAndKeys extends Component {
    constructor(props){
        super(props);
        this.state ={
            data: [
                "在没风的地方找太阳",
                "在你冷的地方做暖阳",
                "人事纷纷",
                "你总是太天真",
                "往后的余生",
                "我只要你",
                "往后余生",
                "风雪是你",
                "平淡是你",
                "清贫也是你",
                "荣华是你",
                "心底温柔是你",
                "目光所致",
                "也是你"
            ],
            date:require('moment')
        }
    }
    addTimeItem(index){
        const {data} = this.state;
        let arr = [...data];
        arr.splice(index+1, 0, "");
        console.log(arr);
        this.setState({data:[...arr]});
    }
    removeTimeItem(index){
        console.log(index)
        const {data} = this.state;
        let arr = [...data];
        arr.splice(index, 1)
        this.setState({data:[...arr]});
    }
  render() {
      const theRestOfLife = this.state.data;
      var moment = this.state.date;
      /**1.使用Javascript中的map()方法遍历numbers数组*/
      const theRestOfLifeList = theRestOfLife.map((life,index)=>
          <li style={liStyle} key={index.toString()}>
              <input type="text" defaultValue={life}/>
              <a href="javascript:void(0);" onClick={this.addTimeItem.bind(this, index)}>增加</a>
              <a href="javascript:void(0);" onClick={this.removeTimeItem.bind(this, index)}> 删除</a>
              {moment().format("YYYY-MM-DD HH:mm:ss")}
          </li>
      );
    return (
      <div className="App">
        <p className="App-intro">
            以下是组件4的显示内容:
        </p>
          <div style={myStyle}>
              <div name="组件4"></div>
              <ul>
                  {theRestOfLifeList}
              </ul>
          </div>
      </div>
    );
  }
}
//导出当前定义的类组件
export default ListAndKeys;