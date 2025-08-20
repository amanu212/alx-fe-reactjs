import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const schema = Yup.object({
  username: Yup.string().trim().required("Username is required"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters")
               .required("Password is required"),
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
              <Field name="username" placeholder="e.g. roble_dev" />
              <ErrorMessage name="username" component="span" className="error" />
            </label>

            <label>
              Email
              <Field name="email" type="email" placeholder="you@example.com" />
              <ErrorMessage name="email" component="span" className="error" />
            </label>

            <label>
              Password
              <Field name="password" type="password" placeholder="••••••" />
              <ErrorMessage name="password" component="span" className="error" />
            </label>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting…" : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}