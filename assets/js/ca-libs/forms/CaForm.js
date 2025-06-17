import { CaExceptionMsg } from '../messages/CaMessages.js';
import CaCleanInput from './CaCleanInput.js';
import CaFormValidate from './CaFormValidate.js';

/**
 * Classe responsável por gerenciar a validação e manipulação de formulários HTML.
 *
 * Permite associar funções de validação e limpeza a campos de formulário, 
 * controlar eventos de submit e change, exibir mensagens de erro e aplicar estilos de
 * validação.
 *
 * Exemplo de uso:
 *   const form = new CaForm('formId', { email: 'email', senha: 'senha' });
 *
 * @author Carlos Augusto de S. Almeida
 * @version 0.0.1
 * @created Junho 2025
 */
class CaForm {

    /**
     * Inicializa o formulário e os eventos.
     */
    constructor( formId, inputId_fnValidacao_pairs = {},
        cleanInputsOnChange = true, validateOnChange = true )
    {
        this.form = document.getElementById(formId);
        if ( ! this.form ) {
            throw Error( CaExceptionMsg.id_not_found.replace('#id', formId) );
        }
        //
        this._formIsValid = true; // Inicialmente considero o form como válido!
        this._inputs = inputId_fnValidacao_pairs;
        this._cleanInputsOnChange = cleanInputsOnChange;
        this._validateOnChange = validateOnChange;
        //
        this._createFormEvents();
        this._createInputEvents();
    }


    /**
     * Add o event submit ao Form.
     */
    _createFormEvents() {
        this.form.addEventListener('submit', (ev) => this.onSubmit(ev));
    }


    /**
     * Manipulador do evento de submit do formulário.
     * @param {Event} ev - Evento de submit.
     * @returns {boolean} - true se válido, false caso contrário.
     */
    onSubmit(ev) {
        if (this.validate()) {
            return true;
        }

        ev.preventDefault();  // Interrompe o submit em caso de erro
        ev.stopPropagation();
        return false;
    }


    /**
     * Valida todos os campos do formulário associado a esta instância.
     *
     * Para cada campo do formulário:
     * - Obtém o valor do campo usando FormData.
     * - Procura uma função de validação correspondente em `CaFormValidate`
     *   usando o nome do campo como chave.
     * - Se existir uma função de validação, executa-a passando o valor do campo.
     * - Atualiza a mensagem de erro do campo: se válido, limpa a mensagem; se inválido, exibe
     *   a mensagem de erro definida em `CaFormValidate.errMsg` ou uma mensagem padrão.
     * - Adiciona ou remove a classe CSS 'is-invalid' no campo de entrada conforme o resultado
     *   da validação.
     * - Se algum campo for inválido, define o resultado geral como falso.
     *
     * @returns {boolean} Retorna `true` se todos os campos forem válidos, caso contrário, `false`.
     */
    validate() {
        let formIsValid = true; // Inicialmente, considero Form OK, válido.

        for (const [inputId, validationMethod] of Object.entries(this._inputs)) {
            const isValid = this.validateInput( inputId, validationMethod );
            if (!isValid) { // Basta um campo ser inválido que inválida o form
                formIsValid = false;
            }
        }

        this._formIsValid = formIsValid;
        return formIsValid;
    }


    validateInput( inputId, validateMethod ) {
        const el = document.getElementById(inputId);
        if ( !el ) {
            throw Error('CaForm.validateInput :: ' + CaExceptionMsg.id_not_found.replace('#id', inputId));
        }
        // Para cada campo do formulário, tenta acessar a função de validação correspondente em 
        //   CaFormValidate usando o nome do campo como chave.
        // O operador ?. (optional chaining) garante que, se CaFormValidate[key] não existir
        //    (ou seja, não houver função de validação para aquele campo),
        // não ocorrerá erro ao tentar chamar como função. Se existir, executa a função passando
        //    o valor do campo.
        // Exemplo: se key for 'email', executa CaFormValidate['email'](value), se existir.
        // Se não existir, msgErr será undefined.
        const msgErr = CaFormValidate[validateMethod]?.(el.value);
        if (msgErr === undefined) {
            throw Error('CaForm.validateInput :: ' 
                + CaExceptionMsg.validate_method_not_found.replace('#validate_method', validateMethod));
        }
        const isValid = msgErr === '';
        // ::: É o mesmo que :::
        // let msgErr = '';
        // let isValid = true;
        // if (typeof CaFormValidate[key] === 'function') {
        //     msgErr = CaFormValidate[key](value);
        //     isValid = (msgErr === '');
        // } else {
        //     // Se não houver função de validação, considere válido por padrão
        //     isValid = true;
        //     msgErr = '';
        // }

        // Se campo válido, o elemento que exibe o erro recebe '' (null),
        // Caso contrário recebe msg do erro.
        document.getElementById(`${inputId}_err`).innerHTML = isValid ? '' : msgErr;

        if (el) {
            // Adiciona ou remove a classe 'is-invalid' no campo de entrada.
            // Se o campo for inválido (isValid == false), adiciona a classe para exibir o estilo de erro.
            // Se o campo for válido (isValid == true), remove a classe para ocultar o estilo de erro.
            el.classList.toggle('is-invalid', !isValid);
        }
        
        return isValid;
    }


    /**
     * Cria e associa eventos de 'change' para inputs especificados, utilizando funções
     *   de validação.
     *
     * @param {Object} inputId_fnValidate_pairs - Objeto onde as chaves são IDs de inputs
     *   e os valores são nomes de funções de validação.
     *
     * Para cada input encontrado pelo ID:
     * - Se `_cleanInputsOnChange` for verdadeiro, executa a função de limpeza / formatação
     *   correspondente.
     * - Se `_formIsValid` for falso e `_validateOnChange` for verdadeiro, executa a
     *   função de validação correspondente.
     * 
     * Exibe um aviso no console caso algum ID não seja encontrado no DOM.
     */
    _createInputEvents() {
        for (const [inputId, validationMethod] of Object.entries(this._inputs)) {
            const el = document.getElementById(inputId);
            if ( !el ) {
                throw Error('CaForm._createInputEvents :: ' + CaExceptionMsg.id_not_found.replace('#id', inputId));
            }
            el.addEventListener('change', (ev) => {
                if (this._cleanInputsOnChange) {
                    ev.target.value = CaCleanInput[validationMethod](ev.target.value);
                }
                if (!this._formIsValid && this._validateOnChange) {
                    this.validateInput( inputId, validationMethod );
                }
            });
        }
    }

}

export default CaForm;
