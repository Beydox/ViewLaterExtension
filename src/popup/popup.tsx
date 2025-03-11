import React from 'react'
import ReactDOM from 'react-dom'
import './popup.css'
import Home from './Home';
import { HashRouter, Routes, Route } from "react-router-dom";
import Add from './Add';
import  Edit  from './Edit';
import Layout from './Layout';


const App = () => {
  return (
    <div>
      <Layout>
      <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </HashRouter>
    </Layout>
    </div>
  )
}


const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(<App />, root)