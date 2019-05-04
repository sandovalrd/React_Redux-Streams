import React from 'react';
import { connect } from 'react-redux';
import { createStreams } from '../../accions';
import StreamsForm from './StreamsForm';

class StreamCreate extends React.Component {
    
    onFormSumit = formValues => {
        this.props.createStreams(formValues);
    }

    render() {
        return (
            <div>
                <h3>Create a Stream</h3>
                <StreamsForm onSubmit={this.onFormSumit} />
            </div>
        );
    }
}

export default connect(null, {createStreams})(StreamCreate);