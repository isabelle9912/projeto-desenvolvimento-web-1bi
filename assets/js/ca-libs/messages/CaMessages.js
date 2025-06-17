/**
 * Mensagens de erro para o usuário.
 */
export const CaErrMsg = {
  nome: "Nome inválido!",
  nome_vazio: "Nome não pode ser vazio!",
  nome_sobrenome: "Campo exige, nome e sobrenome!",
  //
  email: "Email inválido!",
  email_vazio: "E-mail não pode ser vazio!",
  email_dominio_desconhecido: "Esse domínio de e-mail não é aceito!",
  //
  telefone:
    "Telefone inválido! Formatos aceitos, Celular: (DDD) 9xxxx-yyyy - Fixo: (DDD) xxxx-yyyy",
  telefone_vazio: "Telefone não pode ser vazio!",
  telefone_ddd_invalido: "DDD inválido!",
  telefone_num_celular_invalido:
    "Para celular, o número deve começar com 9 após o DDD!",
  //
  msg: "Mensagem inválida!",
  msg_vazia: "Mensagem não pode ser vazia!",
  msg_num_minimo_caracteres: `A mensagem precisa ter no mínimo #num_min_caracteres caracteres.`,
};

/**
 * Mensagens de exceção.
 */
export const CaExceptionMsg = {
  arg_invalid_expected_string:
    "O argumento deve ser uma string, mas foi encontrado '#value'!",
  arg_invalid_expected_string_int:
    "O argumento deve ser uma string ou int, mas foi encontrado '#value'!",
  id_not_found: "Id:'#id' não encontrado!",
  validate_method_not_found:
    "Método de validação '#validate_method' não encontrado!",
};

/**
 * Um conjunto de preposições, artigos e conjunções em português que não devem ser capitalizadas
 * ao formatar títulos ou nomes.
 *
 * @type {Set<string>}
 * @constant
 */
export const CaNaoCapitalizar = new Set([
  "de",
  "do",
  "da",
  "dos",
  "das",
  "em",
  "no",
  "na",
  "nos",
  "nas",
  "por",
  "para",
  "com",
  "sem",
  "a",
  "o",
  "as",
  "os",
  "e",
]);
