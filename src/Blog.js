import React from 'react'
import { connect } from 'react-redux'
import { toggleBlog } from './actions/blogs'

const Blog = ({id, name, text, complete, dispatch }) => (
  <li
    onClick={() => dispatch({ type: 'TOGGLE_BLOG', id })}
    style={ complete ? { textDecoration: 'line-through', color: 'blue'} : {} }
    > 
    {name}
    {text}
    </li>
)

export default connect()(Blog)