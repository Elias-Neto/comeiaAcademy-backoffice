// Packages Imports
import * as Yup from "yup"
import { useNavigate } from "react-router-dom"

// Styles Imports
import styles from "./Login.module.css"

// Components Imports
import { Form } from "../../components/form/Form"
import { Input } from "../../components/form/Input"
import { Button } from "../../components/common/Button"
import { Header } from "../../components/common/Header"

// Contexts Imports
import { useAuth } from "../../contexts/AuthContext"

// Services Imports
import { User as LoginData } from "../../services/AuthService"
import { login as loginService } from "../../services/AuthService"

const initialValues: LoginData = {
  email: "",
  password: "",
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email("E-mail inválido").required("Campo obrigatório"),
  password: Yup.string().min(6, "A senha deve ter pelo menos 6 caracteres").required("Campo obrigatório"),
})

const Login = () => {
  const navigate = useNavigate()
  const { login } = useAuth()

  const onSubmit = async (
    values: LoginData
  ): Promise<void> => {
    try {
      const user = await loginService(values)
      login(user)
      navigate("/")
    } catch (error) {
      console.log(error)
      alert("Erro ao fazer login")
    }
  }

  return (
    <div className={styles.container}>
      <Header
        title="BackOffice do Meu Site Pessoal"
        description="Faça seu login"
      />
      <Form
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <>
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

            <Button title="Entrar" type="submit" />
          </>
        )}
      </Form>
    </div>
  )
}

export default Login