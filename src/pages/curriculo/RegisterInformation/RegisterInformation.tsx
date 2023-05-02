import * as Yup from "yup"
import deepEqual from "deep-equal"
import { useEffect, useState } from "react"

import styles from "./RegisterInformation.module.css"

import { Card } from "./Card"
import { Form } from "../../../components/form/Form"
import { Input } from "../../../components/form/Input"
import { Header } from "../../../components/common/Header"
import { Button } from "../../../components/common/Button"
import { Textarea } from "../../../components/form/Textarea"

import {
  Information,
  updateInformation,
  getInformation,
} from "../../../services/InformationService"

const CadastrarInformacoes: React.FC = () => {
  const initialValues: Information = {
    id: 1,
    profilePic: "",
    name: "",
    office: "",
    resume: "",
  }

  const [information, setInformation] = useState<Information>(initialValues as Information)

  const validationSchema = Yup.object().shape({
    id: Yup.number(),
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
    <div className={styles.container}>
      <div className={styles.leftWrapper}>
        <Header
          title="Cadastrar Informações"
          description="Formulário para cadastro de informações"
        />
        <Form
          initialValues={information}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          enableRenitialize
        >
          {({ errors, touched }) => (
            <>
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
            </>
          )}
        </Form>

      </div>

      {!deepEqual(information, initialValues) && (
        <div className={styles.cardWrapper}>
          <Card information={information} />
          <Button title="Deletar" isRed onClick={handleDelete} />
        </div>
      )}
    </div>
  )
}

export default CadastrarInformacoes
