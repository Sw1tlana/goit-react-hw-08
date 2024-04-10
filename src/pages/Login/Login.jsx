import LoginForm from '../../components/LoginForm/LoginForm';
import { login } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import css from './Login.module.css';

const Login = () => {
  const dispatch = useDispatch();

  const onLogin = (formData) => {
    dispatch(login(formData));
  }
   
  return (
      <div className={css.containerRegistration}>
       <LoginForm onLogin={onLogin}/>
    </div>
  )
}

export default Login;

