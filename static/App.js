var BugList = React.createClass({
  displayName: "BugList",

  render: function () {

    //bugs = data attribute, passing in the "bugs" data array
    return React.createElement(
      "div",
      null,
      React.createElement(BugFilter, null),
      React.createElement(BugTable, { bugs: bugs }),
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

var bugs = [{ id: 1, status: "open", priority: "P1", owner: "Tman", title: "App crashes upon opening" }, { id: 2, status: "open", priority: "P2", owner: "TmanQ", title: "App crashes upon close" }];

var BugTable = React.createClass({
  displayName: "BugTable",

  render: function () {
    //this maps the data sent from BugList, from the bugs array, you need key so that react can keep track of the component, bug sends all the data to BugRow as "bug"
    //bugRows returns the results of each data item that is created by bugRow, then placed as a whole into the return render.
    var bugRows = this.props.bugs.map(function (bug) {
      return React.createElement(BugRow, { key: bug.id, bug: bug });
    });
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
        bugRows
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

  //receives the "bug" data object , properties, target them as below. 
  render: function () {
    return React.createElement(
      "tr",
      { className: "bugrow" },
      React.createElement(
        "td",
        null,
        this.props.bug.id
      ),
      React.createElement(
        "td",
        null,
        this.props.bug.status
      ),
      React.createElement(
        "td",
        null,
        this.props.bug.priority
      ),
      React.createElement(
        "td",
        null,
        this.props.bug.owner
      ),
      React.createElement(
        "td",
        null,
        this.props.bug.title
      )
    );
  }
});

ReactDOM.render(React.createElement(BugList, null), document.getElementById('main'));