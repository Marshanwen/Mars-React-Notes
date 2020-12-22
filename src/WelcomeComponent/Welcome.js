function Welcome(props) {
  let inf = <div>
    <h3>Hello, {props.name}: {props.sex === '1' ? '男' : '女'}</h3>
  </div>
  return inf;
}

export default Welcome;