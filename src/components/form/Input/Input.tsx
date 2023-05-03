import { Field, ErrorMessage } from "formik"

import styles from "./Input.module.css"

interface InputProps {
  label: string
  name: string
  type?: string
  errors?: string
  touched?: boolean
  value?: string
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type = "text",
  errors,
  touched,
  value
}) => {
  return (
    <fieldset className={styles.formGroup}>
      <label htmlFor={name} className={styles.label}>
        {label}:
      </label>
      <Field
        type={type}
        name={name}
        id={name}
        className={`${styles.input} ${touched && errors && styles.error}`}
        value={value}
      />
      <ErrorMessage name={name} component="div" className={styles.errorMsg} />
    </fieldset>
  )
}

export default Input
