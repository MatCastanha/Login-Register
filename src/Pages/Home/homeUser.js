import * as S from "./styleUser";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";

const HomeUser = () => {
  const [usuario, setUsuario] = useState(null);
  const [editando, setEditando] = useState(false);

  const {
    register,
    control,
    reset,
    formState: { errors },
    getValues,
    trigger,
  } = useForm({
    mode: "onChange", // para validar a cada alteração
  });

  useEffect(() => {
    const emailLogado = localStorage.getItem("emailLogado");
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioLogado = usuarios.find((u) => u.email === emailLogado);

    if (usuarioLogado) {
      setUsuario(usuarioLogado);
      reset({ ...usuarioLogado });
    }
  }, [reset]);

  const salvarDados = async () => {
    // dispara validação do formulário antes de continuar
    const valid = await trigger();
    if (!valid) {
      alert("Preencha todos os campos corretamente.");
      return;
    }

    const data = getValues();

    // email sempre em minúsculo
    const emailMinusculo = data.email.toLowerCase();

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const atualizados = usuarios.map((u) =>
      u.email === usuario.email ? { ...data, email: emailMinusculo } : u
    );

    localStorage.setItem("usuarios", JSON.stringify(atualizados));
    localStorage.setItem("emailLogado", emailMinusculo);
    setUsuario({ ...data, email: emailMinusculo });
    setEditando(false);
  };

  const handleCancelar = () => {
    reset(usuario);
    setEditando(false);
  };

  const handleSair = () => {
    localStorage.removeItem("emailLogado");
    window.location.href = "/login";
  };

  if (!usuario) return <p>Usuário não encontrado.</p>;

  return (
    <S.Container>
      <S.Header>
        <S.ContentDiv1>
          <S.P>
            Olá, Seja Bem-Vindo <S.Nome>{usuario.nome}</S.Nome>
          </S.P>
          <S.Button onClick={handleSair}>Sair</S.Button>
        </S.ContentDiv1>
      </S.Header>

      <S.ContentDiv2>
        <S.H1>Meus Dados</S.H1>
        <S.P2>Aqui você pode editar suas informações pessoais</S.P2>
      </S.ContentDiv2>

      <S.H2>Informações Cadastrais</S.H2>

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
                <S.TR>
                  {editando ? (
                    <>
                      <S.TD>
                        <input
                          type="text"
                          {...register("nome", { required: "Nome é obrigatório." })}
                        />
                        {errors.nome && <p style={{ color: "red" }}>{errors.nome.message}</p>}
                      </S.TD>
                      <S.TD>
                        <input
                          type="email"
                          {...register("email", {
                            required: "Email é obrigatório.",
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: "Digite um email válido.",
                            },
                          })}
                        />
                        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
                      </S.TD>
                      <S.TD>
                        <input
                          type="text"
                          {...register("senha", {
                            required: "Senha é obrigatória.",
                            minLength: {
                              value: 7,
                              message: "Senha deve ter ao menos 7 caracteres.",
                            },
                          })}
                        />
                        {errors.senha && <p style={{ color: "red" }}>{errors.senha.message}</p>}
                      </S.TD>
                      <S.TD>
                        <Controller
                          name="telefone"
                          control={control}
                          rules={{ required: "Telefone é obrigatório." }}
                          render={({ field }) => (
                            <>
                              <S.InputMasks
                                mask="+__ (__) _____-____"
                                replacement={{ _: /\d/ }}
                                {...field}
                                placeholder="Digite seu telefone"
                              />
                              {errors.telefone && (
                                <p style={{ color: "red" }}>{errors.telefone.message}</p>
                              )}
                            </>
                          )}
                        />
                      </S.TD>
                      <S.TD>
                        <S.EditButton onClick={salvarDados}>Salvar</S.EditButton>
                        <S.CancelButton onClick={handleCancelar}>Cancelar</S.CancelButton>
                      </S.TD>
                    </>
                  ) : (
                    <>
                      <S.TD>{usuario.nome}</S.TD>
                      <S.TD>{usuario.email}</S.TD>
                      <S.TD>{usuario.senha}</S.TD>
                      <S.TD>{usuario.telefone}</S.TD>
                      <S.TD>
                        <S.EditButton onClick={() => setEditando(true)}>Editar</S.EditButton>
                      </S.TD>
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