const React = require('react');
const ReactDOM = require('react-dom');
const Form = require('react-bootstrap').Form;
const FormGroup = require('react-bootstrap').FormGroup;
const Panel = require('react-bootstrap').Panel;
const FormControl = require('react-bootstrap').FormControl;
const ControlLabel = require('reqact-bootstrap').ControlLabel;

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
      <Panel header="Add Bug">
        <Form horizontal>
          <FormGroup>
            <FormControl type="text" placeholder="Owner" value={this.state.owner} onChange={this.handleOwnerChange}/>
          </FormGroup>
          <FormGroup>
            <FormControl type="text" placeholder="Title" value={this.state.title} onChange={this.handleTitleChange}/>
          </FormGroup>
          <button type="button" onClick={this.handleSubmit}>Add Bug</button>
        </Form>
      </Panel>
  );
 }
});

module.exports = BugAdd;
