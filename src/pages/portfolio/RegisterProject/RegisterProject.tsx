import * as Yup from "yup"
import { Formik, Form } from "formik"

import { Input } from "../../../components/form/Input"
import { Button } from "../../../components/form/Button"

import styles from "./RegisterProject.module.css"

interface FormValues {
  title: string
  link: string
  image: string
}

const RegisterProject: React.FC = () => {
  const initialValues: FormValues = {
    title: "",
    link: "",
    image: "",
  }

  const validationSchema = Yup.object().shape({
    link: Yup.string().required("Campo obrigatório"),
    image: Yup.string().required("Campo obrigatório"),
    title: Yup.string().required("Campo obrigatório"),
  })

  const onSubmit = (
    values: FormValues,
    { resetForm }: { resetForm: () => void }
  ): void => {
    // Lógica de envio para o backend
    console.log(values)
    resetForm()
    alert("Formulário enviado com sucesso!")
  }

  return (
    <div className={styles.formWrapper}>
      <header>
        <h1>Cadastrar Experiência</h1>
        <p>Formulário para cadastro de experiência</p>
      </header>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <Input
              label="Título"
              name="title"
              errors={errors.title}
              touched={touched.title}
            />

            <Input
              label="Imagem"
              name="image"
              errors={errors.image}
              touched={touched.image}
            />

            <Input
              label="Link"
              name="link"
              errors={errors.link}
              touched={touched.link}
            />

            <Button title="Salvar" />
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default RegisterProject
