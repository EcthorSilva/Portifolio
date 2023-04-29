/*
 * Vou deixar alguns scripts pequenos para uso geral da pagina.
*/

/* Script para atualizar o ano presente no paragrafo dentro da div intro */

var yearSpan = $("#year"); // Obtenha o elemento span pelo seu ID
var currentYear = new Date().getFullYear(); // Obtenha o ano atual
yearSpan.text(currentYear); // Atualize o valor do elemento span com o ano atual