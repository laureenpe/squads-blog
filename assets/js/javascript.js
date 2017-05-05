// MIEMBROS TIENEN QUE SER GLOBALES Y LOS COMENTARIOS DEBEN SER GLOBALES
// CREAR LA FUNCION DE QUE SE PUEDA CREAR COMENTARIOS POR CADA UNO DE LOS MUESTRO
var comentarios= [];
var contenedor = document.getElementById('contenedor')
function MiembroSquad (nombre, apellido, edad, hobbies) { // constructor creado con las propiedades solicitadas
  this.nombre = nombre,
  this.apellido = apellido,
  this.edad = edad,
  this.hobbies = hobbies, // debe ser un array porque existen varios hobbies
  this.photos = new Image();//necesito que por cada persona me muestre su foto
  this.photos.src="photos/" + this.nombre + ".jpg"  ;///de donde saca la imagen?
  

  
};

function inicializar () {
  var teamMates = [new MiembroSquad('Orieta', 'Toro', '27', ['Leer', 'dormir']),
    new MiembroSquad('Constanza', 'Pecori', '26', ['tejer', 'comer', 'dormir ']),
    new MiembroSquad('Rangi', 'Becerra', '32', ['viajar']),
    new MiembroSquad('Caterina', 'Da Silva', '26', ['juegos online']),
    new MiembroSquad('Rosa', 'Díaz', '32', ['Pensar en la inmortalidad del cangrejo']),
    new MiembroSquad('Genesis', 'Narváez', '27', ['pasear en bici']),
    new MiembroSquad('Laura', 'Peláez', 'undefined', ['cinéfila']),
    new MiembroSquad('Camila', 'González', '26', ['ver netflix', 'jugar con mascotas', 'degustar cervezas'])];

  console.log(teamMates)
  var html = '' // creo esta variable para que me agrupe un bloque de codigo html y me lo ingrese al contenedor
  for (var i = 0; i < teamMates.length; i++) { // recorro mi array teamMates que me contiene las nuevas instancias
    html += '<section> <img width=200 src="' + teamMates[i].photos.src + '" > </br> <strong> Nombre: </strong>' + // += para que concatene las cosas y me muestre todo
    teamMates[i].nombre + '</br>' + ' <strong> Apellido: </strong>' +
    teamMates[i].apellido + '</br>' + '<strong> edad: </strong>' +
    teamMates[i].edad + '</br>'+ "Hobbies : "

    html += '<ul>' // porque necesito crear un  ul q me meta los li

    for (var j = 0; j < teamMates[i].hobbies.length; j++) { // como hobbies es un array de varias cosas, necesito recorrerlo para buscar el hobbie
      html += '<li>' + teamMates[i].hobbies[j] + '</li>'
    }
    html += '</ul></section><br/>'
  }
  contenedor.innerHTML = html
}
