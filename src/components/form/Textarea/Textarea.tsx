import { Field, ErrorMessage } from "formik"

import styles from "./Textarea.module.css"

interface TextareaProps {
  label: string
  name: string
  errors?: string
  touched?: boolean
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  name,
  errors,
  touched,
}) => {
  return (
    <fieldset className={styles.formGroup}>
      <label htmlFor={name} className={styles.label}>
        {label}:
      </label>
      <Field
        as="textarea"
        name={name}
        id={name}
        rows={5}
        className={`${styles.input} ${touched && errors && styles.error}`}
      />
      <ErrorMessage name={name} component="div" className={styles.errorMsg} />
    </fieldset>
  )
}

export default Textarea
