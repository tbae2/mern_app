const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');

const BugFilter = require('./BugFilter');
const BugAdd = require('./BugAdd');

var BugRow = React.createClass({
  //receives the "bug" data object , properties, target them as below.
          render: function() {
    return (
        <tr className="bugrow">
          <td>{this.props.bug._id}</td>
          <td>{this.props.bug.status}</td>
          <td>{this.props.bug.priority}</td>
          <td>{this.props.bug.owner}</td>
          <td>{this.props.bug.title}</td>
        </tr>
          );
     }
  });

var BugTable = React.createClass({

    render: function () {
      //this maps the data sent from BugList, from the bugs array, you need key so that react can keep track of the component, bug sends all the data to BugRow as "bug"
      //bugRows returns the results of each data item that is created by bugRow, then placed as a whole into the return render.
      var bugRows = this.props.bugs.map(function(bug){
        return(
          <BugRow key={bug._id} bug={bug}></BugRow>
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

var BugList = React.createClass({
  getInitialState: function(){
    return {bugs: []}
  },
  componentDidMount: function(){
    this.loadData();
  },
    componentDidUpdate: function(prevProps){
      var oldQuery = prevProps.location.query;
      var newQuery = this.props.location.query;
      if(oldQuery.priority === newQuery.priority && oldQuery.status === newQuery.status){
        console.log("bug list: componentdidupdate: no change ");
      }else {
        console.log("buglist:componentdidupdate: changes detected updating component");
        this.loadData();
      }
    },
  loadData: function(){
      var query = this.props.location.query || {};
      var filter = {priority: query.priority, status: query.status}
      $.ajax('/api/bugs', {data: filter}).done(function(data){
          this.setState({bugs: data});
      }.bind(this));

  },
  render: function () {

    //bugs = data attribute, passing in the "bugs" data array

    return (
      <div>
        <BugFilter loadData={this.changeFilter} urlFilter={this.props.location.query}/>
        <BugTable bugs={this.state.bugs}/>
        <BugAdd onBugSubmit={this.addBug}/>

      </div>
    );
  },
  changeFilter: function(newFilter){
    this.context.router.push({search: '?' + $.param(newFilter)});

  }  ,

addBug: function (newBug) {
    //this function adds data to the base data set, once the state is set, the component updates that displays this(bug table in this instance);
    // var incrementId = this.state.bugs.length + 1;
    // var updatedBugs = this.state.bugs;
    // updatedBugs.push({id: incrementId, status:"new",priority:"P1",owner: newBug.owner, title: newBug.title});
    // console.log(updatedBugs);
    // this.setState({bugs: updatedBugs});
    $.ajax({
      type: 'POST',
      url: '/api/bugs',
      contentType: 'application/json',
      data: JSON.stringify(newBug),
      success: function(data){
        var bugData = data;
        var bug = this.state.bugs.concat(bugData);

          this.setState({bugs: bug});
      }.bind(this),
      error: function(xhr,status,err){
        console.error('/api/bugs', status, err.toString());
      }
    });
  }
});

//react router v2.0
  BugList.contextTypes= {
    router: React.PropTypes.object
  };


module.exports = BugList;
