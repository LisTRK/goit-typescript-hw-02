import { Formik, Form, Field, FormikHelpers } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

interface SearchFormValues {
  query: string;
}

export default function SearchBar({ onSubmit }:SearchBarProps) {
  const initialValues: SearchFormValues = {
    query: '',
  };
  const handelSubmit = (value: SearchFormValues, helpers: FormikHelpers<SearchFormValues>) => {
    if (value.query.trim() === '') {
      toast('Please, input your query');
      return;
    }
    onSubmit(value.query);
    helpers.resetForm();
  };
  return (
    <header className={styles.header}>
      <Formik initialValues={initialValues} onSubmit={handelSubmit}>
        <Form className={styles.form}>
          <Field
            className={styles.input}
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={styles.button} type="submit">
            Search
          </button>
          <Toaster />
        </Form>
      </Formik>
    </header>
  );
}
