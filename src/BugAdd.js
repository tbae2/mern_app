const React = require('react');
const ReactDOM = require('react-dom');

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
    var title = this.state.title.trim();
    this.props.onBugSubmit({owner: owner, title:title, status:"open", priority:"P1"});
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

module.exports = BugAdd;
