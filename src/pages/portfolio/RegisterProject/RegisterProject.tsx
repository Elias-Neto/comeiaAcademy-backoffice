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
    description: "",
    demonstration: "",
    github: "",
    deploy: "",
  }

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Campo obrigatório"),
    demonstration: Yup.string().required("Campo obrigatório"),
    description: Yup.string().required("Campo obrigatório"),
    github: Yup.string().required("Campo obrigatório"),
    deploy: Yup.string()
  })

  const onSubmit = async (
    values: Project,
    { resetForm }: { resetForm: () => void }
  ): Promise<void> => {
    try {
      console.log(values)
      await createOrUpdateProject(values)
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
        <h1>Cadastrar Portfólio</h1>
        <p>Formulário para cadastro de portfólio</p>
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
              label="Demonstração"
              name="demonstration"
              errors={errors.demonstration}
              touched={touched.demonstration}
            />

            <Input
              label="Descrição"
              name="description"
              errors={errors.description}
              touched={touched.description}
            />

            <Input
              label="Github"
              name="github"
              errors={errors.github}
              touched={touched.github}
            />

            <Input
              label="Deploy"
              name="deploy"
              errors={errors.deploy}
              touched={touched.deploy}
            />

            <Button title="Salvar" type="submit" />
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default RegisterProject
