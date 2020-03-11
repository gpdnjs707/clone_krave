import React from "react";
import GlobalStyle from "./Components/GlobalStyle";
import Router from "./Components/Router";

class App extends React.Component {
  render() {
    return (
      <>
        <Router />
        <GlobalStyle />
      </>
    );
  }
}

export default App;
