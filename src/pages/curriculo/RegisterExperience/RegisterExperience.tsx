import * as Yup from "yup"
import { useNavigate, useLocation } from "react-router-dom"

import { Form } from "../../../components/form/Form"
import { Input } from "../../../components/form/Input"
import { Button } from "../../../components/common/Button"
import { Select } from "../../../components/form/Select"
import { Textarea } from "../../../components/form/Textarea"

import {
  Experience,
  createOrUpdateExperience,
} from "../../../services/ServiceExperience"

const CadastrarExperiencia: React.FC = () => {
  const navigate = useNavigate()

  const location = useLocation()
  const experience = location.state as Experience

  const initialValues: Experience = {
    id: 0,
    title: "",
    description: "",
    type: "",
    startYear: 0,
    endYear: 0,
  }

  const validationSchema = Yup.object().shape({
    id: Yup.number(),
    title: Yup.string().required("Campo obrigatório"),
    description: Yup.string(),
    type: Yup.string().required("Campo obrigatório"),
    startYear: Yup.number().typeError("Um número é obrigatório"),
    endYear: Yup.number().typeError("Um número é obrigatório"),
  })

  const onSubmit = async (
    values: Experience,
    { resetForm }: { resetForm: () => void }
  ): Promise<void> => {
    try {
      await createOrUpdateExperience(values)
      resetForm()
      navigate("/curriculo/experiancia/listagem")
      alert("Formulário enviado com sucesso!")
    } catch (error) {
      console.log(error)
      alert("Ocorreu um erro ao enviar o formulário")
    }
  }

  return (
    <Form
      title="Cadastrar Experiência"
      description="Formulário para cadastro de experiência"
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

          <Select
            label="Tipo"
            name="type"
            options={[
              {
                value: "profissional",
                label: "Profissional",
              },
              {
                value: "academica",
                label: "Acadêmica",
              },
            ]}
            errors={errors.type}
            touched={touched.type}
          />

          <Textarea
            label="Descrição"
            name="description"
            errors={errors.description}
            touched={touched.description}
          />

          <Button title="Salvar" type="submit" />
        </>
      )}
    </Form>
  )
}

export default CadastrarExperiencia
