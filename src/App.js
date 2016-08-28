var BugList = React.createClass({
  render: function () {
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
  render: function () {
    return (
      <div>This is the BugFilter component.A filter option would go here </div>
    );
  }
});

var BugTable = React.createClass({
  render: function () {
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
            <BugRow id={1} status="open" priority="P1" owner="Tman" title="App crashes upon opening"/>
          <BugRow id={2} status="open" priority="P2" owner="TmanQ" title="App crashes upon close"/>
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
          render: function() {
    return (
        <tr className="bugrow">
          <td>{this.props.id}</td>
          <td>{this.props.status}</td>
          <td>{this.props.priority}</td>
          <td>{this.props.owner}</td>
          <td>{this.props.title}</td>
        </tr>
          );
     }
  });

ReactDOM.render(<BugList />, document.getElementById('main'));
