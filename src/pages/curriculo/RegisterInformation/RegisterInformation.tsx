import { useEffect, useState } from "react"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import deepEqual from "deep-equal"

import styles from "./RegisterInformation.module.css"

import { Card } from "./Card"
import { Input } from "../../../components/form/Input"
import { Button } from "../../../components/form/Button"
import { Textarea } from "../../../components/form/Textarea"
// import { MyForm } from "../../components/form/MyForm"

import {
  Information,
  updateInformation,
  getInformation,
} from "../../../services/ServiceInformation"
const CadastrarInformacoes: React.FC = () => {
  const [information, setInformation] = useState<Information>({} as Information)

  const initialValues: Information = {
    id: 1,
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

  const onSubmit = async (
    values: Information,
    { resetForm }: { resetForm: () => void }
  ): Promise<void> => {
    try {
      await updateInformation(values)
      setInformation(values)
      console.log(values)
      resetForm()
      alert("Formulário enviado com sucesso!")
    } catch (error) {
      console.log("Erro ao enviar o formulário: ", error)
      alert("Ocorreu um erro ao enviar o formulário. Tente novamente.")
    }
  }

  const fetchInformation = async () => {
    try {
      const values = await getInformation()
      setInformation(values)
      console.log(information)
    } catch (error) {
      console.log("Erro ao buscar informações: ", error)
    }
  }

  const handleDelete = async () => {
    try {
      await updateInformation(initialValues)
      setInformation(initialValues)
      alert("Informações deletado com sucesso!")
    } catch (error) {
      console.log("Erro ao deletar informações: ", error)
      alert("Ocorreu um erro ao deletar informações. Tente novamente.")
    }
  }

  useEffect(() => {
    fetchInformation()
  }, [])

  return (
    // <MyForm
    //   title="Cadastrar Informações"
    //   description="Formulário para cadastro de informações"
    //   initialValues={initialValues}
    //   validationSchema={validationSchema}
    //   onSubmit={onSubmit}
    // ></MyForm>
    <>
      <div className={styles.formWrapper}>
        <header>
          <h1>Cadastrar Informações</h1>
          <p>Formulário para cadastro de informações</p>
        </header>

        <Formik
          initialValues={information}
          validationSchema={validationSchema}
          enableReinitialize={true}
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

              <Button title="Salvar" type="submit" />
            </Form>
          )}
        </Formik>
      </div>

      {!deepEqual(information, initialValues) && (
        <div className={styles.cardWrapper}>
          <Card information={information} />
          <Button title="Deletar" isRed onClick={handleDelete} />
        </div>
      )}
    </>
  )
}

export default CadastrarInformacoes
