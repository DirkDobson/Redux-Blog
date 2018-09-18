import React from 'react';
import { connect } from 'react-redux';
import { incId } from './actions/nextId';

class BlogForm extends React.Component {
  state = {name: '', 
  //text: ''
}

  handleSubmit = (e) => {
    e.preventDefault()
    const {dispatch, id } = this.props
    const { name } = this.state
   //const { text } = this.state
   const blog = { name, id, complete: false }
    dispatch({ type: 'ADD_BLOG', blog})
    //dispatch({ type: 'ADD_TEXT', blog: text })
    dispatch({ type: 'ADD_BLOG', blog })
    dispatch(incId())
    this.setState({ name: '', 
    //text: ''
  })
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value})
    //this.setState({ text: e.target.value})
  }
  render() {
    const { name, 
      //text 
    } = this.state


    return(
      <div>
        <h3>Add a Blog</h3>
        <form onSubmit={this.handleSubmit}>
        <input value={name} onChange={this.handleChange} required />
        <button>Submit Blog</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId }
}

export default connect(mapStateToProps)(BlogForm);