import React from 'react'
import ReactDOM from 'react-dom'
import './popup.css'
import Home from './Home';
import { HashRouter, Routes, Route } from "react-router-dom";
import Add from './Add';
import  Edit  from './Edit';
import Layout from './Layout';
import About from './About';


const App = () => {
  return (
    <>
      <Layout >
      <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
    </Layout>
    </>
  )
}


const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(<App />, root)