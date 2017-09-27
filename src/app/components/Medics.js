import React from 'react';
import PropTypes from 'prop-types';
import withStyle from 'react-jss';

const style = {
    medic: {
        height: '520px'
    }
};

class Medics extends React.Component {
    render() {
        const {medics} = this.props;
        const {medic} = this.props.classes;

        return (<div className={medic}>
            {medics? (<ul>{medics.map(medic =>(<li type="1" key = {medic.id}>{medic.name}</li>))}</ul>): null}
        </div>)
    };
}

Medics.Prototype = {
  medics: PropTypes.array
};

export default withStyle(style)(Medics);