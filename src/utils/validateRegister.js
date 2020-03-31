export default function validateLogin(values) {
    let errors = {};
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password needs to be more than 6 characters";
    }
    if (!values.first_name) {
        errors.first_name = "First name is required";
    }
    if (!values.last_name) {
        errors.last_name = "Last name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    } 
    
    return errors;
  }