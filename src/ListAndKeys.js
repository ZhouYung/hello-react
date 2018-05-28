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
var myIndex = 0;
/**使用 ES6 class 来定义一个组件:*/
class ListAndKeys extends Component {
    constructor(props){
        super(props);
        this.state ={
            data: [
                {label:"在没风的地方找太阳"},
                {label:"在你冷的地方做暖阳"},
                {label:"人事纷纷"},
                {label:"你总是太天真"},
                {label:"往后的余生"},
                {label:"我只要你"},
                {label:"往后余生"},
                {label:"风雪是你"},
                {label:"平淡是你"},
                {label:"清贫也是你"},
                {label:"荣华是你"},
                {label:"心底温柔是你"},
                {label:"目光所致"},
                {label:"也是你"}
            ],
            date:moment()
        }
    }
    addTimeItem(value,index){
        const {data} = this.state;
        let arr = [...data];
        arr.splice(index+1, 0, {label:""});
        this.setState({data:[...arr]});
    }
    removeTimeItem(value,index){
        const {data} = this.state;
        let arr = [...data];
        arr.splice(index, 1);
        this.setState({data:[...arr]});
    }
  render() {
      const theRestOfLife = this.state.data;
      let moment = this.state.date;

      /**1.使用Javascript中的map()方法遍历numbers数组*/

      /**
       * 注意此处key的用法：
       * 在list数组中，用key来标识数组创建子组件时，若数组的内容只是作为纯展示，而不涉及到数组的动态变更，其实是可以使用index作为key的。
       * 但是，若涉及到数组的动态变更，例如数组新增元素、删除元素或者重新排序等，这时index作为key会导致展示错误的数据。
       *
       * 如下例中去除key中的随机数，在进行添加操作时，便只会在末尾处添加，因为前面的key值，在新旧虚拟dom比对过程中未发生变化，故没有更新
       * 而添加随机数后，每次更新过程，key值都重新刷新，便能在正确的位置添加
       *
       * 但是，key要保证其稳定性，使用随机数会使得其每次更新都会重新销毁再创建，会带来性能损耗,
       * 所以采用全局变量myIndex，增加其稳定性
       */
      this.state.data.forEach(el=>{
          el.value = myIndex++;
      });
      const theRestOfLifeList = theRestOfLife.map((life,index)=>
          //<li style={liStyle} key={(index+Math.random()).toString()}>
          <li style={liStyle} key={life.value}>
              <input type="text" defaultValue={life.label}/>
              <a href="javascript:void(0);" onClick={this.addTimeItem.bind(this, life.value,index)}>增加</a>
              <a href="javascript:void(0);" onClick={this.removeTimeItem.bind(this, life.value,index)}> 删除</a>
              {moment.format("YYYY-MM-DD HH:mm:ss")}
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