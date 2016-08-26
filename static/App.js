var BugList = React.createClass({
  displayName: 'BugList',

  render: function () {
    return React.createElement(
      'div',
      null,
      React.createElement(BugFilter, null),
      React.createElement(BugTable, null),
      React.createElement(BugAdd, null)
    );
  }
});

var BugFilter = React.createClass({
  displayName: 'BugFilter',

  render: function () {
    return React.createElement(
      'div',
      null,
      'This is the BugFilter component. A filter option would go here '
    );
  }
});

var BugTable = React.createClass({
  displayName: 'BugTable',

  render: function () {
    return React.createElement(
      'div',
      null,
      'This shows the placeholder for a table to list all the bugs'
    );
  }
});

var BugAdd = React.createClass({
  displayName: 'BugAdd',

  render: function () {
    return React.createElement(
      'div',
      null,
      'This is the section to add a bug '
    );
  }
});

ReactDOM.render(React.createElement(BugList, null), document.getElementById('main'));