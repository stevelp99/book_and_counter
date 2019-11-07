
import React, {Component} from 'react';

const title={
    margin:40
  }

class Calc extends Component {
    render() {
        return (
            <div style={title} className="button">
                <button name="1" onClick={e => this.props.onClick(e.value)}>1</button>
                <button name="2" onClick={e => this.props.onClick(e.value)}>2</button>
                <button name="3" onClick={e => this.props.onClick(e.value)}>3</button>
                <button name="+" onClick={e => this.props.onClick(e.value)}>+</button>
                <div/>
                <button name="4" onClick={e => this.props.onClick(e.value)}>4</button>
                <button name="5" onClick={e => this.props.onClick(e.value)}>5</button>
                <button name="6" onClick={e => this.props.onClick(e.value)}>6</button>
                <button name="-" onClick={e => this.props.onClick(e.value)}>-</button>
                <div/>
                <button name="7" onClick={e => this.props.onClick(e.value)}>7</button>
                <button name="8" onClick={e => this.props.onClick(e.value)}>8</button>
                <button name="9" onClick={e => this.props.onClick(e.value)}>9</button>
                <button name="=" onClick={e => this.props.onClick(e.value)}>=</button>
                <div/>
                <button name="0" onClick={e => this.props.onClick(e.value)}>0</button>
                <div/>
            </div>
        );
    }
}
export default Calc;
