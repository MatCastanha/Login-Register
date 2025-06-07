import { useEffect, useState } from "react";
import * as S from "./style";

const HomeAdm = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [editandoId, setEditandoId] = useState(null);
  const [usuarioEditado, setUsuarioEditado] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  const Adm = JSON.parse(localStorage.getItem("Adm")) || [];

  useEffect(() => {
    const dados = localStorage.getItem("usuarios");
    if (dados) {
      try {
        setUsuarios(JSON.parse(dados));
      } catch (e) {
        console.error("Erro ao carregar localStorage:", e);
      }
    }
  }, []);

  const handleEditar = (usuario, index) => {
    setEditandoId(index);
    setUsuarioEditado({
      nome: usuario.nome,
      email: usuario.email,
      senha: usuario.senha,
    });
  };

  const handleSalvar = (index) => {
    const atualizados = [...usuarios];
    atualizados[index] = { ...atualizados[index], ...usuarioEditado };
    setUsuarios(atualizados);
    localStorage.setItem("usuarios", JSON.stringify(atualizados));
    setEditandoId(null);
  };

  const handleCancelar = () => {
    setEditandoId(null);
    setUsuarioEditado({ nome: "", email: "", senha: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuarioEditado({ ...usuarioEditado, [name]: value });
  };

  const handleSair = () => {
    window.location.href = "/login";
    localStorage.removeItem("emailLogado");
  }

  return (
    <S.Container>
      <S.Header>
        <S.ContentDiv1>
          <S.P>Ola, Seja Bem-Vindo <S.Nome>{Adm.nome}</S.Nome></S.P>
          <S.Button onClick={handleSair}>Sair</S.Button>  
        </S.ContentDiv1>
      </S.Header>
      <S.ContentDiv2>
        <S.H1>Tela do Administrador<br /></S.H1>
        <S.P2>Aqui Você pode Verificar todas as informações dos usuários cadastrados</S.P2>
      </S.ContentDiv2>

      <S.H2>Resultados</S.H2>

      <S.ContentMain> 
        <S.ContentDiv3>
          <S.TableWrapper>
            <S.Table>
              <S.THead>
                <S.TR>
                  <S.TH>Nome</S.TH>
                  <S.TH>Email</S.TH>
                  <S.TH>Senha</S.TH>
                </S.TR>
              </S.THead>
              <S.TBody>
                {usuarios.map((usuario, index) => (
                  <S.TR key={index}>
                    <S.TD>
                      {editandoId === index ? (
                        <input
                          type="text"
                          name="nome"
                          value={usuarioEditado.nome}
                          onChange={handleChange}
                        />
                      ) : (
                        usuario.nome
                      )}
                    </S.TD>
                    <S.TD>
                      {editandoId === index ? (
                        <input
                          type="email"
                          name="email"
                          value={usuarioEditado.email}
                          onChange={handleChange}
                        />
                      ) : (
                        usuario.email
                      )}
                    </S.TD>
                    <S.TD>
                      {editandoId === index ? (
                        <input
                          type="text"
                          name="senha"
                          value={usuarioEditado.senha}
                          onChange={handleChange}
                        />
                      ) : (
                        usuario.senha
                      )}
                    </S.TD>
                    <S.TD>
                      {editandoId === index ? (
                        <>
                          <S.EditButton onClick={() => handleSalvar(index)}>
                            Salvar
                          </S.EditButton>
                          <S.CancelButton onClick={handleCancelar}>
                            Cancelar
                          </S.CancelButton>
                        </>
                      ) : (
                        <S.EditButton onClick={() => handleEditar(usuario, index)}>
                          Editar
                        </S.EditButton>
                      )}
                    </S.TD>
                  </S.TR>
                ))}
              </S.TBody>
            </S.Table>
          </S.TableWrapper>
        </S.ContentDiv3>
      </S.ContentMain>
    </S.Container>
  );
};

export default HomeAdm;