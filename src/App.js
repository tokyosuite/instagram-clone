import React, { Component } from 'react';
import './App.css';

// url: https://picsum.photos/500/500


class App extends Component {
  state = {
    images: [],
    err: []
  }
  componentDidMount() {
    for (let i = 15; i < 115; i++) {
      fetch(`https://picsum.photos/500/500/?image=${i}`)
        .then(function(response) {
          if (!response.ok) {
            throw Error(response.statusText)
          }
          return response
        })
        .then(res => this.setState({
          images: this.state.images.concat(res.url)
        }))
        .catch(err => console.log(err))
    }
  }
  render() {
    return (
      <div className="App">
        {this.state.images.map((x, idx) => <img key={idx} src={x} alt={idx} width="350px"/>)}
      </div>
    );
  }
}

export default App;
