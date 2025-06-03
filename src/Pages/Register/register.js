import React, { useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!nome || !email || !senha) {
      alert("Preencha todos os campos.");
      return;
    }

    try {
      // Pega usuários já salvos (ou lista vazia se nenhum)
      const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

      // Verifica se já existe um usuário com o mesmo email
      const existe = usuarios.some((user) => user.email === email);
      if (existe) {
        alert("Este email já está cadastrado.");
        return;
      }

      // Cria novo usuário com os valores do formulário
      const novoUsuario = {
        nome,
        email,
        senha,
      };

      // Adiciona novo usuário à lista e salva no localStorage
      usuarios.push(novoUsuario);
      localStorage.setItem("usuarios", JSON.stringify(usuarios));

      alert("Cadastro realizado com sucesso!");
      navigate("/login");
    } catch (err) {
      console.error(err);
      setErro("Erro ao salvar usuário.");
    }
  };


    return (
         <S.Container>
           <S.Content1>
            <S.H2>Vamos Começar</S.H2> 
            
            <S.FormContainer>
              <S.Label>Name</S.Label>
              <S.Input 
                type="text" 
                placeholder="Digite seu nome" 
                value={nome} 
                onChange={(e) => {setNome(e.target.value); setErro({erro})}}
              />
    
              <S.Label>Email</S.Label>
              <S.Input
                type="text" 
                placeholder="Digite seu email" 
                value={email} 
                onChange={(e) => {setEmail(e.target.value); setErro({erro})}}
              />

              <S.Label>Senha</S.Label>
              <S.Input 
                type="password" 
                placeholder="Digite sua senha" 
                value={senha} 
                onChange={(e) => {setSenha(e.target.value); setErro({erro})}}
              />
              
              <S.Button onClick={handleRegister}>Cadastre-se</S.Button>
    
            </S.FormContainer>
            
           </S.Content1>
           <S.Content2>
            
            <img src="/Assets/ImgRegis.png" alt="logo" style={{width:'580px'}}/>
           </S.Content2>
           
         </S.Container>
    );
}

export default Register;