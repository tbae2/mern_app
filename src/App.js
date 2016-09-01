const React = require('react');
const ReactDOM = require('react-dom');
const BugList = require('./BugList');



// var bugsData = [
//   {id: 1, status:"open", priority:"P1", owner:"Tman", title:"App crashes upon opening"},
//   {id: 2, status:"open", priority:"P2", owner:"TmanQ", title:"App crashes upon close"}
// ]






ReactDOM.render(<BugList url="/api/bugs"/>, document.getElementById('main'));
