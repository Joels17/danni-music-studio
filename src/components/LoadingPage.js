import React from 'react';
import { connect } from 'react-redux';
import { startSetStudents } from '../actions/students';
import { history } from '../routers/AppRouter';

export class LoadingPage extends React.Component {
    componentDidMount = () => {
        this.props.startSetStudents().then(() => {
            history.push('/home');
        })
    }
    
    render() {
        return (
            <div>
                <p>Fetching data...</p>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startSetStudents: () => dispatch(startSetStudents())
    }
}

export default connect(undefined, mapDispatchToProps)(LoadingPage);