import * as S from "./styles";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm();
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const email = data.email.toLowerCase(); // Força minúsculo
    const { senha } = data;

    if (!email || !senha) {
      alert("Informe o email e a senha.");
      return;
    }

    try {
      const UsuarioAdm = {
        nome: "Adm",
        email: "adm@gmail.com",
        senha: "Adm1234",
      };

      localStorage.setItem("Adm", JSON.stringify(UsuarioAdm));

      const Adm = JSON.parse(localStorage.getItem("Adm"));
      const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

      const usuario = usuarios.find(
        (user) => user.email === email && user.senha === senha
      );

      if (Adm.email === email && Adm.senha === senha) {
        localStorage.setItem("emailLogado", email);
        alert("Bem-Vindo Adm!");
        navigate("/homeAdm/");
        return;
      }

      if (!usuario) {
        setErro("Usuário ou Senha inválidos.");
        return;
      }

      localStorage.setItem("emailLogado", email);
      alert("Login realizado com sucesso!");
      navigate("/homeUser/");
    } catch (err) {
      console.error(err);
      setErro("Erro ao fazer login. Tente novamente mais tarde.");
    }
  };

  const handleRegister = () => {
    navigate("/register/");
  };

  return (
    <S.Container>
      <S.Content1>
        <S.H2>Bem-vindo de volta!</S.H2>
        <S.P>
          Insira sua informações para
          <br />
          acessar sua conta
        </S.P>

        <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
          <S.Label>Email</S.Label>
          <S.Input
            type="text"
            placeholder="Insira seu email"
            {...register("email", {
              required: "Email é obrigatório.",
              onChange: () => {
                clearErrors("email");
                setErro("");
              },
            })}
          />
          {errors.email && (
            <p style={{ color: "red", marginTop: "5px" }}>
              {errors.email.message}
            </p>
          )}

          <S.Label>Senha</S.Label>
          <S.Input
            type="password"
            placeholder="Insira sua senha"
            {...register("senha", {
              required: "Senha é obrigatória.",
              onChange: () => {
                clearErrors("senha");
                setErro("");
              },
            })}
          />
          {errors.senha && (
            <p style={{ color: "red", marginTop: "5px" }}>
              {errors.senha.message}
            </p>
          )}

          {erro && (
            <p style={{ color: "red", marginTop: "10px" }}>{erro}</p>
          )}

          <S.CheckFormContainer>
            <S.CheckInput type="checkbox" id="LembreMim" />
            <S.Label htmlFor="LembreMim">Lembrar senha</S.Label>
          </S.CheckFormContainer>

          <S.Button type="submit">Entrar</S.Button>

          <S.FormRegisterButton>
            <S.LabelRegister>Você ainda não possui cadastro?</S.LabelRegister>
            <S.ButtonText onClick={handleRegister}>Clique Aqui!</S.ButtonText>
          </S.FormRegisterButton>
        </S.FormContainer>
      </S.Content1>
      <S.Content2>
        <img
          src="/Assets/ImgLogin.png"
          alt="logo"
          style={{ width: "480px" }}
        />
      </S.Content2>
    </S.Container>
  );
};

export default Login;