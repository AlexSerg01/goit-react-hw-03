import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function ContactForm({ onAdd }) {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    number: Yup.string()
      .matches(/^[0-9]*$/, "Invalid number")
      .required("Number is required"),
  });

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
      <Formik
        initialValues={{ name: "", number: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label htmlFor="number">Number</label>
            <Field type="tel" name="number" />
            <ErrorMessage name="number" component="div" />
          </div>
          <button type="submit">Add Contact</button>
        </Form>
      </Formik>
    </>
  );
}
