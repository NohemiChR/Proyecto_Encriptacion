window.addEventListener("load", inicio);

function inicio() {
    document.getElementById("mensaje").addEventListener("keyup", function() {
        this.value = this.value.toUpperCase();
    });

    document.getElementById("cifrar").addEventListener("click", function() {
        let texto = document.getElementById("mensaje").value;
        let desplazamiento = parseInt(document.getElementById("desp").value);
        document.getElementById("mensaje2").value = cifrar(texto, desplazamiento);
        document.getElementById("mensaje").value = '';
        document.getElementById("desp").value = '';
    });

    document.getElementById("descifrar").addEventListener("click", function() {
        let texto = document.getElementById("mensaje").value;
        let desplazamiento = parseInt(document.getElementById("desp").value);
        document.getElementById("mensaje2").value = descifrar(texto, desplazamiento);
        document.getElementById("mensaje").value = '';
        document.getElementById("desp").value = '';
    });

    document.getElementById("copyIcon").addEventListener("click", copiarTexto);

    var modal = document.getElementById("nombreModal");
    modal.style.display = "block";

    var closeModal = function() {
        modal.style.display = "none";
        mostrarContenidoPrincipal();
    };

    var closeBtn = document.querySelector(".close");
    if (closeBtn) {
        closeBtn.addEventListener("click", closeModal);
    }

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    var btnGuardarNombre = document.getElementById("btnGuardarNombre");
    if (btnGuardarNombre) {
        btnGuardarNombre.addEventListener("click", function() {
            var nombre = document.getElementById("inputNombre").value;
            if (nombre.trim() !== "") {
                actualizarTitulo(nombre);
                closeModal();
            } else {
                alert("Por favor, ingresa tu nombre.");
            }
        });
    }
}

function actualizarTitulo(nombre) {
    var titulo = document.getElementById("titulo");
    titulo.textContent = nombre ? `Te cuento algo, ${nombre} !!` : "Te cuento algo !!";
}

function mostrarContenidoPrincipal() {
    var mainContent = document.getElementById("mainContent");
    if (mainContent) {
        mainContent.style.display = "block";
    }
}

function cifrar(texto, desplazamiento) {
    let resultado = "";
    let abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

    desplazamiento = (desplazamiento % 27 + 27) % 27;

    if (texto) {
        for (let i = 0; i < texto.length; i++) {
            if (abecedario.indexOf(texto[i]) !== -1) {
                let posc = (abecedario.indexOf(texto[i]) + desplazamiento) % 27;
                resultado += abecedario[posc];
            } else {
                resultado += texto[i];
            }
        }
    }
    return resultado;
}

function descifrar(texto, desplazamiento) {
    let resultado = "";
    let abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

    desplazamiento = (desplazamiento % 27 + 27) % 27;

    if (texto) {
        for (let i = 0; i < texto.length; i++) {
            if (abecedario.indexOf(texto[i]) !== -1) {
                let posc = (abecedario.indexOf(texto[i]) - desplazamiento + 27) % 27;
                resultado += abecedario[posc];
            } else {
                resultado += texto[i];
            }
        }
    }
    return resultado;
}

function copiarTexto() {
    let textoEncriptado = document.getElementById("mensaje2").value;
    if (textoEncriptado) {
        navigator.clipboard.writeText(textoEncriptado).then(() => {
           // alert("Texto copiado al portapapeles");
        }).catch(err => {
            console.error("Error al copiar el texto: ", err);
        });
    } else {
        alert("No hay texto para copiar");
    }
}
