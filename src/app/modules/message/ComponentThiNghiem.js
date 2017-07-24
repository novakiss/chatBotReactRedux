import React from 'react';

export default class ComponentThiNghiem extends React.Component {
    state = {
        data: 'first State',
        finish: false,
        text :  ''
    };

    componentDidMount() {
        this.functionA();
    }

    functionA = () => {
        this.setState = {finish: false}
    };

    handleChange =(e) => {
        this.setState({text: e.target.value});
    };

    render() {
        return (
            <div>
                <h4>Test Component</h4>
                <a >
                    {this.props.testProps}
                </a>
                <input  onChange={this.handleChange} value ={this.state.text}/>

                <button onClick={(e) => this.setState({data: 'second State'})}>Test</button>
            </div>
        );
    }

}