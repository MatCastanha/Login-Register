import { useEffect, useState } from "react";
import * as S from "./style";
import { useForm, Controller } from "react-hook-form";

const HomeAdm = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [editandoId, setEditandoId] = useState(null);

  const Adm = JSON.parse(localStorage.getItem("Adm")) || {};

  // Configuro useForm para validar a cada mudança e controlar o isValid
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      nome: "",
      email: "",
      senha: "",
      telefone: "",
    },
  });

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

  // Quando começa a editar, preenche o formulário RHF com dados do usuário
  const handleEditar = (usuario, index) => {
    setEditandoId(index);
    reset({
      nome: usuario.nome,
      email: usuario.email,
      senha: usuario.senha,
      telefone: usuario.telefone,
    });
  };

  // Salvar dados do formulário validado
  const onSubmit = (data) => {
    // Já validado pelo RHF, só converto email para minúsculo antes de salvar
    const atualizados = [...usuarios];
    atualizados[editandoId] = {
      ...atualizados[editandoId],
      nome: data.nome,
      email: data.email.toLowerCase(),
      senha: data.senha,
      telefone: data.telefone,
    };

    setUsuarios(atualizados);
    localStorage.setItem("usuarios", JSON.stringify(atualizados));
    setEditandoId(null);
  };

  const handleCancelar = () => {
    setEditandoId(null);
  };

  const handleSair = () => {
    localStorage.removeItem("emailLogado");
    window.location.href = "/login";
  };

  return (
    <S.Container>
      <S.Header>
        <S.ContentDiv1>
          <S.P>
            Ola, Seja Bem-Vindo <S.Nome>{Adm.nome}</S.Nome>
          </S.P>
          <S.Button onClick={handleSair}>Sair</S.Button>
        </S.ContentDiv1>
      </S.Header>
      <S.ContentDiv2>
        <S.H1>
          Tela do Administrador
          <br />
        </S.H1>
        <S.P2>
          Aqui Você pode Verificar todas as informações dos usuários cadastrados
        </S.P2>
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
                  <S.TH>Telefone</S.TH>
                  <S.TH>Ações</S.TH>
                </S.TR>
              </S.THead>
              <S.TBody>
                {usuarios.map((usuario, index) => (
                  <S.TR key={index}>
                    <S.TD>
                      {editandoId === index ? (
                        <Controller
                          name="nome"
                          control={control}
                          rules={{ required: "Nome é obrigatório" }}
                          render={({ field }) => (
                            <input type="text" {...field} />
                          )}
                        />
                      ) : (
                        usuario.nome
                      )}
                      {editandoId === index && errors.nome && (
                        <p style={{ color: "red", marginTop: 3 }}>
                          {errors.nome.message}
                        </p>
                      )}
                    </S.TD>
                    <S.TD>
                      {editandoId === index ? (
                        <Controller
                          name="email"
                          control={control}
                          rules={{
                            required: "Email é obrigatório",
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: "Email inválido",
                            },
                          }}
                          render={({ field }) => (
                            <input type="email" {...field} />
                          )}
                        />
                      ) : (
                        usuario.email
                      )}
                      {editandoId === index && errors.email && (
                        <p style={{ color: "red", marginTop: 3 }}>
                          {errors.email.message}
                        </p>
                      )}
                    </S.TD>
                    <S.TD>
                      {editandoId === index ? (
                        <Controller
                          name="senha"
                          control={control}
                          rules={{
                            required: "Senha é obrigatória",
                            minLength: {
                              value: 7,
                              message: "A senha deve ter pelo menos 7 caracteres",
                            },
                          }}
                          render={({ field }) => (
                            <input type="text" {...field} />
                          )}
                        />
                      ) : (
                        usuario.senha
                      )}
                      {editandoId === index && errors.senha && (
                        <p style={{ color: "red", marginTop: 3 }}>
                          {errors.senha.message}
                        </p>
                      )}
                    </S.TD>
                    <S.TD>
                      {editandoId === index ? (
                        <Controller
                          name="telefone"
                          control={control}
                          rules={{ required: "Telefone é obrigatório" }}
                          render={({ field }) => (
                            <S.InputMasks
                              {...field}
                              mask="+__ (__) _____-____"
                              replacement={{ _: /\d/ }}
                              placeholder="Digite seu telefone"
                            />
                          )}
                        />
                      ) : (
                        usuario.telefone
                      )}
                      {editandoId === index && errors.telefone && (
                        <p style={{ color: "red", marginTop: 3 }}>
                          {errors.telefone.message}
                        </p>
                      )}
                    </S.TD>
                    <S.TD>
                      {editandoId === index ? (
                        <>
                          <S.EditButton
                            onClick={handleSubmit(onSubmit)}
                            disabled={!isValid} // Desabilita botão enquanto inválido
                          >
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