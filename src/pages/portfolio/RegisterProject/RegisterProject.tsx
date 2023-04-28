import * as Yup from "yup"
import { Formik, Form } from "formik"
import { useNavigate, useLocation } from "react-router-dom"

import styles from "./RegisterProject.module.css"

import { Input } from "../../../components/form/Input"
import { Button } from "../../../components/form/Button"

import {
  Project,
  createOrUpdateProject,
} from "../../../services/ServiceProject"

const RegisterProject: React.FC = () => {
  const navigate = useNavigate()

  const location = useLocation()
  const project = location.state as Project

  const initialValues: Project = {
    id: 0,
    title: "",
    link: "",
    image: "",
  }

  const validationSchema = Yup.object().shape({
    link: Yup.string().required("Campo obrigatório"),
    image: Yup.string().required("Campo obrigatório"),
    title: Yup.string().required("Campo obrigatório"),
  })

  const onSubmit = async (
    values: Project,
    { resetForm }: { resetForm: () => void }
  ): Promise<void> => {
    try {
      await createOrUpdateProject(values)
      console.log(values)
      resetForm()
      navigate("/portfolio/listagem")
      alert("Formulário enviado com sucesso!")
    } catch (error) {
      console.log(error)
      alert("Ocorreu um erro ao enviar o formulário")
    }
  }

  return (
    <div className={styles.formWrapper}>
      <header>
        <h1>Cadastrar Experiência</h1>
        <p>Formulário para cadastro de experiência</p>
      </header>

      <Formik
        initialValues={project || initialValues}
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

            <Button title="Salvar" type="submit" />
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default RegisterProject
