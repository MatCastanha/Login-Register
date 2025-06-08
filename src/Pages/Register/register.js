import React, { useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm({
    defaultValues: {
      nome: "",
      email: "",
      senha: "",
      telefone: "",
    },
  });

  const [mostrarSenha, setMostrarSenha] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { nome, email, senha, telefone } = data;

    // Validação extra de email (apesar do RHF já validar)
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValido) {
      setError("email", { type: "manual", message: "Digite um email válido." });
      return;
    }

    try {
      const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

      const existe = usuarios.some((user) => user.email === email.toLowerCase());
      if (existe) {
        setError("email", { type: "manual", message: "Este email já está cadastrado." });
        return;
      }

      const novoUsuario = { 
        nome, 
        email: email.toLowerCase(), 
        senha, 
        telefone 
      };

      usuarios.push(novoUsuario);
      localStorage.setItem("usuarios", JSON.stringify(usuarios));

      alert("Cadastro realizado com sucesso!");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("Erro ao salvar usuário.");
    }
  };

  return (
    <S.Container>
      <S.Content1>
        <S.H2>Vamos Começar</S.H2>

        <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
          <S.Label>Nome</S.Label>
          <S.Input
            type="text"
            placeholder="Digite seu nome"
            {...register("nome", { required: "Nome é obrigatório." })}
            onChange={() => clearErrors("nome")}
          />
          {errors.nome && <p style={{ color: "red" }}>{errors.nome.message}</p>}

          <S.Label>Telefone</S.Label>
          <Controller
            name="telefone"
            control={control}
            rules={{ required: "Telefone é obrigatório." }}
            render={({ field }) => (
              <S.InputMasks
                {...field}
                mask="+__ (__) _____-____"
                replacement={{ _: /\d/ }}
                placeholder="Digite seu telefone"
                onChange={(e) => {
                  field.onChange(e);
                  clearErrors("telefone");
                }}
              />
            )}
          />
          {errors.telefone && <p style={{ color: "red" }}>{errors.telefone.message}</p>}

          <S.Label>Email</S.Label>
          <S.Input
            type="text"
            placeholder="Digite seu email"
            {...register("email", {
              required: "Email é obrigatório.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Digite um email válido.",
              },
            })}
            onChange={() => clearErrors("email")}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

          <S.Label>Senha</S.Label>
          <S.Input
            type={mostrarSenha ? "text" : "password"}
            placeholder="Digite sua senha"
            {...register("senha", {
              required: "Senha é obrigatória.",
              minLength: { value: 7, message: "Senha deve ter ao menos 7 caracteres." },
            })}
            onChange={() => clearErrors("senha")}
          />
          {errors.senha && <p style={{ color: "red" }}>{errors.senha.message}</p>}

          <S.ToggleSenha onClick={() => setMostrarSenha(!mostrarSenha)}>
            {mostrarSenha ? "Ocultar Senha" : "Mostrar Senha"}
          </S.ToggleSenha>

          <S.Button type="submit">
            Cadastre-se
          </S.Button>
        </S.FormContainer>
      </S.Content1>
      <S.Content2>
        <img src="/Assets/ImgRegis.png" alt="logo" style={{ width: "580px" }} />
      </S.Content2>
    </S.Container>
  );
};

export default Register;