import React, { Component } from 'react';
import * as ACTIONS from '../store/actions/actions';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';




class Container1 extends Component {

  render() {
    return (
      <div>
        < Button variant="contained" color="primary" onClick={() => this.props.action3()}>Dispatch Action 3 </Button>
        <Button  variant="contained" color="primary"onClick={() => console.log(this.props.stateprop1)}> Get State </Button>
        <Button variant="contained" color="primary" onClick={() => this.props.action1()}> Dispatch Action 1 </Button>
        <Button variant="contained" color="primary" onClick={() => this.props.action2()}>Dispatch Action 2 </Button>
        <Button variant="contained" color="primary" onClick={() => this.props.action_creator1()}>Dispatch Action Creator 1 </Button>
        <Button variant="contained" color="primary" onClick={() => this.props.action_creator2()}>Dispatch Action Creator 2 </Button>
        {this.props.user_text
          ? <h3> {this.props.user_text} </h3>
          : <h3> No User Text </h3>
        }
        <br />
        {this.props.stateprop1
          ? <p> stateprop1 is true </p>
          : <p> stateprop1 is false </p>
        }
      </div>
    )}
}


function mapStateToProps(state) {
  return {
    stateprop1: state.reducer1.stateprop1,
    user_text: state.user_reducer.user_text
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action1: () => dispatch(ACTIONS.SUCCESS),
    action2: () => dispatch(ACTIONS.FAILURE),
    action3: () => dispatch(ACTIONS.SUCCESS),
    action_creator1: () => dispatch(ACTIONS.success()),
    action_creator2: () => dispatch(ACTIONS.failure())
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Container1);
