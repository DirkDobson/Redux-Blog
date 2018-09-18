import React, { Fragment } from 'react';
import BlogForm from './BlogForm'
import BlogList from './BlogList'
import Footer from './Footer'
import './App.css';

const App = () => (
      <Fragment>
        <BlogForm />
        <BlogList />
        <Footer />
      </Fragment>
    );
 

export default App;
