/*
 * @Desc: 文件名 
 * @Example: '' 
 * @Author: 任瀚汶 
 * @Date: 2020-12-21 15:35:22 
 * @Last Modified by: 任瀚汶
 * @Last Modified time: 2020-12-22 15:48:42
*/
import React from 'react';
class clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: new Date(),
      num: 1
    }
  }

  componentDidMount() {
    this.timeId = setInterval(
      () => this.getThisTime(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  getThisTime() {
    this.setState({
      data: new Date()
    });
  }

  openAlert = () => {
    this.setState(state => ({
      num: state.num + 1
    }));
  }

  render() {
    return (
      <div className="clock-box">
        <div>现在时间： { this.state.data.toLocaleTimeString() }</div>
        <div>
          {/* <button onClick={this.openAlert}>点击计数：{ this.state.num}</button> */}
        </div>
      </div>
    )
  }
}

export default clock;