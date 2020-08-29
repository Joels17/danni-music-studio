import React from 'react';
import { connect } from 'react-redux';
import { startSetStudents } from '../actions/students';
import { history } from '../routers/AppRouter';

export class LoadingPage extends React.Component {
    componentDidMount = () => {
        if(this.props.students.length === 0){
            history.push('/home');
        }
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
};

const mapDispatchToProps = (dispatch) => {
    return {
        startSetStudents: () => dispatch(startSetStudents())
    }
};
const mapStateToProps = (state) => {
    return {
        students: state.students
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoadingPage);