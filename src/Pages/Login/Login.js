import * as S from "./styles";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Hook para navegação de páginas

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !senha) {
      alert("Informe o email e a senha.");
      return;
    }

    try {
      // criaao do objeto 
      const payload = {
        email: "exemplo@gmail.com",
        senha: "1234",
      };

      // Converte o objeto JSON para string e aalva no localStorage (simulando cadastro)
      localStorage.setItem("usuario", JSON.stringify(payload));

      // Ler do localStorage
      const localStorageUsuario = localStorage.getItem("usuario");

      // verificaao do objeto - essa linha pergunta se o objeto é vazia, caso seja quero dizer que nao existe usuário na base.
      if (!localStorageUsuario) {
        setErro("Nenhum usuário encontrado.");
        return;
      }

      // essa linha converte string para JSON
      const usuario = JSON.parse(localStorageUsuario);

      // compara usuario logado com os ususários da base
      if (usuario.email === email && usuario.senha === senha) {
        alert("Login realizado com sucesso!");
        navigate('/home/');

      } else {
        setErro("Usuário ou senha inválido");
      }
    } catch (erro) {
      setErro(`Erro ao fazer login. Tente novamente mais tarde.,${erro}`);
    }
  };

  const handleRegiter = () =>{
    navigate('/register/');
    return;
  }

  return (
     <S.Container>
       <S.Content1>
        <S.H2>Bem-vindo de volta!</S.H2>
        <S.P>Insira sua informações para<br></br>acessar sua conta</S.P>
        
        <S.FormContainer>
          <S.Label>Email</S.Label>
          <S.Input type="text" placeholder="Insira seu email" value={email} onChange={(e) =>{setEmail(e.target.value); setErro({erro})}}/>

          <S.Label>Senha</S.Label>
          <S.Input type="password" placeholder="Insira sua senha" value={senha} onChange={(e) =>{setSenha(e.target.value); setErro({erro})}}/>
          
          <S.CheckFormContainer>
            <S.CheckInput type="checkbox" id="LembreMim"/>
            <S.Label htmlFor="LembreMim">Lembrar senha</S.Label>
          </S.CheckFormContainer>
          
          <S.Button onClick={handleLogin}>Entrar</S.Button>

          <S.FormRegisterButton>
            <S.LabelRegister>Você ainda não possui cadastro?</S.LabelRegister>
            <S.ButtonText onClick={handleRegiter}>Clique Aqui!</S.ButtonText>
          </S.FormRegisterButton>

        </S.FormContainer>
        
       </S.Content1>
       <S.Content2>
        
        <img src="/Assets/ImgLogin.png" alt="logo" style={{width:'480px'}}/>
       </S.Content2>
       
     </S.Container>
  );
}

export default Login;
