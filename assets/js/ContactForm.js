import CaForm from './ca-libs/forms/CaForm.js';

/**
 * ContactForm.js
 * 
 * Classe para validação e manipulação de formulário de contato.
 * Utiliza validação customizada e tratamento de eventos.
 * 
 * @module ContactForm
 * @author Carlos Augusto de S. Almeida
 * @version 0.0.1
 * @created Junho 2025
 */
class ContactForm {

    /**
     * Inicializa o formulário e os eventos.
     */
    constructor() {
        // Todos os pares de inputs seguidos de seu método de validação
        const inputId_fnValidate_pairs = {
        //  inputId     método de validação
            'nome'    : 'nome',
            // 'email'   : 'email',
            // 'telefone': 'telefone',
            // 'msg'     : 'msg'
        }
        this.caForm = new CaForm( 'contact-form', inputId_fnValidate_pairs );
    }

}

export default ContactForm;
