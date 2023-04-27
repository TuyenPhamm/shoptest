import React, { useEffect, useState, useContext } from 'react';
import { publicRoutes } from './routes/router';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      // <getProduct>
      //   <div>
      //     <Products />
      //   </div>
      // </getProduct>
      <Router>
        <div>
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              return <Route key={index} path={route.path} element={<Page />} />
            })}
          </Routes>
        </div>
      </Router>

    )
  }
}

export default App
