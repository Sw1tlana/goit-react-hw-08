import css from './Contact.module.css';
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  }

  return (
      <li className={css.contactItem}>
        <div className={css.containerContactItem}>
          <div className={css.containerInfo}>
            <p><FaUser /><span className={css.contactInfo}>{name}</span></p>
            <p><FaPhoneAlt /><span className={css.contactInfo}>{number}</span></p>
          </div>
          <button className={css.contactDeleteBtn} type="button"
          onClick={() => handleDelete(id)}>Delete</button>
        </div>
      </li>
  )
};

export default Contact