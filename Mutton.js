import React from "react";
import { Component } from "react";
class Mutton extends Component{
    constructor(){
        super()
        this.state = {
            chickencounter: 0,
            amount: 0,
            muttoncounter:0,
            muttonamount:0,
            totalamount:0,
        };
    }
    increment(){
        this.setState({
            chickencounter: this.state.chickencounter + 1,
        });
        this.setState({
            amount: this.state.amount + 100,
        });
    }
    decrement(){
        if(this.state.chickencounter <=0){

        }else{
            this.setState({chickencounter: this.state.chickencounter-1});
        }
        if(this.state.amount <=0){

        }
        else{
            this.setState({amount: this.state.amount - 100});
        }
    }
    muttonincre(){
        this.setState({
            muttoncounter: this.state.muttoncounter + 1,
        });
        this.setState({
            muttonamount: this.state.muttonamount + 300,
        });
    }
    muttondecre(){
        if(this.state.muttoncounter <=0){

        }else{
            this.setState({muttoncounter: this.state.muttoncounter-1});
        }
        if(this.state.muttonamount <=0){

        }
        else{
            this.setState({muttonamount: this.state.muttonamount - 300});
        }
    }
    render(){
        return(
            <div>
                <div id="chicken">
                <img src={require("../Images/chicken.jpg")}></img>
                <h3>chicken Count value is:{this.state.chickencounter}</h3>
                <h3>Amount:{this.state.amount}</h3>
                <button onClick={() =>this.increment()}>Increment</button>
                <button onClick={() =>this.decrement()}>Decrement</button>
                </div>

                <div id="mutton">
                <img src={require("../Images/mutton.jpg")}></img>
                <h3>Mutton count value: {this.state.muttoncounter}</h3>
                <h3>Mutton amount:{this.state.muttonamount}</h3>
                <button onClick={() =>this.muttonincre()}>Increase</button>
                <button onClick={() =>this.muttondecre()}>Decrease</button>
                </div>

                <h3>Total amount:{this.state.amount + this.state.muttonamount}</h3>
            </div>
        )
    }
}

export default Mutton;