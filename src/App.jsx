
import Loader from './components/Loader/Loader';
import css from './App.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectError, selectLoading } from './redux/contacts/selectors';
import { fetchContacts } from './redux/contacts/operations';
import { lazy } from 'react';
import { Suspense, Route, Routers } from 'react';

const ContactForm = lazy(() => import('./components/ContactForm/ContactForm'));
const SearchBox = lazy(() => import('./components/SearchBox/SearchBox')); 
const ContactList = lazy(() => import('./components/ContactList/ContactList')); 
const Home = lazy(() => import('./pages/Home/Home'));
const Contacts = lazy(() => import('./pages/Contacts/Contacts'));
const Login = lazy(() => import('./pages/Login/Login'));
const Registration = lazy(() => import('./pages/Registration/Registration'));


function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])
  
  return (
    <div className={css.formWrapper}>
      <div>
        <Suspense fallback={<Loader />}>
          <Routers>
            <Route patch="/" element={<Home/>} />
            <Route patch="/register" element={<Registration />} />
            <Route patch="/login" element={<Login />} />
            <Route patch="/contacts" element={<Contacts />} />
          </Routers>
        </Suspense>
      </div>
      <h1 className={css.heroFormTitle}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
        {isLoading && !error &&  <Loader /> }
      <ContactList />
   </div>
  )
}

export default App