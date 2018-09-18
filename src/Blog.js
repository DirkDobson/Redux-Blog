import React from 'react'
import { connect } from 'react-redux'
import { toggleBlog, deleteBlog } from './actions/blogs'

const styles = {
  pointer: {
    cursor: 'pointer',
  },
  complete: {
    textDecoration: 'line-through',
    color: 'blue'
  }
}

const Blog = ({ id, name, complete, dispatch}) => (
  <li
  onClick={() => dispatch(toggleBlog(id)) }
  style={ complete ? {...styles.pointer, ...styles.complete} : styles.pointer }
  >
  {name}
  <button onClick={ () => dispatch(deleteBlog(id)) }>X</button>
  </li>
)

export default connect()(Blog)