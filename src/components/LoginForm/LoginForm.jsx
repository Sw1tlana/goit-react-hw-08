import { ErrorMessage } from "formik";
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import * as Yup from "yup";
import '../../index.css';
import css from './LoginForm.module.css';

const UserRegisterSchema = Yup.object().shape({
    email: Yup.string()
    .required("Email is required")
    .email("Must by a valid email"),
    password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters!"),
});

const INITIAL_FORM_DATA = {
  email: "",
  password: "",
}

export const LoginForm = ({ onLogin }) => {
const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (formData, formActions) => {
     onLogin(formData);
    formActions.resetForm();
  }
  
  return (
    <div className={`${css.containerForm} container`}>
      <img className={css.imgLoginForm}
        src="https://www.2n.com/ru_RU/documents/22902/10363696/My2N-man_plat_user-without-login_800x533.webp/f8ff8863-8e63-4fa9-8c4b-a5a34e33a54a"
        alt="documents"/>
        <Formik 
        validationSchema={UserRegisterSchema}
        initialValues={INITIAL_FORM_DATA} 
        onSubmit={handleSubmit}>

      <Form className={css.formLogin}>
        <label className={css.labelForm}>
          <span className={css.labelTextForm}>Email</span>
        <Field className={css.inputContactForm} 
          placeholder="max142m@gmail.com"                
          type="text" 
          name="email"
         />
          <ErrorMessage className={css.errorMsg} name="email" component="span" />
        </label>
                  
        <label className={css.labelForm}>
          <span className={css.labelTextForm}>Password</span>
            <Field className={css.inputContactForm} 
          placeholder="Enter your password"                
          type={showPassword ? "text" : "password"}  
          name="password" />
            <button 
                type="button" 
                onClick={togglePasswordVisibility}
                className={css.passwordToggleBtn}
             >
                {showPassword ? "✔" : "X"}
              </button>
          <ErrorMessage className={css.errorMsg} name="password" component="span" />
        </label>

        <button className={css.submitFormBtn}
                      type="submit"
                      title='Click to register user'
                  >Sign In</button>
      </Form>
      </Formik>
      </div>
  )
}

export default LoginForm;
