const React = require('react');
const ReactDOM = require('react-dom');



var BugFilter = React.createClass({
  sendFilter: function(e){
        this.props.loadData({priority:"P2"});
        console.log("yes");
  },
  render: function () {
    return (
      <button onClick={this.sendFilter}>hard code filter</button>
    )
  }
});

module.exports = BugFilter;
