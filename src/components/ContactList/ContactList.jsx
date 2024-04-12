import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/filters/selectors';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  return (
    <div>
      <ul className={css.contactsList}>
        {Array.isArray(contacts) && contacts.length > 0  && contacts.map(contact => (
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