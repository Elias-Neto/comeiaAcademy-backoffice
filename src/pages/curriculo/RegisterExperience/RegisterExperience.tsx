import * as Yup from "yup"
import { Formik, Form } from "formik"

import { Input } from "../../../components/form/Input"
import { Button } from "../../../components/form/Button"
import { Select } from "../../../components/form/Select"
import { Textarea } from "../../../components/form/Textarea"

import styles from "./RegisterExperience.module.css"

interface FormValues {
  title: string
  description: string
  type: string
  startYear: string
  endYear: string
}

const CadastrarExperiencia: React.FC = () => {
  const initialValues: FormValues = {
    title: "",
    description: "",
    type: "",
    startYear: "",
    endYear: "",
  }

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Campo obrigatório"),
    description: Yup.string().required("Campo obrigatório"),
    type: Yup.string().required("Campo obrigatório"),
    startYear: Yup.number()
      .required("Campo obrigatório")
      .typeError("Um número é obrigatório"),
    endYear: Yup.number()
      .required("Campo obrigatório")
      .typeError("Um número é obrigatório"),
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

            <Button title="Salvar" />
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default CadastrarExperiencia
