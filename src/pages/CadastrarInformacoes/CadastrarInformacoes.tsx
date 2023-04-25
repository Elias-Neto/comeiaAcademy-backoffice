import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

import styles from "./CadastrarInformacoes.module.css"

interface FormValues {
  profilePic: string
  name: string
  office: string
  resume: string
}

const CadastrarInformacoes: React.FC = () => {
  const initialValues: FormValues = {
    profilePic: "",
    name: "",
    office: "",
    resume: "",
  }

  const validationSchema = Yup.object().shape({
    profilePic: Yup.string().required("Campo obrigatório"),
    name: Yup.string().required("Campo obrigatório"),
    office: Yup.string().required("Campo obrigatório"),
    resume: Yup.string().required("Campo obrigatório"),
  })

  const onSubmit = (
    values: FormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    // Lógica de envio para o backend
    console.log(values)
    resetForm()
    alert("Formulário enviado com sucesso!")
  }

  return (
    <div className={styles.formWrapper}>
      <header>
        <h1>Cadastrar Informações</h1>
        <p>Formulário para cadastro de informações</p>
      </header>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <fieldset className={styles.formGroup}>
              <label htmlFor="profilePic" className={styles.label}>
                Foto de perfil
              </label>
              <Field
                type="text"
                name="profilePic"
                id="profilePic"
                className={`${styles.input} ${
                  touched.profilePic && errors.profilePic && styles.error
                }`}
              />
              <ErrorMessage
                name="profilePic"
                component="div"
                className={styles.errorMsg}
              />
            </fieldset>

            <fieldset className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Nome
              </label>
              <Field
                type="text"
                name="name"
                id="name"
                className={`${styles.input} ${
                  touched.name && errors.name && styles.error
                }`}
              />
              <ErrorMessage
                name="name"
                component="div"
                className={styles.errorMsg}
              />
            </fieldset>

            <fieldset className={styles.formGroup}>
              <label htmlFor="office" className={styles.label}>
                Cargo
              </label>
              <Field
                type="text"
                name="office"
                id="office"
                className={`${styles.input} ${
                  touched.office && errors.office && styles.error
                }`}
              />
              <ErrorMessage
                name="office"
                component="div"
                className={styles.errorMsg}
              />
            </fieldset>

            <fieldset className={styles.formGroup}>
              <label htmlFor="resume" className={styles.label}>
                Resumo
              </label>
              <Field
                as="textarea"
                name="resume"
                id="resume"
                rows={5}
                className={`${styles.input} ${
                  touched.resume && errors.resume && styles.error
                }`}
              />
              <ErrorMessage
                name="resume"
                component="div"
                className={styles.errorMsg}
              />
            </fieldset>

            <button type="submit" className={styles.button}>
              Salvar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default CadastrarInformacoes
