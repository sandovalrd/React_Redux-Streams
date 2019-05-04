import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../accions'

class GoogleAuth extends React.Component{
    
    // state = {isSignedIn:null}
    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId : '', // You clientId google api
                scope: 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                // this.setState({isSignedIn:this.auth.isSignedIn.get()});
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = isSignedIn => {
        // this.setState({isSignedIn:this.auth.isSignedIn.get()});
        if (isSignedIn){
            return this.props.signIn(this.auth.currentUser.get().getId());
        }else{
            return this.props.signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton(){
        if (this.props.isSignedIn=== null){
            return null
        }else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className='ui google plus button'>
                    <i className='google icon'></i>
                    Sing Out
                </button>
            );
        }else{
            return (
                <button onClick={this.onSignInClick} className='ui google plus button'>
                    <i className='google icon'></i>
                    Sing In
                </button>
            );
        }
    }

    
    render(){
        return <div>{this.renderAuthButton()}</div>
    }
};

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn}
}

export default connect(mapStateToProps,{signIn, signOut})(GoogleAuth);

// export default GoogleAuth;


// const auth = gapi.auth2.getAuthInstance()
// auth.singIn()
// auth.isSignedIn.get()
