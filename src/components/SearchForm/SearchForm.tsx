import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FC } from "react";
import css from "./SearchForm.module.css";

interface SearchFormProps {
  onSubmit: (query: string) => void;
  initialQuery?: string;
}

const SearchForm: FC<SearchFormProps> = ({
  onSubmit = () => {},
  initialQuery = "",
}) => {
  const validationSchema = Yup.object({
    query: Yup.string()
      .min(2, "Too short!")
      .max(100, "Too long!")
      .required("Search query is required"),
    number: Yup.string()
      .matches(/^\+?\d{10,15}$/, "Invalid phone number")
      .required("Phone number is required"),
  });

  const initialValues = {
    query: initialQuery,
    number: "",
  };

  const onSearchSubmit = (
    values: { query: string; number: string },
    actions: any
  ) => {
    const trimmedQuery = values.query.trim();
    if (!trimmedQuery) {
      actions.setErrors({ query: "Search query cannot be empty" });
      return;
    }
    onSubmit(trimmedQuery);
    console.log("Phone number:", values.number);
    actions.setSubmitting(false);
  };

  return (
    <div className={css.searchForm}>
      <p className={css.feedbackText}>Зворотній зв'язок</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSearchSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={css.form}>
            <div className={css.labelWrapper}>
            <label htmlFor="query" className={css.label}>
              Ім'я
            </label>
            <Field
              className={css.field}
              type="text"
              name="query"
              placeholder="Введіть ім'я "
            />
            <ErrorMessage
              name="query"
              component="div"
              className={css.errorMessage}
              />
            </div>
            <div className={css.labelWrapper}>
            <label htmlFor="query" className={css.label}>
              Номер телефону
            </label>
            <Field
              className={css.field}
              type="tel"
              name="number"
              placeholder="Введіть номер телефону"
              required
            />
            <ErrorMessage
              name="number"
              component="div"
              className={css.errorMessage}
              />
            </div>
            <button
              type="submit"
              className={css.buttonForm}
              disabled={isSubmitting}
            >
              Запросити виклик
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SearchForm;
