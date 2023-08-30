(function () {
  //protect the code
  var form = document.getElementById("form"), //el método getElementById, conecta el formulario con el código de javascript, permitiendo traer todo lo escrito
    nombre = form.nombre, //en la variable nombre se almacena lo escrito en el input nombre
    email = form.email,
    gender = form.gender,
    terms = form.terms,
    error = document.getElementById("error");

  function validateName(e) {
    if (nombre.value == "" || nombre.value == null) {
      //verifica si la variable está vacía
      error.style.display = "block"; //agrega el diseño del mensaje de error
      error.innerHTML += "<li>Write your name</li>"; //concatena los mensajes para luego mostrarlos en la página
      e.preventDefault(); //método que muestra la alerta del error
    } else {
      error.style.display = "none"; //si el usuario ingreso la información no se coloca ningún diseño
    }
  }

  function validateEmail(e) {
    if (email.value == "" || email.value == null) {
      error.style.display = "block";
      error.innerHTML += "<li>Write your email</li>";
      e.preventDefault();
    } else {
      error.style.display = "none";
    }
  }

  function validateGender(e) {
    if (gender.value == "" || gender.value == null) {
      error.style.display = "block";
      error.innerHTML += "<li>Choose a gender</li>";
      e.preventDefault();
    } else {
      error.style.display = "none";
    }
  }

  function validateTerms(e) {
    if (terms.checked == false) {
      error.style.display = "block";
      error.innerHTML += "<li>Accept the terms</li>";
      e.preventDefault();
    } else {
      error.style.display = "none";
    }
  }

  function printData(e) {
    if (error.style.display == "none") {
      alert(
        "The register: " + nombre.value + " - " + email.value + " was saved."
      );
      error.style.display = "block";
      error.innerHTML = nombre.value + "<br>" + email.value;
      e.preventDefault();
      form.clear();
      // document.write("Data: " + nombre.value);
    }
  }

  function validateForm(e) {
    //parecido al método main en java, su función es llamar a las otras funciones que se encuentran en la parte superior
    error.innerHTML = ""; //método de la clase document que permite mostrar los mensajes de error
    validateName(e); //la letra "e" es un parámetro que se envía a las funciones para que permita llamar métodos de la clase "document" y así mostrar los errores en el formulario de html
    validateEmail(e);
    validateGender(e);
    validateTerms(e);
    printData(e);
  }

  form.addEventListener("submit", validateForm); //relaciona el nombre del botón que se encuentra en el html, para cuando el usuario de clic ejecute la función "validateForm" y por ende todas las otras funciones
})();
