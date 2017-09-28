import {connect} from 'react-redux';

import {fetchDataSelector} from '../selectors';

import Medics from '../components/Medics';

const mapStateToProps = (state) => {
    const {medics} = fetchDataSelector(state).response;
    return {medics}
};

export default connect(mapStateToProps)(Medics)