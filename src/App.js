var React = require('react');
var ReactDOM = require('react-dom');
var BugList = require('./BugList');
var BugEdit = require('./BugEdit');
var ReactRouter = require('react-router');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Redirect = require('react-router').Redirect;
//react router no long defaults to this, need this below to declare a default
var hashHistory = ReactRouter.hashHistory;

// var bugsData = [
//   {id: 1, status:"open", priority:"P1", owner:"Tman", title:"App crashes upon opening"},
//   {id: 2, status:"open", priority:"P2", owner:"TmanQ", title:"App crashes upon close"}
// ]

var NoMatch = React.createClass({
  render: function() {
      return(
        <h2>No Match for the route</h2>
      );
  }
});




ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/bugs" component={BugList}/>
    <Route path="/bugs/:id" component={BugEdit}/>
    <Redirect from="/" to="/bugs"/>
    <Route path="*" component={NoMatch}/>    
  </Router>
,document.getElementById('main')
);
