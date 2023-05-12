// Packages Imports
import * as Yup from "yup"
import { Formik, FormikHelpers, FormikProps, FormikValues, Form as FormikForm } from "formik"

// Styles Imports
import styles from "./Form.module.css"

interface FormProps<T> {
  initialValues: T
  enableRenitialize?: boolean
  validationSchema: Yup.ObjectSchema<Omit<Partial<T>, "id">>
  children: (forkmikProps: FormikProps<T>) => React.ReactNode
  onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => void | Promise<void>
}

const Form = <T extends FormikValues>({
  initialValues,
  validationSchema,
  onSubmit,
  children,
  enableRenitialize = false
}: FormProps<T>) => {
  return (
    <div className={styles.formWrapper}>
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
