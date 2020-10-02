import React, { useState, useEffect } from "react";
import "./App.css";
import { Header, Navigation, Drawer, Layout, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";
function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("https://gitconnected.com/v1/portfolio/harrisonms")
      .then((res) => res.json())
      .then((user) => {
        setUser(user);
      });
  }, []);
  return (
    user && (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="Harrison Seaborn" scroll>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/about">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />\
            <Main />
          </Content>
        </Layout>
      </div>
    )
  );
}

export default App;
