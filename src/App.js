var BugList = React.createClass({
  render: function () {

    //bugs = data attribute, passing in the "bugs" data array
    return (
      <div>
        <BugFilter />
        <BugTable bugs={bugs}/>
        <BugAdd />
      </div>
    );
  }
})
var BugFilter = React.createClass({
  render: function () {
    return (
      <div>This is the BugFilter component.A filter option would go here </div>
    );
  }
});

var bugs = [
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
