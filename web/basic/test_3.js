import React from 'react';
import { browserHistory } from 'react-router';

export default class Test3 extends React.Component {
  constructor(props) {
    console.log('3constructor');
    super(props);
    this.state = {
      list: []
    };
  }

  componentWillMount() {
    console.log('3componentWillMount');
  }

  componentDidMount() {
    console.log('3componentDidMount');

    fetch('/api/test/list')
    .then((res)=>{
      return res.json();
    })
    .then((res)=>{
      console.log(res);
      this.setState({ list: res.data });
    })
  }

  componentWillReceiveProps() {
    console.log('3componentWillReceiveProps');
  }

  componentWillUpdate() {
    console.log('3componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('3componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('3componentWillUnmount');
  }

  push() {
    browserHistory.push('/test/4');
  }

  render() {
    return (
      <div>
        <div onClick = { () => this.push() } style = { styles.t1 }>当前第三页，点击跳转第四页</div>
        {
          this.state.list.map((item, i) => {
            return (
              <div key = { i } style = { styles.r1 }>
                <span>id:{ item.id }; </span>
                <span>content:{ item.content };</span>
              </div>
            );
          })
        }
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
