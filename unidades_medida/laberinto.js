document.addEventListener('DOMContentLoaded', () => {
    const laberinto = document.getElementById('laberinto');
    const jugador = document.createElement('div');
    jugador.classList.add('jugador');
    laberinto.appendChild(jugador);

    document.addEventListener('keydown', (event) => {
        moverJugador(event);
    });

    function moverJugador(event) {
        const teclaPresionada = event.key;
        const jugadorPosicion = laberinto.querySelector('.jugador');
        const jugadorEstilo = getComputedStyle(jugadorPosicion);
        const jugadorTamanio = parseFloat(jugadorEstilo.width);

        let nuevaColumna = parseInt(jugadorPosicion.style.gridColumn) || 1;
        let nuevaFila = parseInt(jugadorPosicion.style.gridRow) || 1;

        switch (teclaPresionada) {
            case 'ArrowUp':
                nuevaFila = Math.max(1, nuevaFila - 1);
                break;
            case 'ArrowDown':
                nuevaFila = Math.min(10, nuevaFila + 1);
                break;
            case 'ArrowLeft':
                nuevaColumna = Math.max(1, nuevaColumna - 1);
                break;
            case 'ArrowRight':
                nuevaColumna = Math.min(10, nuevaColumna + 1);
                break;
        }

        jugadorPosicion.style.gridColumn = nuevaColumna;
        jugadorPosicion.style.gridRow = nuevaFila;
    }
});
