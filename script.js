//////////////////////////////////////////
//  GET
//////////////////////////////////////////

//Declaramos la url que vamos a usar para el GET
const URLGET = "http://hp-api.herokuapp.com/api/characters";

//Agregamos un botón con jQuery
$("body").prepend('<button id="btnGet">GET</button>');

//Escuchamos el evento click del botón agregado
$("#btnGet").click(() => {
  //   USANDO AJAX MODO CALLBACK FUNCTION
  $.get(URLGET, function (respuesta, estado) {
    if (estado === "success") {
      let misDatos = respuesta;

      for (const dato of misDatos) {
        $(".container").append(`
          
        <div class="caja">
            <h3>${dato.name}</h3>
            <br>
            <img src="${dato.image}"> 
            <ul>
            <li><strong>Specie</strong>: ${dato.species}</li>
            <li><strong>Gender</strong>: ${dato.gender}</li>
            <li><strong>House</strong>: ${dato.house}</li>
            <li><strong>Date of Birth</strong>: ${dato.dateOfBirth}</li>
            <li><strong>Year of Birth</strong>: ${dato.yearOfBirth}</li>
            <li><strong>Ancestry</strong>: ${dato.ancestry}</li>
            <li><strong>Eye Colour</strong>: ${dato.eyeColour}</li>
            <li><strong>Hair Colour</strong>: ${dato.hairColour}</li>
            <li><strong>Actor</strong>:  ${dato.actor}</li>
            </ul>
           
          </div>
          
        `);
      }
    }
  });
});
