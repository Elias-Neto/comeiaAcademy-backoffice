import { Formik, Form } from "formik"
import * as Yup from "yup"

import styles from "./CadastrarInformacoes.module.css"

import { Input } from "../../components/form/Input"
import { Textarea } from "../../components/form/Textarea"
import { Button } from "../../components/form/Button"
// import { MyForm } from "../../components/form/MyForm"

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
  ): void => {
    // Lógica de envio para o backend
    console.log(values)
    resetForm()
    alert("Formulário enviado com sucesso!")
  }

  return (
    // <MyForm
    //   title="Cadastrar Informações"
    //   description="Formulário para cadastro de informações"
    //   initialValues={initialValues}
    //   validationSchema={validationSchema}
    //   onSubmit={onSubmit}
    // ></MyForm>
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
            <Input
              label="Foto de Perfil"
              name="profilePic"
              errors={errors.profilePic}
              touched={touched.profilePic}
            />

            <Input
              label="Nome"
              name="name"
              errors={errors.name}
              touched={touched.name}
            />

            <Input
              label="Cargo"
              name="office"
              errors={errors.office}
              touched={touched.office}
            />

            <Textarea
              label="Resumo"
              name="resume"
              errors={errors.resume}
              touched={touched.resume}
            />

            <Button title="Salvar" />
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default CadastrarInformacoes
