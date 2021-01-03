import {Switch,BrowserRouter,Route} from "react-router-dom";

import {useEffect} from "react";

import{connect} from "react-redux";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";
import Home from "./pages/Home";
import AddContact from "./pages/AddContact";
import ListContact from "./pages/ListContact";
import NotFound from "./components/NotFound";

import {fetchData} from "./api/database";


const  App = (props) =>  {
  useEffect(() => {
    props.onGetData();
  }, [])
  return (
    <BrowserRouter>
      <div className="continer-fluid">
        <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/list" component={ListContact}/>
            <Route exact path="/add" component={AddContact}/>
            <Route component={NotFound}/>
          </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}
const mapStateToProps = state => state;

const mapDispatchToProps = {
  onGetData:fetchData
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
