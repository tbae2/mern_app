var BugList = React.createClass({
  getInitialState: function(){
    return {bugs: bugsData}
  },
  render: function () {

    //bugs = data attribute, passing in the "bugs" data array

    return (
      <div>
        <BugFilter />
        <BugTable bugs={this.state.bugs}/>
      <BugAdd onBugSubmit={this.addBug}/>

      </div>
    );
  },

addBug: function (newBug) {
    //this function adds data to the base data set, once the state is set, the component updates that displays this(bug table in this instance);
    var incrementId = this.state.bugs.length + 1;
    var updatedBugs = this.state.bugs;
    updatedBugs.push({id: incrementId, status:"new",priority:"P1",owner: newBug.owner, title: newBug.title});
    console.log(updatedBugs);
    this.setState({bugs: updatedBugs});

  }
});
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
  getInitialState: function(){
    return {owner:'',title:''}
  },
  handleOwnerChange: function(e){
    //update input form state of owner to show user input and not erase
    this.setState({owner: e.target.value})
  },
  handleTitleChange: function(e){
    this.setState({title: e.target.value})
  },
  handleSubmit: function(event){
    var owner = this.state.owner.trim();
      console.log(owner);
    var title = this.state.title.trim();
    this.props.onBugSubmit({owner: owner, title:title});
    this.setState({owner:'',title:''});
  },
  render: function() {
    return (
      <form className="addBugForm">
        <input type="text" value={this.state.owner} onChange={this.handleOwnerChange}/>
        <input type="text" value={this.state.title} onChange={this.handleTitleChange}/>
        <button type="button" onClick={this.handleSubmit}>Add Bug</button>
      </form>
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
