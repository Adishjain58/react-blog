import React from 'react';
import SignUpForm from './SignUpForm';
import PropTypes from 'prop-types';

class SignUp extends React.Component{
  constructor(){
    super();
    this.state={
      name:'',
      email:'',
      password:'',
      password_confirmation:'',
      errors:{}
    }
    this.handleInputChange=this.handleInputChange.bind(this);
  }
  handleInputChange(event){
this.setState({
  [event.target.name]: event.target.value
 
});
  }

  handleSubmit= async (event)=>{
    event.preventDefault();



try{
  
  const user=await this.props.registerUser(this.state)


      this.props.setAuthUser(user);

 
} catch(errors){
  this.setState({errors});
}


 
}
  render(){
    return(
      <SignUpForm 
      handleInputChange={this.handleInputChange}
      handleSubmit={this.handleSubmit}
      
      errors={this.state.errors}

      />

    );
  };
}

SignUp.PropTypes={
  registerUser:PropTypes.func.isRequired,
  setAuthUser:PropTypes.func.isRequired,
  
};

export default SignUp;