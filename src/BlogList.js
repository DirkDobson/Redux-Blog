import React from 'react';
import { connect } from 'react-redux';
import Blog from './Blog';

const filtered = (blogs, filter) => {
  switch (filter) {
    case 'All':
      return blogs;
    case 'Active':
      return blogs.filter( t => !t.complete )
    case 'Completed':
      return blogs.filter( t => t.complete )
    default:
      return blogs
  }
}

const BlogList = ({ blogs, filter }) => (
  <ul>
    { filtered(blogs, filter).map( (t) => {
      return ( <Blog key={t.id} {...t} /> )
    })
    }
  </ul>
)

const mapStateToProps = (state) => {
  return { blogs: state.blogs, filter: state.filter }
}

export default connect(mapStateToProps)(BlogList)