import CaUtils from "../utils/CaUtils.js";

/**
 * CaCleanInput.js
 * * Classe utilitária para limpar / formatar campos de formulários.
 *
 * @author Carlos Augusto de S. Almeida
 * @version 0.0.1
 * @created Junho 2025
 */
class CaCleanInput {
  static cleanOnChange = true;

  static nome(s) {
    let result = CaUtils.strAllTrim(s);
    return CaUtils.capitalizeTitle(result);
  }

  static email(s) {
    return s.trim().toLowerCase();
  }

  static telefone(s) {
    // Remove tudo que não for dígito
    return s.replace(/\D/g, "");
  }

  static msg(s) {
    return CaUtils.strAllTrim(s);
  }
}

// Exporta a classe CaFormValidate como exportação padrão do módulo,
// permitindo que seja importada em outros arquivos usando 'import CaToggleTheme from ...'
export default CaCleanInput;
