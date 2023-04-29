import { Formik, FormikHelpers, FormikProps, FormikValues, Form as FormikForm } from "formik"
import * as Yup from "yup"

import styles from "./Form.module.css"

interface FormProps<T> {
  title: string
  isLogin?: boolean
  initialValues: T
  description: string
  enableRenitialize?: boolean
  validationSchema: Yup.ObjectSchema<Partial<T>>
  children: (forkmikProps: FormikProps<T>) => React.ReactNode
  onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => void | Promise<void>
}

const Form = <T extends FormikValues>({
  title,
  description,
  initialValues,
  validationSchema,
  onSubmit,
  children,
  isLogin = false,
  enableRenitialize = false
}: FormProps<T>) => {
  return (
    <div className={`${styles.formWrapper} ${isLogin && styles.login}`}>
      <header>
        <h1>{title}</h1>
        <p>{description}</p>
      </header>

      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
        enableReinitialize={enableRenitialize}
      >
        {(formikProps) => <FormikForm className={styles.form}>{children(formikProps)}</FormikForm>}
      </Formik>
    </div>
  )
}

export default Form
