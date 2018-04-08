import React, { Component } from 'react';
import './index.css';

class App extends Component{

    constructor(props){
        super(props);
        this.state ={temperatureInC : '', temperatureInF: ''};
       this.handleCChange = this.handleCChange.bind(this);
       this.handleFChange = this.handleFChange.bind(this);

    }

    handleCChange(e){
        if(e.target.value.length<=0)
        {
            this.setState({temperatureInF:''});
            this.setState({temperatureInC:e.target.value});
        }
else {
            this.setState({temperatureInC:e.target.value});
            this.setState({temperatureInF:Ctf(e.target.value)});
        }

    }
    handleFChange(e){
        if(e.target.value.length<=0)
        {
            this.setState({temperatureInF:e.target.value});
            this.setState({temperatureInC:''});
        }
        else{
            this.setState({temperatureInF:e.target.value});
            this.setState({temperatureInC:Ftc(e.target.value)});
        }

    }



    render(){
        const temperature = this.state.temperatureInC;
        return(
            <div>
                <fieldset>
                    <legend> Enter temperature in Celsius</legend>
                    <input type="number" value={this.state.temperatureInC} onChange={this.handleCChange} />
                </fieldset>
                <fieldset>
                    <legend>Enter temperature in Fahrenheit</legend>
                    <input type="number" value={this.state.temperatureInF} onChange={this.handleFChange} />
                </fieldset>
                <BoilingVerdict celsius={temperature} />
            </div>

        );
    }


}



function Ctf(temp) {
        return (temp * 9 / 5) + 32 ;

}

function Ftc(temp) {
        return Math.floor((temp -32) * 5 / 9);

}

function BoilingVerdict(props) {
    if(props.celsius >= 100){
      return  <h3>Water boils at this temperature.</h3>
    }
    else{
    return    <h3>Water will not boil.</h3>
    }

}
export default App;
