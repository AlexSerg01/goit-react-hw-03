import css from "./ContactForm.module.css";
import { Formik, Form, Field } from "formik";

export default function ContactForm({ onAdd }) {
  const handleSubmit = (values, actions) => {
    onAdd({
      id: Date.now(),
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };

  return (
    <>
      <Formik initialValues={{ name: "", number: "" }} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <div className={css.name}>
            <label>Name</label>
            <Field type="text" name="name" className={css.input} />
          </div>
          <div className={css.phone}>
            <label>Number</label>
            <Field
              type="tel"
              name="number"
              pattern="[0-9]*"
              className={css.input}
            />
          </div>
          <button type="submit">Add Contact</button>
        </Form>
      </Formik>
    </>
  );
}
