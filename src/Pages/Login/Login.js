import * as S from "./styles";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      
      const UsuarioAdm = {
        nome:"Adm",
        email:"adm@gmail.com",
        senha:"Adm1234",
      };

      localStorage.setItem("Adm", JSON.stringify(UsuarioAdm));
      localStorage.setItem("emailLogado", email);


      // Busca todos os usuários cadastrados
      const Adm = JSON.parse(localStorage.getItem("Adm"));
      const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

      // Procura o usuário com email e senha correspondentes
      const usuario = usuarios.find(
        (user) => user.email === email && user.senha === senha
      );

      if (Adm.email === email && Adm.senha === senha) {
        alert("Bem-Vindo Adm!");
        navigate('/homeAdm/');
      }
      
      // verificaao do objeto - essa linha pergunta se o objeto é vazia, caso seja quero dizer que nao existe usuário na base.
      if (!usuario) {
        setErro("Usuario ou Senha Invalidaos.");
        return;
      }

      // compara usuario logado com os ususários da base

      if (usuario) {
        alert("Login realizado com sucesso!"); 
        navigate('/homeUser/');
      }

    } catch (err) {
      console.error(err);
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
          <S.Input
           type="text"
           placeholder="Insira seu email" 
           value={email}
           onChange={(e) =>{
            setEmail(e.target.value); 
            setErro("");
            }}
          />

          <S.Label>Senha</S.Label>
          <S.Input
           type="password"
           placeholder="Insira sua senha"
           value={senha}
            onChange={(e) =>{
              setSenha(e.target.value);
              setErro("");
            }}
          />

          {erro && (
            <p style={{ color: "red", marginTop: "10px" }}>{erro}</p>
          )}
          
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
  