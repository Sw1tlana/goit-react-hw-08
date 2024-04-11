import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from '../../redux/filters/selectors';
import { fetchContacts } from '../../redux/contacts/operations';
import { useEffect } from 'react';


const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  console.log(contacts)

  const dispatch = useDispatch(); // Отримуємо метод dispatch

  useEffect(() => {
    dispatch(fetchContacts()); // Викликаємо дію fetchContacts при монтуванні компонента
  }, [dispatch]);

  return (
    <div>
      <ul className={css.contactsList}>
        {Array.isArray(contacts) && contacts.map(contact => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name} 
            number={contact.number}
          />
        ))} 
      </ul>
    </div>
  )
}

export default ContactList;