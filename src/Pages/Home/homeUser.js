import * as S from "./styleUser";
import { useEffect, useState } from "react";

const HomeUser = () => {
    
  const [usuario, setUsuario] = useState(null);
  const [editando, setEditando] = useState(false);
  const [dadosEditados, setDadosEditados] = useState({
    nome: "",
    email: "",
    senha: ""
  });

  useEffect(() => {
    const emailLogado = localStorage.getItem("emailLogado");
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioLogado = usuarios.find(u => u.email === emailLogado);

    if (usuarioLogado) {
      setUsuario(usuarioLogado);
      setDadosEditados({ ...usuarioLogado });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDadosEditados(prev => ({ ...prev, [name]: value }));
  };

  const handleSalvar = () => {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const atualizados = usuarios.map(u => {
      if (u.email === usuario.email) {
        return { ...dadosEditados };
      }
      return u;
    });

    localStorage.setItem("usuarios", JSON.stringify(atualizados));
    localStorage.setItem("emailLogado", dadosEditados.email); // atualiza caso o e-mail tenha mudado
    setUsuario(dadosEditados);
    setEditando(false);
  };

  const handleCancelar = () => {
    setDadosEditados({ ...usuario });
    setEditando(false);
  };

  const handleSair = () => {
    window.location.href = "/login";
    localStorage.removeItem("emailLogado");
  }

  if (!usuario) return <p>ususario Não Encontrado</p>;

  return (
    <S.Container>
      <S.Header>
        <S.ContentDiv1>
          <S.P>Olá, Sejá Bem-Vindo <S.Nome>{usuario.nome}</S.Nome></S.P>
          <S.Button onClick={(handleSair)}>Sair</S.Button>
        </S.ContentDiv1>
      </S.Header>

      <S.ContentDiv2>
        <S.H1>Meus Dados</S.H1>
        <S.P2>Edite suas informações abaixo</S.P2>
      </S.ContentDiv2>

      <S.ContentMain>
        <S.ContentDiv3>
          <S.TableWrapper>
            <S.Table>
              <S.THead>
                <S.TR>
                  <S.TH>Nome</S.TH>
                  <S.TH>Email</S.TH>
                  <S.TH>Senha</S.TH>
                  <S.TH>Ações</S.TH>
                </S.TR>
              </S.THead>
              <S.TBody>
                <S.TR>
                  {editando ? (
                    <>
                      <S.TD><input name="nome" value={dadosEditados.nome} onChange={handleChange} /></S.TD>
                      <S.TD><input name="email" value={dadosEditados.email} onChange={handleChange} /></S.TD>
                      <S.TD><input name="senha" value={dadosEditados.senha} onChange={handleChange} /></S.TD>
                      <S.TD>
                        <S.EditButton onClick={handleSalvar}>Salvar</S.EditButton>
                        <S.CancelButton onClick={handleCancelar}>Cancelar</S.CancelButton>
                      </S.TD>
                    </>
                  ) : (
                    <>
                      <S.TD>{usuario.nome}</S.TD>
                      <S.TD>{usuario.email}</S.TD>
                      <S.TD>{usuario.senha}</S.TD>
                      <S.TD><S.EditButton onClick={() => setEditando(true)}>Editar</S.EditButton></S.TD>
                    </>
                  )}
                </S.TR>
              </S.TBody>
            </S.Table>
          </S.TableWrapper>
        </S.ContentDiv3>
      </S.ContentMain>
    </S.Container>
  );
};

export default HomeUser;