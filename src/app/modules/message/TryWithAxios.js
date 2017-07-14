import React from 'react';
import {connect} from 'react-redux';
import {
    postRequest as postRequestAction,
    getRequest as getRequestAction,
    getRequestError as getRequestErrorAction
} from '../../modules/chatBot/actions';

import {selectAxios} from '../../modules/chatBot/selectors';

class TryWithAxios extends React.Component {
    getDataValue = () => {
        const {getData} = this.props;
        return Object.entries(getData).map(([key, value]) => {
            return (
                <div key={key}>
                    id is: {value.id} ;
                    use_id is: {value.userId}
                </div>
            )
        })
    };
    /*
     * Neu de {key} va {value} se cho ra error trong 2 fct: post va getData*/
    postData = () => {
        const {postData} = this.props;
        return Object.entries(postData).map(([key, value]) => {
            return (
                <div key={key}>
                    Data posted
                    id is: {value.id} ;
                    first_Name is: {value.firstName};
                    lastName is : {value.lastName}
                </div>
            )
        })
    };

    errData = () => {
        const {error} = this.props;
        return Object.entries(error).forEach(([key, value]) => {
            return <div key={key}>
                {key} {value}
            </div>;
        });
    };

    render() {

        return <div>
            <h1>test Axios</h1>
            <button onClick={this.props.postDataAction}>Post Request</button>
            <button onClick={this.props.getDataAction}>Get Request</button>
            <button onClick={this.props.errorAction}>Error Request</button>
            {this.getDataValue()}
            {this.postData()}
            {this.errData()}
        </div>
    }
}

const obj = {
    prop1: {
        subProp1: '1'
    },
    prop2 :{
        subProp2: '2'
    }
};

/*
const arr = [1, 3];

const t1 = arr.map(i => i * 2); // [2, 6]
const t2 = arr.forEach(i => console.log(i)); // undefined

Object.keys(obj).map(key => obj[key]);

const objKys = ['prop1', 'prop2'] == Object.keys(obj);

const res = [{subProp1: '1'}, {subProp2: '2'}]
*/

const mapStateToProps = {
    postDataAction: postRequestAction,
    getDataAction: getRequestAction,
    errorAction: getRequestErrorAction
};

const mapDispatchToProps = (state) => {
    const {getData, postData, error} = selectAxios(state);
    return {getData, postData, error};
};


export default connect(mapDispatchToProps, mapStateToProps)(TryWithAxios);
