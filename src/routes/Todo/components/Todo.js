import React, { PropTypes } from 'react'

class Todo extends React.Component {
  constructor(props){
    super(props);
    this.state = {text: props.text, completed: props.completed};
  }

  render(){
    return (
       <li
          onClick={this.props.onClick}
          style={{
            textDecoration: this.state.completed ? 'line-through' : 'none'
          }}
        >
          {this.state.text}
        </li>
    )
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
