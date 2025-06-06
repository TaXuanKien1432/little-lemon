import React, { useContext, useState } from 'react'
import FormInput from '../components/FormInput'
import { LogInContext } from '../App';
import { useNavigate } from 'react-router-dom';
import Popup from '../components/Popup';

const Login = () => {
  const [values, setValues] = useState({
    email:"",
    password:"",
  });

  const [errors, setErrors] = useState({
    email:"",
    password:"",
  });

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const {setIsLoggedIn} = useContext(LogInContext);
  const navigate = useNavigate();

  const validateField = (name, value) => {
    let error = "";

    if (name === "email") {
      if (!value) {
        error = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        error = "Email is not valid";
      }
    }

    if (name === "password") {
      if (!value) {
        error = "Password is required";
      } else if (value.length < 6) {
        error = "Password must be at least 6 characters";
      }
    }

    return error;
  };

  const validate = () => {
    let valid = true;

    if (!values.email || !/\S+@\S+\.\S+/.test(values.email) || !values.password || values.password.length < 6) {
      valid = false;
    }; 

    return valid;
  }

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })

    const fieldError = validateField(e.target.name, e.target.value);
    setErrors({...errors, [e.target.name]: fieldError});
  };

  const handleBlur = (e) => {
    const fieldError = validateField(e.target.name, e.target.value);
    setErrors({...errors, [e.target.name]: fieldError});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    Object.keys(values).forEach((name) => {
      const errorMessage = validateField(name, values[name]);
      newErrors[name] = errorMessage;
    });
    setErrors(newErrors);
    const hasErrors = Object.values(newErrors).some((error) => error !== "");
    if (hasErrors) return;
    setIsPopupOpen(true);
    setErrors({
      email: "",
      password: "",
    });
    setValues({
      email: "",
      password: "",
    });
  };

  return (
    <div className="login-section main-content">
      <div className="login-component">
        <h1 className="login-title">Login</h1>
        <p className="login-subtitle">Please enter your email and password!</p>
        <form className="login-form" onSubmit={handleSubmit} onBlur={handleBlur}>
          <FormInput id="email" label="Email" name="email" type="text" placeholder="Email" value={values.email} onChange={handleChange} onBlur={handleBlur}/>
          {errors.email && <p className="error">{errors.email}</p>}
          <FormInput id="password" label="Password" name="password" type="password" placeholder="Password" value={values.password} onChange={handleChange} />
          {errors.password && <p className="error">{errors.password}</p>}
          <button type="submit">Submit</button>
        </form>
        {isPopupOpen && <Popup
                        message="Logged in successfully!"
                        onClose={() => {setIsPopupOpen(false);
                                        setIsLoggedIn(true);
                                        navigate('/cart');
                                }}
                        />}
      </div>
    </div>
  )
}

export default Login