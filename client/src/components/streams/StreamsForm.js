import React from 'react';
import { Field, reduxForm } from 'redux-form'; // https://redux-form.com
import validate from './validate';

class StreamsForm extends React.Component {

    renderError({ touched, error }){
        if ( touched && error ) {
            return (
                <div className='ui error message'>
                    <div className='header'>{error}</div>
                </div>
            );
        }

        return null;
    };

    renderField = ({ input, label, meta}) => {
        const className = `field ${meta.touched && meta.error ? 'error':''}`;
        return (
            <div className={className}>
            <label>{label}</label>
                <div>
                    <input {...input} placeholder={label} autoComplete='off' />
                    { this.renderError(meta) }
                </div>
            </div>
        );
    }
    
    onFormSumit = formValues => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form className='ui form error' onSubmit={this.props.handleSubmit(this.onFormSumit)}>
                <Field name='title' component={this.renderField} label='Name' />
                <Field name='description' component={this.renderField} label='Description' />
                <button className='ui button primary'>Submit</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'StreamsForm',
    validate
})(StreamsForm);
