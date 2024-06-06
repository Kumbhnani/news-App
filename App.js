import "./App.css";
import React, { useState } from "react";
import Navbar from "./componets/Navbar";
import News from './componets/News'
// import Footer from "./componets/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageSize = 7

  const api= process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)

    return (
      <div className="overflow-auto">
        <Router>
          <Navbar />
          <LoadingBar
          color='#fff'
          progress={progress}
          height={2}
           />
            <Routes>
              <Route exact path="/Home" element={<News setProgress={setProgress} pageSize={pageSize} api={api} category="General" />} />
              {/* <Route exact path="" element={<News setProgress={setProgress} pageSize={pageSize} api={api} category="" />} /> */}
              <Route exact  path="/Business" element={<News setProgress={setProgress} key="Business" pageSize={pageSize} api={api} category="Business" />} />
              <Route exact  path="/Entertainment" element={<News setProgress={setProgress} key="Entertainment" pageSize={pageSize} api={api} category="Entertainment" />} />
              <Route exact  path="/General" element={<News setProgress={setProgress} key="General" pageSize={pageSize} api={api} category="General"  />} />
              <Route exact  path="/Health" element={<News setProgress={setProgress} key="Health"  pageSize={pageSize} api={api} category="Health"  />} />
              <Route exact  path="/Sports" element={<News setProgress={setProgress} key="Sports"  pageSize={pageSize} api={api} category="Sports"  />} />
              <Route exact  path="/science" element={<News setProgress={setProgress} key="science" pageSize={pageSize} api={api} category="science"  />} />
              <Route exact  path="/Technology" element={<News setProgress={setProgress} key="Technology"geSize={16} api={api} category="Technology"  />} />
            </Routes>
          {/* <Footer title="ApnaNews" /> */}
        </Router>
      </div>
    );
}

export default App

