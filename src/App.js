import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import NavigationBar from "./components/navigation-bar";
import Footer from "./components/footer";
import { Routes } from "./Routes";
import "./App.sass";
import { AppProvider } from "./context";

function App() {
  const history = createBrowserHistory();
  return (
    <div className="App">
      <div className="container">
        <Router history={history}>
          <AppProvider>
            <>
              <NavigationBar />
              <Routes />
              <Footer />
            </>
          </AppProvider>
        </Router>
      </div>
    </div>
  );
}

export default App;
