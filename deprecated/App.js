const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');

var BugList = React.createClass({
  displayName: 'BugList',

  getInitialState: function () {
    return { bugs: [] };
  },
  componentDidMount: function () {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ bugs: data });
        //bind in order to take returned data and bind it to the current state(?) need more research
      }.bind(this)
    });
  },
  render: function () {

    //bugs = data attribute, passing in the "bugs" data array

    return React.createElement(
      'div',
      null,
      React.createElement(BugFilter, null),
      React.createElement(BugTable, { bugs: this.state.bugs }),
      React.createElement(BugAdd, { onBugSubmit: this.addBug })
    );
  },

  addBug: function (newBug) {
    //this function adds data to the base data set, once the state is set, the component updates that displays this(bug table in this instance);
    // var incrementId = this.state.bugs.length + 1;
    // var updatedBugs = this.state.bugs;
    // updatedBugs.push({id: incrementId, status:"new",priority:"P1",owner: newBug.owner, title: newBug.title});
    // console.log(updatedBugs);
    // this.setState({bugs: updatedBugs});
    console.log(newBug);
    $.ajax({
      type: 'POST',
      url: this.props.url,
      contentType: 'application/json',
      data: JSON.stringify(newBug),
      success: function (data) {
        var bugData = data;
        var bug = this.state.bugs.concat(bugData);

        this.setState({ bugs: bug });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }
});
var BugFilter = React.createClass({
  displayName: 'BugFilter',

  render: function () {
    return React.createElement(
      'div',
      null,
      'This is the BugFilter component.A filter option would go here '
    );
  }
});

// var bugsData = [
//   {id: 1, status:"open", priority:"P1", owner:"Tman", title:"App crashes upon opening"},
//   {id: 2, status:"open", priority:"P2", owner:"TmanQ", title:"App crashes upon close"}
// ]

var BugTable = React.createClass({
  displayName: 'BugTable',


  render: function () {
    //this maps the data sent from BugList, from the bugs array, you need key so that react can keep track of the component, bug sends all the data to BugRow as "bug"
    //bugRows returns the results of each data item that is created by bugRow, then placed as a whole into the return render.
    var bugRows = this.props.bugs.map(function (bug) {
      return React.createElement(BugRow, { key: bug._id, bug: bug });
    });
    return React.createElement(
      'table',
      null,
      React.createElement(
        'thead',
        null,
        React.createElement(
          'tr',
          null,
          React.createElement(
            'th',
            null,
            'ID'
          ),
          React.createElement(
            'th',
            null,
            'Status'
          ),
          React.createElement(
            'th',
            null,
            'Priority'
          ),
          React.createElement(
            'th',
            null,
            'Owner'
          ),
          React.createElement(
            'th',
            null,
            'Title'
          )
        )
      ),
      React.createElement(
        'tbody',
        null,
        bugRows
      )
    );
  }
});

var BugAdd = React.createClass({
  displayName: 'BugAdd',

  getInitialState: function () {
    return { owner: '', title: '' };
  },
  handleOwnerChange: function (e) {
    //update input form state of owner to show user input and not erase
    this.setState({ owner: e.target.value });
  },
  handleTitleChange: function (e) {
    this.setState({ title: e.target.value });
  },
  handleSubmit: function (event) {
    var owner = this.state.owner.trim();
    var title = this.state.title.trim();
    this.props.onBugSubmit({ owner: owner, title: title, status: "open", priority: "P1" });
    this.setState({ owner: '', title: '' });
  },
  render: function () {
    return React.createElement(
      'form',
      { className: 'addBugForm' },
      React.createElement('input', { type: 'text', value: this.state.owner, onChange: this.handleOwnerChange }),
      React.createElement('input', { type: 'text', value: this.state.title, onChange: this.handleTitleChange }),
      React.createElement(
        'button',
        { type: 'button', onClick: this.handleSubmit },
        'Add Bug'
      )
    );
  }
});

var BugRow = React.createClass({
  displayName: 'BugRow',

  //receives the "bug" data object , properties, target them as below.
  render: function () {
    return React.createElement(
      'tr',
      { className: 'bugrow' },
      React.createElement(
        'td',
        null,
        this.props.bug._id
      ),
      React.createElement(
        'td',
        null,
        this.props.bug.status
      ),
      React.createElement(
        'td',
        null,
        this.props.bug.priority
      ),
      React.createElement(
        'td',
        null,
        this.props.bug.owner
      ),
      React.createElement(
        'td',
        null,
        this.props.bug.title
      )
    );
  }
});

ReactDOM.render(React.createElement(BugList, { url: '/api/bugs' }), document.getElementById('main'));