import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Action from '../../store/actions'
// import {do_add,add_del} from '../../store/actions'


import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import CounterResult from '../../components/CounterResult'

class Counter extends Component {

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.add5Counter} />
                <CounterControl label="Subtract 5" clicked={this.props.sub5Counter} />
                <hr />
                <button onClick={() => this.props.onResultStore(this.props.ctr)}>Store result</button>

                <CounterResult resultList={this.props.res} clicked={this.props.onResultDelete} />

            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        ctr: state.reduceCounter.counter,
        res: state.reduceResult.result,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(Action.do_add()),
        onDecrementCounter: () => dispatch(Action.do_sub()),
        add5Counter: () => dispatch(Action.do_add(5)),
        sub5Counter: () => dispatch(Action.do_sub(5)),
        onResultStore: (curCounter) => dispatch(Action.do_result_store(curCounter)),
        onResultDelete: (id) => dispatch(Action.do_result_delete(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);