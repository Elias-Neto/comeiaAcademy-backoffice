// Packages Imports
import * as Yup from "yup"
import { useNavigate, useLocation } from "react-router-dom"

// Styles Imports
import styles from "./RegisterProject.module.css"

// Components Imports
import { Form } from "../../../components/form/Form"
import { Input } from "../../../components/form/Input"
import { Button } from "../../../components/common/Button"
import { Header } from "../../../components/common/Header"

// Services Imports
import {
  Project,
  createOrUpdateProject,
} from "../../../services/ProjectService"

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
      navigate("/portfolio/listar")
      alert("Formulário enviado com sucesso!")
    } catch (error) {
      console.log(error)
      alert("Ocorreu um erro ao enviar o formulário")
    }
  }

  return (
    <div className={styles.container}>
      <Header
        title="Cadastrar Projeto"
        description="Formulário para cadastro de projeto"
      />

      <Form
        onSubmit={onSubmit}
        initialValues={project || initialValues}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <>
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
          </>
        )}
      </Form>
    </div>
  )
}

export default RegisterProject
