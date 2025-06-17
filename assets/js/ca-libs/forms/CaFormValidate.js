import  CaUtils from '../utils/CaUtils.js';
import { CaErrMsg } from '../messages/CaMessages.js';

/**
 * CaFormValidate.js
 * 
 * Classe utilitária para validação de campos de formulário de contato.
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
     * @returns {boolean} - true se válido, false caso contrário.
     */
    static nome(s) {
        const s_fmt = CaUtils.strAllTrim(s);
        if ( !s_fmt ) { // Check se vazio!
            return CaErrMsg.nome_vazio;
        }
        if ( s_fmt.split(' ').length < 2 ) { // Check se tem nome + sobrenome
            return CaErrMsg.nome_sobrenome;
        }
        return ''; // Ok!
    }

    // Falta email, telefone, msg

}

// Exporta a classe CaFormValidate como exportação padrão do módulo,
// permitindo que seja importada em outros arquivos usando 'import CaToggleTheme from ...'
export default CaFormValidate;
