// import { Formik, Form } from "formik"
// import * as Yup from "yup"

// import styles from "./MyForm.module.css"

// interface FormValues {}

// interface FormProps {
//   title: string
//   description: string
//   initialValues: Object
//   validationSchema: Yup.Schema<any>
//   onSubmit: (
//     values: FormValues,
//     { resetForm }: { resetForm: () => void }
//   ) => void
//   children: React.ReactNode
// }

// const MyForm: React.FC<FormProps> = ({
//   title,
//   description,
//   initialValues,
//   validationSchema,
//   onSubmit,
//   children,
// }) => {
//   return (
//     <div className={styles.formWrapper}>
//       <header>
//         <h1>{title}</h1>
//         <p>{description}</p>
//       </header>

//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={onSubmit}
//       >
//         {(formikProps) => <Form className={styles.form}>{children}</Form>}
//       </Formik>
//     </div>
//   )
// }

// export default MyForm
