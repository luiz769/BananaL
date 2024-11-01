const textarea = document.getElementById('texto');
        const contador = document.getElementById('contador');
        const contarBtn = document.getElementById('contarBtn');

        contarBtn.addEventListener('click', () => {
            const texto = textarea.value.trim();
            const palavras = texto.length > 0 ? texto.split(/\s+/) : [];
            contador.textContent = `Número de palavras: ${palavras.length}`;
        });