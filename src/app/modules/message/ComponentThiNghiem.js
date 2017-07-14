import React from 'react';

export default class ComponentThiNghiem extends React.Component {
    state = {
        data :'first State',
        finish : false
    };

    componentDidMount ( ) {
        this.functionA();
    }

    functionA = ( )=> {
        this.setState = {finish :  false}
    };


    render() {
        return (
            <div>
                <h4>Test Component</h4>
                <a >
                    {this.props.testProps}
                </a>
                <button onClick={(e) => this.setState ({data: 'second State'})}>Test</button>
            </div>
        );
    }

}