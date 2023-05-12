// Packages Imports
import { Field, ErrorMessage } from "formik"

// Styles Imports
import styles from "./Input.module.css"

interface InputProps {
  label: string
  name: string
  as?: string
  type?: string
  errors?: string
  touched?: boolean
  children?: React.ReactNode
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  as,
  type = "text",
  errors,
  touched,
  children
}) => {
  return (
    <fieldset className={styles.formGroup}>
      <label htmlFor={name} className={styles.label}>
        {label}:
      </label>
      <Field
        as={as}
        type={type}
        name={name}
        id={name}
        className={`${styles.input} ${touched && errors && styles.error}`}
      >
        {children}
      </Field>
      <ErrorMessage name={name} component="div" className={styles.errorMsg} />
    </fieldset>
  )
}

export default Input
