import React from 'react';
import {connect} from 'react-redux';
import {
    postRequest as postRequestAction,
    getRequest as getRequestAction,
    getRequestError as getRequestErrorAction
} from '../../modules/chatBot/actions';


class TryWithAxios extends React.Component {
    render() {
        return <div>
            <h1>test Axios</h1>
            <button onClick={this.props.postData}>Post Request</button>
            <button onClick={this.props.getData}>Get Request</button>
            <button onClick={this.props.error}>Error Request</button>
        </div>
    }
}

const mapStateToProps = {postData: postRequestAction, getData: getRequestAction, error:getRequestErrorAction};

export default connect(null, mapStateToProps)(TryWithAxios);
