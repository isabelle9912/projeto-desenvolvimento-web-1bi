import { CaExceptionMsg, CaNaoCapitalizar } from '../messages/CaMessages.js';

/**
 * CaUtils.js
 * 
 * Utilitários e funções auxiliares em geral.
 *
 * @author Carlos Augusto de S. Almeida
 * @version 0.0.1
 * @created Junho 2025
 */
class CaUtils {

    /**
     * Remove espaços extras e trims em toda a string.
     * @param {string} s - String a ser tratada.
     * @returns {string} - String tratada.
     */
    static strAllTrim(s) {
        if (typeof s !== 'string') {
            throw CaExceptionMsg.replace('#string', s);
        }
        return s.replace(/\s+/g, ' ').trim(); // remove espaçamento duplo
    }

    /**
     * Capitaliza a primeira letra de cada palavra em uma string, exceto para palavras especificadas
     * no conjunto `CaNaoCapitalizar`, a menos que a palavra seja a primeira da string.
     * Converte toda a string para minúsculas antes de capitalizar.
     *
     * @param {string} s - A string de entrada.
     * @returns {string} String de saída 'capitalizada'.
     * @throws {string} Erro se a entrada não for uma string.
     *
     * @example
     * // Supondo que CaNaoCapitalizar contenha 'de', 'da', 'do'
     * CaUtils.capitalizeTitle('o senhor dos aneis') // "O Senhor dos Aneis"
     */
    static capitalizeTitle(s) {
        if (typeof s !== 'string') {
            throw CaExceptionMsg.arg_invalid_expected_string.replace('#value', s);
        }
        const palavras = s.toLowerCase().split(' ');
        for (let i = 0; i < palavras.length; i++) {
            if (i === 0 || !CaNaoCapitalizar.has(palavras[i])) {
                palavras[i] = palavras[i][0].toUpperCase() + palavras[i].slice(1);
            }
        }
        return palavras.join(' ');
    }

}

export default CaUtils;
