import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/filters/selectors';


const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  console.log(contacts)

  return (
    <div>
      <ul className={css.contactsList}>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.username} 
            number={contact.number}
          />
        ))} 
      </ul>
    </div>
  )
}

export default ContactList;