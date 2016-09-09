const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');
const Link = require('react-router').Link;

var BugEdit = React.createClass({

  getInitialState:function(){
      return {};
  },
  onChangePriority: function(event){
    this.setState({priority: event.target.value});
  },
  onChangeStatus: function(event){
    this.setState({status: event.target.value})
  },
  onChangeOwner: function(event){
    this.setState({owner: event.target.value})
  },
  onChangeTitle: function(event){
    this.setState({title: event.target.value})
  },
  componentDidMount: function(){
    this.loadData();
  },
  componentDidUpdate: function(prevProps){
      if(this.props.params.id != prevProps.params.id){
        this.loadData();
      }
  },
  loadData: function(){
    $.ajax('/api/bugs/' + this.props.params.id).done(function(bug){
      this.setState(bug);
    }.bind(this));
  },
  submit: function(e){
    e.preventDefault();
    let bug = {
      status: this.state.status,
      priority: this.state.priority,
      owner: this.state.owner,
      title: this.state.title
    }

    $.ajax({
      url: '/api/bugs/' + this.props.params.id,
      type: 'PUT',
      contentType: 'application/json',
      data: JSON.stringify(bug),
      dataType: 'json',
      success: function(bug){
        this.setState(bug);
      }.bind(this),
    });
  },
  render: function(){
    return (
      <div>
        <h3>Edit Bug: {this.props.params.id}</h3>
        <form className="bugedit" onSubmit={this.submit}>
          Priority:
          <select name="priority" onChange={this.onChangePriority} value={this.state.priority}>
            <option value="P1">P1</option>
            <option value="P2">P2</option>
            <option value="P3">P3</option>
          </select>
          <br/>
          Status:
          <select onChange={this.onChangeStatus} value={this.state.status}>
            <option value="New">New</option>
            <option value="Closed">Closed</option>
            <option value="Open">Open</option>
            <option value="Fixed">Fixed</option>
          </select>
          <br/>
          Owner: <input type="text" value={this.state.owner} onChange={this.onChangeOwner}/>
          <br />
          Title: <input type="text" value={this.state.title} onChange={this.onChangeTitle}/>
          <br />
          <button type="submit">Submit</button>
          <Link to="/bugs">Return to Bug List</Link>
        </form>
      </div>
    );
  }
});

module.exports = BugEdit;
