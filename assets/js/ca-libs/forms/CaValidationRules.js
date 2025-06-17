/**
 * CaValidationData.js
 * 
 * Utilitários e funções auxiliares em geral.
 *
 * @author Carlos Augusto de S. Almeida
 * @version 0.0.1
 * @created Junho 2025
 */

/**
 * Domínios de e-mails populares.0
 */
export const CaEmailDomains = new Set([
    // Gigantes Globais
    'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com', 'icloud.com',
    'mail.com', 'zoho.com', 'protonmail.com', 'yandex.com', 'gmx.com',

    // Provedores Populares no Brasil
    'uol.com.br', 'bol.com.br', 'terra.com.br', 'ig.com.br', 'r7.com', 'globo.com',

    // Provedores Populares em Portugal
    'sapo.pt', 'clix.pt', 'telepac.pt', 'netcabo.pt',

    // Variações Internacionais e outros provedores conhecidos
    'yahoo.co.uk', 'yahoo.com.br', 'yahoo.fr', 'yahoo.de', 'yahoo.ca', 'yahoo.co.in',
    'hotmail.co.uk', 'hotmail.fr', 'hotmail.de',
    'live.com', 'msn.com',
    'gmx.de', 'gmx.net', 'gmx.us',
    'web.de',
    'mail.ru', 'yandex.ru',
    'qq.com', '163.com', '126.com',
    'cox.net', 'sbcglobal.net', 'verizon.net', 'att.net', 'comcast.net',
    'bellsouth.net', 'charter.net', 'earthlink.net', 'mac.com', 'me.com',
    'orange.fr', 'libero.it', 't-online.de', 'wanadoo.fr',
    'nate.com', 'naver.com', 'hanmail.net',

    // Domínios adicionais para cobrir mais casos
    'abv.bg', 'arcor.de', 'bluewin.ch', 'btinternet.com', 'centrum.cz', 'chello.nl',
    'daum.net', 'dr.com', 'email.com', 'email.it', 'europe.com', 'fastmail.com',
    'freenet.de', 'hushmail.com', 'inbox.com', 'india.com', 'interia.pl', 'laposte.net',
    'lycos.com', 'o2.pl', 'onet.pl', 'optusnet.com.au', 'planet.nl', 'post.com',

    // ...
]);


/**
 * Expressões Regulares.
 */
export const CaRegEx = {
    /**
     * Esta regex corresponde à maioria dos formatos de e-mail válidos, incluindo:
     * - Caracteres alfanuméricos e caracteres especiais permitidos antes do '@'
     * - Nomes de domínio com subdomínios e hifens opcionais
     *
     * @type {RegExp}
     * @private
     * @static
     * @example
     * // retorna verdadeiro
     * CaFormValidate._regexEmail.test('user@example.com');
     * // retorna falso
     * CaFormValidate._regexEmail.test('invalid-email@');
     */
    email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,

    /**
     * Regex para validar números de telefone brasileiros no formato
     *    DDD + número (8 ou 9 dígitos).
     * Exemplo válido: 11987654321 ou 1134567890
     *
     * @type {RegExp}
     * @example
     * // retorna verdadeiro
     * CaRegEx.telefone.test('11987654321');
     * // retorna falso
     * CaRegEx.telefone.test('12345');
     */
    telefone: /^(\d{2})(\d{4,5})(\d{4})$/,
}
