/*
 * @Desc: 文件名 
 * @Example: '' 
 * @Author: 任瀚汶 
 * @Date: 2020-12-21 15:35:22 
 * @Last Modified by: 任瀚汶
 * @Last Modified time: 2020-12-22 16:08:00
*/
import logo from './logo.svg';
import React from 'react';
class Img extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgState: true
    }
  }

  openAlert = () => {
    this.setState(state => ({
      imgState: !state.imgState
    }));
  }

  render() {
    return (
      <div>
        <div onClick={this.openAlert}>
          {
            this.state.imgState
            ? <img src={logo} className="Home-logo" alt="logo" />
            : <img src={logo} className="Home-logo2" alt="logo" />
          }   
        </div>
        <h4 style={{cursor:'pointer'}}>
          点击开始学习React
        </h4>
      </div>
      
    )
  }
}

export default Img;