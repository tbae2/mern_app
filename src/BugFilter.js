const React = require('react');
const ReactDOM = require('react-dom');
const Button = require('react-bootstrap').Button;
const Panel = require('react-bootstrap').Panel;
const Grid = require('react-bootstrap').Grid;
const Col = require('react-bootstrap').Col;
const Row = require('react-bootstrap').Row;
const ButtonToolbar = require('react-bootstrap').ButtonToolbar;
//try the es6 way


var BugFilter = React.createClass({
  getInitialState: function(){

    var storeQuery = this.props.urlFilter;
    console.log(storeQuery.priority);
    return {priority: storeQuery.priority,
            status: storeQuery.status};
  },
    componentWillReceiveProps: function(newProps){
      //has the component render based on pre-existing url query
      if(newProps.urlFilter.status === this.state.status && newProps.urlFilter.priority
      === this.state.priority){ console.log("bugfilter: no change"); return;}
        this.setState({status: newProps.urlFilter.status,priority: newProps.urlFilter.priority})

    }
  ,
  selectChangePriority: function(event){
    this.setState({priority: event.target.value})
  },
  selectChangeStatus: function(event){
    this.setState({status: event.target.value})
  },
  sendFilter: function(e){
        //store the new filter in an object
        var newFilter = {};
        //if this state which is priority is not blank then make it equal
        if(this.state.priority){
          newFilter.priority = this.state.priority;
        }
        if(this.state.status) {
          newFilter.status = this.state.status;
        }
        //send the new filter object through the props sent by the BugList component
        this.props.loadData(newFilter);

  },
  render: function () {
    return (

      <Panel header="Filter" collapsible defaultExpanded={true}>
        <Grid fluid={true}>
          <Row>
            <Col xs={12} sm={2} md={4}>
              <select onChange={this.selectChangePriority} value={this.state.priority}>
                <option value="">All</option>
                <option value="P1">P1</option>
                <option value="P2">P2</option>
                <option value="P3">P3</option>
                <option value="P4">P4</option>
              </select>
            </Col>
            <Col xs={12} sm={2} md={4}>
              <select onChange={this.selectChangeStatus} value={this.state.status}>
                <option value="open">open</option>
                <option value="closed">closed</option>
              </select>
            </Col>
            <Col xs={12} sm={3} md={4}>
              <ButtonToolbar>
                <Button bsStyle="primary" onClick={this.sendFilter}>Filter</Button>

            </ButtonToolbar>
            </Col>
          </Row>
        </Grid>
      </Panel>


    )
  }
});

module.exports = BugFilter;
