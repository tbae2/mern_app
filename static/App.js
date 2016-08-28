var BugList = React.createClass({
  displayName: "BugList",

  getInitialState: function () {
    return { bugs: bugsData };
  },
  render: function () {

    //bugs = data attribute, passing in the "bugs" data array
    //button on click test newBug
    return React.createElement(
      "div",
      null,
      React.createElement(BugFilter, null),
      React.createElement(BugTable, { bugs: this.state.bugs }),
      React.createElement(BugAdd, null),
      React.createElement(
        "button",
        { onClick: this.testNewBug },
        "Test Add New Bug"
      )
    );
  },
  testNewBug: function () {
    //increment the key id so react can track it, pass bug to new bug
    var incrementId = this.state.bugs.length + 1;
    this.addBug({ id: incrementId, status: "open", owner: "tman2", priority: "P2", title: "test bug add" });
  },
  addBug: function (newBug) {
    //this function adds data to the base data set, once th e state is set, the component updates that displays this(bug table in this instance);
    var updatedBugs = this.state.bugs;
    updatedBugs.push(newBug);
    this.setState({ bugs: updatedBugs });
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

var bugsData = [{ id: 1, status: "open", priority: "P1", owner: "Tman", title: "App crashes upon opening" }, { id: 2, status: "open", priority: "P2", owner: "TmanQ", title: "App crashes upon close" }];

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