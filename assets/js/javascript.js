// MIEMBROS TIENEN QUE SER GLOBALES Y LOS COMENTARIOS DEBEN SER GLOBALES
// CREAR LA FUNCION DE QUE SE PUEDA CREAR COMENTARIOS POR CADA UNO DE Las personas

var contenedor = document.getElementById('contenedor');
var commentArray = [];


function MiembroSquad(nombre, apellido, edad, hobbies, id) { // constructor creado con las propiedades solicitadas
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.hobbies = hobbies; // debe ser un array porque existen varios hobbies
    this.photos = new Image(); //necesito que por cada persona me muestre su foto
    this.photos.src = "photos/" + this.nombre + ".jpg"; ///de donde saca la imagen?
    this.id = id; //este me va a dar el Id de la persona
};

function Comentario(id_miembro, comentario, likes) {
    this.id_miembro = id_miembro;
    this.comentario = comentario;
    this.likes = 0;
};

function inicializar() {
    var teamMates = [new MiembroSquad('Orieta', 'Toro', '27', ['Leer', 'dormir'], 1),
        new MiembroSquad('Constanza', 'Pecori', '26', ['tejer', 'comer', 'dormir '], 2),
        new MiembroSquad('Rangi', 'Becerra', '32', ['viajar'], 3),
        new MiembroSquad('Caterina', 'Da Silva', '26', ['juegos online'], 4),
        new MiembroSquad('Rosa', 'Díaz', '32', ['Pensar en la inmortalidad del cangrejo'], 5),
        new MiembroSquad('Genesis', 'Narváez', '27', ['pasear en bici'], 6),
        new MiembroSquad('Laura', 'Peláez', 'undefined', ['cinéfila'], 7),
        new MiembroSquad('Camila', 'González', '26', ['ver netflix', 'jugar con mascotas', 'degustar cervezas'], 8)
    ];

    var html = '' // creo esta variable para que me agrupe un bloque de codigo html y me lo ingrese al contenedor
    for (var i = 0; i < teamMates.length; i++) { // recorro mi array teamMates que me contiene las nuevas instancias
        html += '<section> <img width=200 src="' + teamMates[i].photos.src + '" > </br> <strong> Nombre: </strong>' + // += para que concatene las cosas y me muestre todo
            teamMates[i].nombre + '</br>' + ' <strong> Apellido: </strong>' +
            teamMates[i].apellido + '</br>' + '<strong> edad: </strong>' +
            teamMates[i].edad + '</br>' + "Hobbies : "

        html += '<ul>' // porque necesito crear un  ul q me meta los li

        for (var j = 0; j < teamMates[i].hobbies.length; j++) { // como hobbies es un array de varias cosas, necesito recorrerlo para buscar el hobbie
            html += '<li>' + teamMates[i].hobbies[j] + '</li>'
        }
        html += "</ul>";
        html += '<textarea id="comment_' + teamMates[i].id + '"></textarea></br>';
        html += '<button type="button" atributo-id="' + teamMates[i].id + '" onclick="onClickComment(this)" class="button_comment">Dejar Comentario!</button>'; //le asigno una clase al boton para poder identificar todos los botones que tengan esa clase
        //necesito un div para meter el comentario, y saber a quien pertenece el comentario
        html += '<div id="message_' + teamMates[i].id + '"></div></br>';
        html += "</section><br/>"; //cierro la seccion creada


    }
    contenedor.innerHTML = html; //imprimo en el html

    /* var buttons = document.getElementsByClassName("button_comment"); //aqui estan todos los botones que existe
     for (let i = 0; i < buttons.length; i++) {
         buttons[i].addEventListener("click", onClickComment); // a todos los botones que existen agregale un evento que captura el click del usuario
     }*/
}


function onClickComment(element) { //esta es mi funcion onclick  
    //necesito almacenar mi comentario by id
    var id = element.getAttribute("atributo-id");
    var comment = document.getElementById("comment_" + id); //selecciona la caja de texto textarea, le sumo el id para poder identificarlo
    var html = comment.value;
    html += '<img onclick="likeAdd(' + id + ')" src="photos/miLike.png"></img>';
    html += '<div id="like_' + id + '"></div>';
    document.getElementById("message_" + id).innerHTML = html;
    var comentario = new Comentario(id, comment.value, 0);
    commentArray.push(comentario);
    console.log(commentArray);
}

function likeAdd(id) {
    //recuperar el id para saber cuantos like hay en cada uno
    var fComment = (commentArray.filter(comment => comment.id_miembro == id))[0];
    fComment.likes++;
    document.getElementById("like_" + id).innerHTML = fComment.likes;
}