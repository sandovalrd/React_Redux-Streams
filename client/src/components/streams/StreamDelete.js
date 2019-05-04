import React from 'react';
import Modal from '../Modal';
import { connect } from 'react-redux';
import history from '../../history';
import { Link } from 'react-router-dom';
import { fetchStream, deleteStream } from '../../accions';

class StreamsDelete extends React.Component {

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions(){
        const id = this.props.match.params.id;
        return (
            <React.Fragment>
                <div onClick={() => this.props.deleteStream(id)} className="ui button negative">Delete</div>
                <Link to='/' className="ui cancel button">Cancel</Link>
            </React.Fragment>
        )
    }
    
    renderContent(){
        if (!this.props.stream){
            return 'Are you sure you want to delete this stream?'
        }

        return `Are you sure you want to delete this stream with title: ${this.props.stream.title}`
    }

    render(){
        return ( 
            <Modal 
                title ='Delete Stream'
                content = {this.renderContent()}
                actions = {this.renderActions()}
                onDismiss = {()=>history.push('/')}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) =>{
    return { stream: state.streams[ownProps.match.params.id] }
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamsDelete);