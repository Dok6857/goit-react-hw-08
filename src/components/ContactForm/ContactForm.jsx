// ContactForm.jsx
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

export const ContactForm = () => {
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .min(9, 'Please try again (example: 111-222-3333)')
      .max(12, 'Please try again (example: 111-222-3333)')
      .required('Required'),
  });

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label htmlFor="name">
          Name
          <Field className={css.inputFields} id="name" name="name" />
          <ErrorMessage className={css.error} name="name" component="div" />
        </label>

        <label htmlFor="number">
          Number
          <Field className={css.inputFields} id="number" name="number" />
          <ErrorMessage className={css.error} name="number" component="div" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
