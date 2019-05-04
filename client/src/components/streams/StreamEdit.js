import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../accions';
import StreamsForm from './StreamsForm';

class StreamEdit extends React.Component {

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    onFormSumit = formValues => {
        // console.log(formValues);
        this.props.editStream(this.props.match.params.id, formValues);
    }

    render(){
        if (! this.props.stream){
            return <div>Londing...</div>
        }
        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamsForm 
                    // initialValues = {this.props.stream}
                    // pick solo estrae los valores que se desean pasar y no todos como la linea anterior
                    initialValues = {_.pick(this.props.stream, 'title', 'description')}
                    onSubmit={this.onFormSumit} 
                />
            </div>
        );
    } 
}

const mapStateToProps = (state, ownProps) =>{
    return { stream: state.streams[ownProps.match.params.id] }
};

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
