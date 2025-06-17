/**
 * CaToggleTheme.js
 * * Classe para gerenciar a alternância de tema (light/dark) em uma página web.
 *
 * @author Carlos Augusto de S. Almeida
 * @version 0.0.1
 * @created Junho 2025
 */
class CaToggleTheme {
  /**
   * Inicializa o alternador de tema.
   * @param {string} toggleSelector - Seletor CSS para o botão de alternância.
   * @param {string} iconSelector - Seletor CSS para o ícone dentro do botão.
   * @param {string} lightIconClass - Classe CSS para o ícone do tema claro.
   * @param {string} darkIconClass - Classe CSS para o ícone do tema escuro.
   */
  constructor(toggleSelector, iconSelector, lightIconClass, darkIconClass) {
    this.toggleButton = document.querySelector(toggleSelector);
    this.toggleIcon = document.querySelector(iconSelector);
    this.lightIcon = lightIconClass;
    this.darkIcon = darkIconClass;
    this.theme = localStorage.getItem("theme") || "light";

    if (!this.toggleButton || !this.toggleIcon) {
      console.warn("Elementos para alternância de tema não encontrados.");
      return;
    }

    this._applyTheme();
    this.toggleButton.addEventListener("click", () => this._toggleTheme());
  }

  /**
   * Aplica o tema atual ao body e atualiza o ícone.
   * @private
   */
  _applyTheme() {
    document.body.setAttribute("data-bs-theme", this.theme);
    if (this.theme === "dark") {
      this.toggleIcon.classList.remove(this.darkIcon);
      this.toggleIcon.classList.add(this.lightIcon);
    } else {
      this.toggleIcon.classList.remove(this.lightIcon);
      this.toggleIcon.classList.add(this.darkIcon);
    }
  }

  /**
   * Alterna entre os temas light e dark.
   * @private
   */
  _toggleTheme() {
    this.theme = this.theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", this.theme);
    this._applyTheme();
  }
}

export default CaToggleTheme;
