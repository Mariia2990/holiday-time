import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FC } from "react";
import css from "./SearchForm.module.css";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

interface Contact {
  query: string;
  number: string;
}

interface SearchFormProps {
  onSubmit: (query: string, number: string) => void; 
  initialQuery?: string;
  contacts?: Contact[]; 
}

const SearchForm: FC<SearchFormProps> = ({
  onSubmit = () => {},
  initialQuery = "",
  contacts = [], 
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

  const { t } = useTranslation();

const onSearchSubmit = (
  values: { query: string; number: string },
  actions: any
) => {
  const trimmedQuery = values.query.trim();
  const trimmedNumber = values.number.trim();

  if (!trimmedQuery) {
    actions.setErrors({ query: "Search query cannot be empty" });
    return;
  }

  const isDuplicate = contacts.some(
    (contact) =>
      contact.query.toLowerCase() === trimmedQuery.toLowerCase() ||
      contact.number === trimmedNumber
  );

  if (isDuplicate) {
    actions.setErrors({
      query: "Contact with this name or number already exists",
      number: "Contact with this name or number already exists",
    });
    return;
  }

  onSubmit(trimmedQuery, trimmedNumber);
  toast.success("Виклик успішно запрошено!");
  actions.setSubmitting(false);
  actions.resetForm();
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
                {t("name")}
              </label>
              <Field
                className={css.field}
                type="text"
                name="query"
                placeholder={t("placeholderName")}
              />
              <ErrorMessage
                name="query"
                component="div"
                className={css.errorMessage}
              />
            </div>
            <div className={css.labelWrapper}>
              <label htmlFor="number" className={css.label}>
                {t("tel")}
              </label>
              <Field
                className={css.field}
                type="tel"
                name="number"
                placeholder={t("placeholderTel")}
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
              {t("buttonSubmit")}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SearchForm;
