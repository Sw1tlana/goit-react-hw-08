import css from './ContactForm.module.css';
import { ErrorMessage } from "formik";
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';


const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
  .min(3, "User name must be at least 3 characters!")
  .max(50, "User name must be less then 50 characters!")
  .required("User name is required"),
  number: Yup.string()
  .min(3, "Phone number must be at least 3 characters!")
  .max(50, "Phone number must be less than 50 characters!")
  .required("Phone number is required")
});

const INITIAL_FORM_DATA = {
  name: "",
  number: ""
}

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (formData, formActions) => {
    dispatch(addContact(formData));
    formActions.resetForm();
  }

  return (
    <div className={css.containerForm}>
      <Formik 
        validationSchema={ContactFormSchema}
        initialValues={INITIAL_FORM_DATA} 
        onSubmit={handleSubmit}>

      <Form className={css.form}>
        <label className={css.labelForm}>
          <span className={css.labelTextForm}>Name</span>
          <Field className={css.inputContactForm}
          placeholder="Name"
          type="text" 
            name="name"
          />
          <ErrorMessage className={css.errorMsg} name="name" component="span" />
        </label>

        <label className={css.labelForm}>
          <span className={css.labelTextForm}>Number</span>
          <Field className={css.inputContactForm}
          placeholder="+(380) 000 00 00"  
          type="text" 
          name="number"
         />
          <ErrorMessage className={css.errorMsg} name="number" component="span" />
        </label>

        <button className={css.submitFormBtn} type="submit">Add contact</button>
      </Form>
      </Formik>
    </div>
  )
}

export default ContactForm