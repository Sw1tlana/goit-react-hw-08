import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { register } from '../../redux/auth/operations';
import css from './Registration.module.css'
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet-async';

const Registration = () => {
  const dispatch = useDispatch();

  const onRegister = (formData) => {
    dispatch(register(formData));
  }
   
  return (
    <div className={css.containerRegistration}>
      <Helmet>
        <title>Registration</title>
      </Helmet>
       <RegistrationForm onRegister={onRegister}/>
    </div>
  )
}

export default Registration;
