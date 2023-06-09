// Packages Imports
import * as Yup from "yup"
import { useNavigate, useLocation } from "react-router-dom"

// Styles Imports
import styles from "./RegisterExperience.module.css"

// Components Imports
import { Form } from "../../../components/form/Form"
import { Input } from "../../../components/form/Input"
import { Header } from "../../../components/common/Header"
import { Button } from "../../../components/common/Button"

// Services Imports
import {
  Experience,
  createOrUpdateExperience,
} from "../../../services/ExperienceService"

const CadastrarExperiencia: React.FC = () => {
  const navigate = useNavigate()

  const location = useLocation()
  const experience = location.state as Experience

  const initialValues: Experience = {
    id: 0,
    title: "",
    description: "",
    type: "",
    startYear: "",
    endYear: "",
  }

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Campo obrigatório"),
    description: Yup.string(),
    type: Yup.string().required("Campo obrigatório"),
    startYear: Yup.string(),
    endYear: Yup.string(),
  })

  const onSubmit = async (
    values: Experience,
    { resetForm }: { resetForm: () => void }
  ): Promise<void> => {
    try {
      await createOrUpdateExperience(values)
      resetForm()
      navigate("/curriculo/experiencia/listar")
      alert("Formulário enviado com sucesso!")
      console.log(values)
    } catch (error) {
      console.log(error)
      alert("Ocorreu um erro ao enviar o formulário")
    }
  }

  return (
    <div className={styles.container}>
      <Header
        title={!experience ? "Cadastrar Experiência" : "Atualizar Experiência"}
        description={!experience ? "Formulário para cadastrar experiência" : "Formulário para atualizar experiência"}
      />

      <Form
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        initialValues={experience || initialValues}
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
              label="Ano Início"
              name="startYear"
              errors={errors.startYear}
              touched={touched.startYear}
            />

            <Input
              label="Ano de Fim"
              name="endYear"
              errors={errors.endYear}
              touched={touched.endYear}
            />

            <Input
              as="select"
              label="Tipo"
              name="type"
              errors={errors.type}
              touched={touched.type}
            >
              <option value="">Selecione uma opção</option>
              <option value="profissional">Profissional</option>
              <option value="academica">Acadêmica</option>
            </Input>

            <Input
              as="textarea"
              label="Descrição"
              name="description"
              errors={errors.description}
              touched={touched.description}
            />

            <Button title="Salvar" type="submit" />
          </>
        )}
      </Form>

    </div>
  )
}

export default CadastrarExperiencia
