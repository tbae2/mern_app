const React = require('react');
const ReactDOM = require('react-dom');



var BugFilter = React.createClass({
  getInitialState: function(){

    var storeQuery = this.props.urlFilter;
    console.log(storeQuery.priority);
    return {priority: storeQuery.priority,
            status: storeQuery.status};
  },
  selectChangePriority: function(event){
    this.setState({priority: event.target.value})
  },
  selectChangeStatus: function(event){
    this.setState({status: event.target.value})
  },
  sendFilter: function(e){
        this.props.loadData({priority: this.state.priority, status: this.state.status});
        console.log(this.state.priority);
  },
  render: function () {
    return (
    <div>
      <select onChange={this.selectChangePriority} value={this.state.priority}>
        <option value="">All</option>
        <option value="P1">P1</option>
        <option value="P2">P2</option>
        <option value="P3">P3</option>
        <option value="P4">P4</option>
      </select>
      <select onChange={this.selectChangeStatus} value={this.state.status}>
        <option value="open">open</option>
        <option value="closed">closed</option>
      </select>
      <button onClick={this.sendFilter}>Filter</button>
    </div>
    )
  }
});

module.exports = BugFilter;
