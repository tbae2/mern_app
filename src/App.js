var BugList = React.createClass({
  render: function() {
    return (
      <div>
        <BugFilter />
        <BugTable />
        <BugAdd />
      </div>
    );
  }
})

var BugFilter = React.createClass({
  render: function() {
    return (
      <div>This is the BugFilter component. A filter option would go here </div>
    );
  }
});

var BugTable = React.createClass({
  render: function() {
    return (
      <div>This shows the placeholder for a table to list all the bugs</div>
    );
  }
});


var BugAdd = React.createClass({
  render: function() {
    return (
      <div>This is the section to add a bug </div>
    );
  }
});

ReactDOM.render(<BugList />,document.getElementById('main'));
