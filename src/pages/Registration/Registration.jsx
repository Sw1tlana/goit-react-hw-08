import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { register } from '../../redux/auth/operations';
import css from './Registration.module.css'
import { useDispatch } from 'react-redux'

const Registration = () => {
  const dispatch = useDispatch();

  const onRegister = (formData) => {
    dispatch(register(formData));
  }
   
  return (
      <div className={css.containerRegistration}>
       <RegistrationForm onRegister={onRegister}/>
    </div>
  )
}

export default Registration
