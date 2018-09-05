import React from 'react';

export default class Test2 extends React.Component {
  constructor(props) {
    super(props);
    console.log('2constructor');
  }

  componentWillMount() {
    console.log('2componentWillMount');
  }

  componentDidMount() {
    console.log('2componentDidMount');
  }

  componentWillReceiveProps() {
    console.log('2componentWillReceiveProps');
  }

  componentWillUpdate() {
    console.log('2componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('2componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('2componentWillUnmount');
  }

  push() {
    this.props.history.push('/test/1');
  }

  add() {
    fetch('/api/test/add')
    .then((res)=>{
      return res.json();
    })
    .then((res)=>{
      alert('添加成功');
    })
  }

  render() {
    return (
      <div>
        <div onClick = { () => this.push() } style = { styles.t1 }>当前第二页，点击回到第二页</div>
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
