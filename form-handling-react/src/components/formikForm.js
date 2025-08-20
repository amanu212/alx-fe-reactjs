import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const schema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
});

export default function FormikForm({ onSubmit }) {
  return (
    <div className="card">
      <h2>User Registration (Formik + Yup)</h2>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={schema}
        onSubmit={(values, { resetForm }) => {
          onSubmit?.(values);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form noValidate>
            <label>
              Username
              <Field name="username" />
              <ErrorMessage name="username" component="span" className="error" />
            </label>
            <label>
              Email
              <Field name="email" type="email" />
              <ErrorMessage name="email" component="span" className="error" />
            </label>
            <label>
              Password
              <Field name="password" type="password" />
              <ErrorMessage name="password" component="span" className="error" />
            </label>
            <button type="submit" disabled={isSubmitting}>Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}