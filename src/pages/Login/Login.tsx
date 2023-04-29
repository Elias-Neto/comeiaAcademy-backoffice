import * as Yup from "yup"
import { Formik, Form } from "formik"
import { useNavigate } from "react-router-dom"

import styles from "./Login.module.css"

import { Input } from "../../components/form/Input"
import { Button } from "../../components/form/Button"

interface LoginValues {
  email: string
  password: string
}

const initialValues: LoginValues = {
  email: "",
  password: "",
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email("E-mail inválido").required("Campo obrigatório"),
  password: Yup.string().min(6, "A senha deve ter pelo menos 6 caracteres").required("Campo obrigatório"),
})



const Login = () => {
  const navigate = useNavigate()

  const onSubmit = async (
    values: LoginValues
  ) => {
    try {
      navigate("/")
      console.log(values)
    } catch (error) {
      console.log(error)
      alert("Ocorreu um erro ao enviar o formulário")
    }
  }

  return (
    <div className={styles.formWrapper}>
      <header>
        <h1>BackOffice do Meu Site Pessoal</h1>
        <p>Faça seu login</p>
      </header>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <Input
              label="E-mail"
              name="email"
              errors={errors.email}
              touched={touched.email}
            />

            <Input
              label="Senha"
              name="password"
              type="password"
              errors={errors.password}
              touched={touched.password}
            />

            <Button title="Salvar" type="submit" />
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Login