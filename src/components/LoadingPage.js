import React from 'react';
import { connect } from 'react-redux';
import { startSetStudents } from '../actions/students';
import { history } from '../routers/AppRouter';
import { setFiles } from '../actions/files';

export class LoadingPage extends React.Component {
    componentDidMount = () => {
        this.props.setFiles([]);
        if(this.props.isAdmin){
            history.push('/home');
        }else {
            this.props.startSetStudents().then(() => {
                history.push('/home');
            })
        }
     
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
        startSetStudents: () => dispatch(startSetStudents()),
        setFiles: (files) => dispatch(setFiles(files)),
    }
};
const mapStateToProps = (state) => {
    return {
        students: state.students,
        isAdmin: state.isAdmin
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoadingPage);