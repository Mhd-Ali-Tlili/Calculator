document.addEventListener("DOMContentLoaded", function() {
    const result = document.getElementById('result');
    const clearButton = document.getElementById('clear-button');
    const buttons = document.querySelectorAll('input[type="button"]:not(#clear-button)');
  
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        if (this.value === '=') {
          try {
            result.value = eval(result.value);
          } catch (e) {
            result.value = 'Erreur';
          }
        } else {
          result.value += this.value;
        }
      });
    });
  
    clearButton.addEventListener('click', function() {
      result.value = '';
    });
  });
  