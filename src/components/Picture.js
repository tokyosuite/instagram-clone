import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'

class Picture extends Component {
  state = {
    shaded: false
  }
  handleEnter = () => {
    this.setState({
      shaded: true
    })
  }
  handleLeave = () => {
    this.setState({
      shaded: false
    })
  }
  render() {
    const defaultStyle = {
      margin: '1rem'
    }
    const shadedStyle = {
      margin: '1rem',
      opacity: 0.5,
      cursor: 'pointer'
    }
    return (
      <React.Fragment>
        <img key={Math.random()} src={this.props.src} alt={this.props.idx} width="250px" style={(this.state.shaded) ? shadedStyle : defaultStyle}
        onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave} />
        <span style={{position: 'absolute', transform: 'translate(-12rem, 5rem)'}}>
        <i className="fas fa-heart"></i>
            {this.props.hearts}
        <i className="fas fa-comment"></i>
            {this.props.comments}
        </span>
      </React.Fragment>
    )
  }
}

export default Picture
