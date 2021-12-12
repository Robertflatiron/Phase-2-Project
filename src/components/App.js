import React from "react";
import Header from "./Header";
import NoteContainer from "./NoteContainer";
// import { Switch } from "react-render-dom"
// import { Routes } from "react-router";

function App() {

  

  return (
    <div className="app">
      {/* <Routes> */}
        {/* <Route exact path="/Header"> */}
        <Header />
        {/* </Route> */}
        <NoteContainer />
      {/* </Routes> */}

    </div>
  );
}

export default App;
