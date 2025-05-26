import * as S from "./styles";

const Login = () => {
  return (
     <S.Container>
       <S.Content1>
        <S.H2>Bem-vindo de volta!</S.H2>
        <S.P>Insira sua informações para<br></br>acessar sua conta</S.P>
        
        <S.FormContainer>
          <S.Label>Email</S.Label>
          <S.Input type="text" placeholder="Insira seu email"/>
          
          <S.Label>Senha</S.Label>
          <S.Input type="password" placeholder="Insira sua senha"/>
          
          <S.CheckFormContainer>
            <S.CheckInput type="checkbox" id="LembreMim"/>
            <S.Label htmlFor="LembreMim">Lembrar senha</S.Label>
          </S.CheckFormContainer>
          
          <S.Button>Entrar</S.Button>
        </S.FormContainer> 
        
       </S.Content1>

       <S.Content2>
        
        <img src="/Assets/ImgLogin.png" alt="logo" style={{width:'480px'}}/>

       </S.Content2>
     </S.Container>
  );
}

export default Login;
