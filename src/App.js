import React from 'react';
import { Provider } from "react-redux"
import "./App.css";
import Nav from "./components/Nav"
import Expence from "./components/Expence"
import History from "./components/History"
import Model from "./components/Model"
import store from "./Store/Store"

function App() {
  const [model, setModel] = React.useState(false);
  return (
    <Provider store={store}>
    <div>
    <Nav/>
    <Expence />
    <History />
    <Model/>
    </div>
    </Provider>
  );
}

export default App;
