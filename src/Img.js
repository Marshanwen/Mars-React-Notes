/*
 * @Desc: 文件名 
 * @Example: '' 
 * @Author: 任瀚汶 
 * @Date: 2020-12-21 15:35:22 
 * @Last Modified by: 任瀚汶
 * @Last Modified time: 2020-12-22 15:01:30
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
        <div style={{cursor:'pointer'}}>
          {
            this.state.imgState
            ? <img src={logo} className="App-logo" alt="logo" />
            : <img src={logo} className="App-logo2" alt="logo" />
          }   
        </div>
        <button id="aks123" onClick={this.openAlert}>
          {this.state.imgState ? '逆时针' : '顺时针' }
        </button>
      </div>
      
    )
  }
}

export default Img;