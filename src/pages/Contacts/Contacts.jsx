import css from './Contacts.module.css';
import Loader from '../../components/Loader/Loader';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectError, selectLoading } from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';
import { Helmet } from 'react-helmet-async';

import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox'; 
import ContactList from '../../components/ContactList/ContactList';

const Contacts = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])
  
  return (
    <div>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <div className={css.containerContacts}>
         <h2 className={css.phoneTitle}>Phonebook</h2>
      </div>
      <ContactForm />
      <SearchBox />
      {loading && !error && <Loader />}
      <ContactList />
    </div>
  )
}

export default Contacts;