import CaUtils from "../utils/CaUtils.js";
import { CaErrMsg } from "../messages/CaMessages.js";
import { CaRegEx, CaEmailDomains } from "./CaValidationRules.js";

/**
 * CaFormValidate.js
 * * Classe utilitária para validação de campos de formulário de contato.
 *
 * @author Carlos Augusto de S. Almeida
 * @version 0.0.1
 * @created Junho 2025
 */
class CaFormValidate {
  static validateOnChange = false;
  static formIsInvalid = false;
  static _minLengthMessage = 80;

  /**
   * Valida se o nome é válido (deve conter pelo menos dois nomes).
   * @param {string} s - Nome a ser validado.
   * @returns {string} - String vazia se válido, mensagem de erro caso contrário.
   */
  static nome(s) {
    const s_fmt = CaUtils.strAllTrim(s);
    if (!s_fmt) {
      // Check se vazio!
      return CaErrMsg.nome_vazio;
    }
    if (s_fmt.split(" ").length < 2) {
      // Check se tem nome + sobrenome
      return CaErrMsg.nome_sobrenome;
    }
    return ""; // Ok!
  }

  /**
   * Valida se o e-mail é válido.
   * @param {string} s - E-mail a ser validado.
   * @returns {string} - String vazia se válido, mensagem de erro caso contrário.
   */
  static email(s) {
    const email = s.trim().toLowerCase();
    if (!email) {
      return CaErrMsg.email_vazio;
    }
    if (!CaRegEx.email.test(email)) {
      return CaErrMsg.email;
    }
    const domain = email.split("@")[1];
    if (!CaEmailDomains.has(domain)) {
      return CaErrMsg.email_dominio_desconhecido;
    }
    return ""; // Ok!
  }

  /**
   * Valida se o telefone é válido.
   * @param {string} s - Telefone a ser validado.
   * @returns {string} - String vazia se válido, mensagem de erro caso contrário.
   */
  static telefone(s) {
    const tel = s.replace(/\D/g, ""); // Remove não dígitos
    if (!tel) {
      return CaErrMsg.telefone_vazio;
    }
    if (!CaRegEx.telefone.test(tel)) {
      return CaErrMsg.telefone;
    }
    const ddd = parseInt(tel.substring(0, 2), 10);
    if (ddd < 11 || ddd > 99) {
      // DDDs no Brasil vão de 11 a 99
      return CaErrMsg.telefone_ddd_invalido;
    }
    // Valida celular (9 dígitos começando com 9)
    if (tel.length === 11 && tel.charAt(2) !== "9") {
      return CaErrMsg.telefone_num_celular_invalido;
    }
    return ""; // Ok!
  }

  /**
   * Valida se a mensagem é válida.
   * @param {string} s - Mensagem a ser validada.
   * @returns {string} - String vazia se válido, mensagem de erro caso contrário.
   */
  static msg(s) {
    const msg = CaUtils.strAllTrim(s);
    if (!msg) {
      return CaErrMsg.msg_vazia;
    }
    if (msg.length < this._minLengthMessage) {
      return CaErrMsg.msg_num_minimo_caracteres.replace(
        "#num_min_caracteres",
        this._minLengthMessage
      );
    }
    return ""; // Ok!
  }
}

// Exporta a classe CaFormValidate como exportação padrão do módulo,
// permitindo que seja importada em outros arquivos usando 'import CaToggleTheme from ...'
export default CaFormValidate;
