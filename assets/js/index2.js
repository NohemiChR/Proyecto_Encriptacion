function inicio() {
    document
    .querySelector("#msg")
    .addEventListener("keyup",function (){
      this.value = this.value.toUpperCase();    
    });
    ///////////////////////////////////////
    //const modal = document.querySelector('.modal');
    document.querySelector("#cipher")
    .addEventListener("click", function(){
        const texto = document.querySelector("#msg").value;
        const desplazamiento = document.querySelector("#offset").value; 
        
        const textoCifrado = cifrar(texto,desplazamiento);
       mostrarModal(textoCifrado);
    });
    //////////////////////////////////
    document.querySelector("#decipher")
    .addEventListener("click", function(){
     const texto = document.querySelector("#msg").value;
     const desplazamiento= document.querySelector("#offset").value; 
     
     const textoCifrado = descifrar(texto,desplazamiento);
     mostrarModal(textoCifrado);
    });

    document.querySelector("#copy")
    .addEventListener("click",function(){
     const textarea= document.querySelector("#msgResult");
     textarea.select(); // Seleccionar todo el texto dentro del textarea
     document.execCommand("copy"); // Copiar el texto seleccionado al portapapeles
      alert("este mensaje fue copiado");
    });

    document.querySelector("#close").addEventListener("click", function () {
      const modal = document.querySelector('.modal');
      modal.classList.remove('modal--show'); // Remover la clase modal--show para cerrar el modal
  });
}

function mostrarModal(texto) {
  const modal = document.querySelector('.modal');
  const closeModal = document.querySelector('.modal__close');
  const modalText = document.querySelector('#msgResult');

  modalText.value = texto; // Actualizar el texto cifrado/descifrado en el modal
  modal.classList.add('modal--show'); // Mostrar el modal añadiendo la clase modal--show
  // closeModal.addEventListener('click', (e)=>{
  //   e.preventDefault();
  //   modal.classList.remove('modal--show');
  // });
}


function cifrar(texto,desplazamiento) {
    let result =""; 
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
    desplazamiento = ((desplazamiento % 26)+ 26) % 26; 
    // si no esta vacio 
    if (texto){
     for (let i = 0; i < texto.length; i++) {
         if ( letras.indexOf(texto[i]) != -1){
            let posicion = (letras.indexOf(texto[i])+desplazamiento)% 26;
            result += letras[posicion];
         }else{
            result += texto[i];
         }
        
     }
    }
    return result; 
}

function descifrar(texto, desplazamiento){
    let result = "";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
      //Es necesario para que esté en el rango de la cantidad de letras del alfabeto
      //y para cuando sea negativo
    desplazamiento = ((desplazamiento % 26) + 26) % 26;
  
    //Si no está vacío
    if (texto) {
      for (let i = 0; i < texto.length; i++) {
        //validamos que este dentro de las cadena de letras
        if (letras.indexOf(texto[i]) != -1) {
          let posicion = (letras.indexOf(texto[i]) - desplazamiento + 26) % 26;
          result += letras[posicion];
        } else {
          result += texto[i];
        }
      }
    }
    return result;
} 

function copiarTexto() {
  const resultTextarea = document.querySelector("#copy").addEventListener("click", function() {
    const textarea1 = document.querySelector("#msgResult");
    textarea.select(); // Seleccionar todo el texto dentro del textarea
    document.execCommand("copy"); // Copiar el texto seleccionado al portapapeles
   // document,querySelector("#copy").value= "Copiado!";

    alert("este mensaje fue copiado");// Mostrar una alerta de confirmación
});
}

inicio();