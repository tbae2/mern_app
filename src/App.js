var BugList = React.createClass({
  getInitialState: function(){
    return {bugs: bugsData}
  },
  render: function () {

    //bugs = data attribute, passing in the "bugs" data array
    //button on click test newBug
    return (
      <div>
        <BugFilter />
        <BugTable bugs={this.state.bugs}/>
        <BugAdd />
      <button onClick={this.testNewBug}>Test Add New Bug</button>
      </div>
    );
  },
  testNewBug: function() {
    //increment the key id so react can track it, pass bug to new bug
      var incrementId = this.state.bugs.length + 1;
      this.addBug({id: incrementId, status:"open",owner:"tman2",priority:"P2",title:"test bug add"});
  },
  addBug: function (newBug) {
    //this function adds data to the base data set, once th e state is set, the component updates that displays this(bug table in this instance);
    var updatedBugs = this.state.bugs;
    updatedBugs.push(newBug);
    this.setState({bugs: updatedBugs});

  }
})
var BugFilter = React.createClass({
  render: function () {
    return (
      <div>This is the BugFilter component.A filter option would go here </div>
    );
  }
});

var bugsData = [
  {id: 1, status:"open", priority:"P1", owner:"Tman", title:"App crashes upon opening"},
  {id: 2, status:"open", priority:"P2", owner:"TmanQ", title:"App crashes upon close"}
]

var BugTable = React.createClass({
  render: function () {
    //this maps the data sent from BugList, from the bugs array, you need key so that react can keep track of the component, bug sends all the data to BugRow as "bug"
    //bugRows returns the results of each data item that is created by bugRow, then placed as a whole into the return render.
    var bugRows = this.props.bugs.map(function(bug){
      return(
        <BugRow key={bug.id} bug={bug}></BugRow>
      );
    });
    return (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Owner</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {bugRows}
          </tbody>
         </table>

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

var BugRow = React.createClass({
  //receives the "bug" data object , properties, target them as below.
          render: function() {
    return (
        <tr className="bugrow">
          <td>{this.props.bug.id}</td>
          <td>{this.props.bug.status}</td>
          <td>{this.props.bug.priority}</td>
          <td>{this.props.bug.owner}</td>
          <td>{this.props.bug.title}</td>
        </tr>
          );
     }
  });

ReactDOM.render(<BugList />, document.getElementById('main'));
