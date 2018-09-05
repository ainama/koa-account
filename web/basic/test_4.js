import React from 'react';
import { browserHistory } from 'react-router';

export default class Test4 extends React.Component {
  constructor(props) {
    super(props);
    console.log('4constructor');
  }

  componentWillMount() {
    console.log('4componentWillMount');
  }

  componentDidMount() {
    console.log('4componentDidMount');
  }

  componentWillReceiveProps() {
    console.log('4componentWillReceiveProps');
  }

  componentWillUpdate() {
    console.log('4componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('4componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('4componentWillUnmount');
  }

  push() {
    browserHistory.push('/test/3');
  }

  add() {
    fetch('/api/test/add')
    .then((res)=>{
      return res.json();
    })
    .then((res)=>{
      alert('ok');
    })
  }

  render() {
    return (
      <div>
        <div onClick = { () => this.push() } style = { styles.t1 }>当前第四页，点击回到第三页</div>
        <div onClick = { () => this.add() } style = { styles.r1 }>添加数据</div>
      </div>
    );
  }
}

const styles = {
  t1: {
    fontSize: 18
  },

  r1: {
    marginTop: 15
  }
};
