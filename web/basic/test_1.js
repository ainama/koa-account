import React from 'react';

export default class Test1 extends React.Component {
  constructor(props) {
    console.log('1constructor');
    super(props);
    this.state = {
      list: []
    };
  }

  componentWillMount() {
    console.log('1componentWillMount');
  }

  componentDidMount() {
    console.log('1componentDidMount');

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
    console.log('1componentWillReceiveProps');
  }

  componentWillUpdate() {
    console.log('1componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('1componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('1componentWillUnmount');
  }

  push() {
    this.props.history.push('/test/2');
  }

  render() {
    return (
      <div>
        <div onClick = { () => this.push() } style = { styles.t1 }>当前第一页，点击跳转第二页</div>
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
