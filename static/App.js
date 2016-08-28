var BugList = React.createClass({
  displayName: "BugList",

  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement(BugFilter, null),
      React.createElement(BugTable, null),
      React.createElement(BugAdd, null)
    );
  }
});
var BugFilter = React.createClass({
  displayName: "BugFilter",

  render: function () {
    return React.createElement(
      "div",
      null,
      "This is the BugFilter component.A filter option would go here "
    );
  }
});

var BugTable = React.createClass({
  displayName: "BugTable",

  render: function () {
    return React.createElement(
      "table",
      null,
      React.createElement(
        "thead",
        null,
        React.createElement(
          "tr",
          null,
          React.createElement(
            "th",
            null,
            "ID"
          ),
          React.createElement(
            "th",
            null,
            "Status"
          ),
          React.createElement(
            "th",
            null,
            "Priority"
          ),
          React.createElement(
            "th",
            null,
            "Owner"
          ),
          React.createElement(
            "th",
            null,
            "Title"
          )
        )
      ),
      React.createElement(
        "tbody",
        null,
        React.createElement(BugRow, { id: 1, status: "open", priority: "P1", owner: "Tman", title: "App crashes upon opening" }),
        React.createElement(BugRow, { id: 2, status: "open", priority: "P2", owner: "TmanQ", title: "App crashes upon close" })
      )
    );
  }
});

var BugAdd = React.createClass({
  displayName: "BugAdd",

  render: function () {
    return React.createElement(
      "div",
      null,
      "This is the section to add a bug "
    );
  }
});

var BugRow = React.createClass({
  displayName: "BugRow",

  render: function () {
    return React.createElement(
      "tr",
      { className: "bugrow" },
      React.createElement(
        "td",
        null,
        this.props.id
      ),
      React.createElement(
        "td",
        null,
        this.props.status
      ),
      React.createElement(
        "td",
        null,
        this.props.priority
      ),
      React.createElement(
        "td",
        null,
        this.props.owner
      ),
      React.createElement(
        "td",
        null,
        this.props.title
      )
    );
  }
});

ReactDOM.render(React.createElement(BugList, null), document.getElementById('main'));