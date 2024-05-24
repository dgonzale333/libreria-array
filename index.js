let libros = [
    {
        titulo: "El Quijote",
        autor: "Miguel de Cervantes",
        genero: "Ficción",
        idioma: "Español",
        precio: 80000,
        formato: "Tapa dura",
        isbn: "9781234567890",
        descripcion: "Una novela clásica de la literatura española.",
        estado: "Nuevo",
        ubicacion: "Madrid, España",
        fecha_publicacion: "1605-01-16",
        editorial: "Editorial 1",
        paginas: 1200,
        dimensiones: "15x5x20 cm",
        peso: "1.2 kg"
    },
    {
        titulo: "1984",
        autor: "George Orwell",
        genero: "Ciencia ficción",
        idioma: "Inglés",
        precio: 40000,
        formato: "Tapa blanda",
        isbn: "9789876543210",
        descripcion: "Una novela distópica sobre un futuro totalitario.",
        estado: "Usado",
        ubicacion: "Londres, Reino Unido",
        fecha_publicacion: "1949-06-08",
        editorial: "Editorial 1",
        paginas: 328,
        dimensiones: "13x2x20 cm",
        peso: "0.5 kg"
    },
    {
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        genero: "Realismo mágico",
        idioma: "Español",
        precio: 47000,
        formato: "Tapa dura",
        isbn: "9788497592208",
        descripcion: "Una obra maestra de la literatura latinoamericana.",
        estado: "Nuevo",
        ubicacion: "Bogotá, Colombia",
        fecha_publicacion: "1967-06-05",
        editorial: " Editorial 1",
        paginas: 417,
        dimensiones: "14x4x21 cm",
        peso: "0.8 kg"
    },
    {
        titulo: "Matar a un ruiseñor",
        autor: "Harper Lee",
        genero: "Ficción",
        idioma: "Inglés",
        precio: 65000,
        formato: "Tapa blanda",
        isbn: "9780061120084",
        descripcion: "Una novela sobre la injusticia racial en el sur de Estados Unidos.",
        estado: "Nuevo",
        ubicacion: "Nueva York, Estados Unidos",
        fecha_publicacion: "1960-07-11",
        editorial: "Editorial 1",
        paginas: 324,
        dimensiones: "14x2x21 cm",
        peso: "0.6 kg"
    },
    {
        titulo: "El señor de los anillos",
        autor: "J.R.R. Tolkien",
        genero: "Fantasía",
        idioma: "Inglés",
        precio: 60000,
        formato: "Tapa dura",
        isbn: "9780261102385",
        descripcion: "Una épica saga de aventuras en la Tierra Media.",
        estado: "Nuevo",
        ubicacion: "Londres, Reino Unido",
        fecha_publicacion: "1954-07-29",
        editorial: "Editorial 1",
        paginas: 1178,
        dimensiones: "16x6x24 cm",
        peso: "2.0 kg"
    },
    {
        titulo: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        genero: "Ficción",
        idioma: "Español",
        precio: 90000,
        formato: "Tapa dura",
        isbn: "9781234567891",
        descripcion: "Una novela clásica de la literatura española.",
        estado: "Nuevo",
        ubicacion: "Madrid, España",
        fecha_publicacion: "1605-01-16",
        editorial: "Editorial 2",
        paginas: 1200,
        dimensiones: "15x5x20 cm",
        peso: "1.2 kg"
    },
    {
        titulo: "Orgullo y prejuicio",
        autor: "Jane Austen",
        genero: "Romance",
        idioma: "Inglés",
        precio: 35000,
        formato: "Tapa blanda",
        isbn: "9780199535569",
        descripcion: "Una novela sobre la vida y los amores de las hermanas Bennet.",
        estado: "Usado",
        ubicacion: "Bath, Reino Unido",
        fecha_publicacion: "1813-01-28",
        editorial: "Editorial 2",
        paginas: 279,
        dimensiones: "13x2x19 cm",
        peso: "0.4 kg"
    },
    {
        titulo: "Crimen y castigo",
        autor: "Fyodor Dostoyevsky",
        genero: "Ficción",
        idioma: "Ruso",
        precio: 39000,
        formato: "Tapa blanda",
        isbn: "9780140449136",
        descripcion: "Una novela sobre la moralidad y la justicia.",
        estado: "Nuevo",
        ubicacion: "San Petersburgo, Rusia",
        fecha_publicacion: "1866-01-01",
        editorial: "Editorial 2",
        paginas: 671,
        dimensiones: "14x3x21 cm",
        peso: "0.7 kg"
    },
    {
        titulo: "La metamorfosis",
        autor: "Franz Kafka",
        genero: "Ficción",
        idioma: "Alemán",
        precio: 47000,
        formato: "Tapa blanda",
        isbn: "9780805208956",
        descripcion: "Una novela corta sobre un hombre que se convierte en un insecto gigante.",
        estado: "Nuevo",
        ubicacion: "Praga, República Checa",
        fecha_publicacion: "1915-01-01",
        editorial: "Editorial 2",
        paginas: 201,
        dimensiones: "12x1x19 cm",
        peso: "0.3 kg"
    },
    {
        titulo: "El gran Gatsby",
        autor: "F. Scott Fitzgerald",
        genero: "Ficción",
        idioma: "Inglés",
        precio: 47000,
        formato: "Tapa blanda",
        isbn: "9780743273565",
        descripcion: "Una novela sobre el sueño americano en los años 20.",
        estado: "Nuevo",
        ubicacion: "Nueva York, Estados Unidos",
        fecha_publicacion: "1925-04-10",
        editorial: "Editorial 2",
        paginas: 180,
        dimensiones: "14x1x20 cm",
        peso: "0.4 kg"
    },
    {
        titulo: "El retrato de Dorian Gray",
        autor: "Oscar Wilde",
        genero: "Ficción",
        idioma: "Inglés",
        precio: 20000,
        formato: "Tapa blanda",
        isbn: "9780141439570",
        descripcion: "Una novela sobre un hombre que no envejece.",
        estado: "Usado",
        ubicacion: "Londres, Reino Unido",
        fecha_publicacion: "1890-06-20",
        editorial: "Editorial 3",
        paginas: 254,
        dimensiones: "14x2x21 cm",
        peso: "0.5 kg"
    },
    {
        titulo: "Ulises",
        autor: "James Joyce",
        genero: "Ficción",
        idioma: "Inglés",
        precio: 170000,
        formato: "Tapa blanda",
        isbn: "9780199535675",
        descripcion: "Una novela modernista sobre un día en la vida de Leopold Bloom.",
        estado: "Nuevo",
        ubicacion: "Dublín, Irlanda",
        fecha_publicacion: "1922-02-02",
        editorial: "Editorial 3",
        paginas: 732,
        dimensiones: "15x4x22 cm",
        peso: "1.1 kg"
    },
    {
        titulo: "En busca del tiempo perdido",
        autor: "Marcel Proust",
        genero: "Ficción",
        idioma: "Francés",
        precio: 60000,
        formato: "Tapa dura",
        isbn: "9782070409376",
        descripcion: "Una novela en siete volúmenes sobre la memoria involuntaria.",
        estado: "Nuevo",
        ubicacion: "París, Francia",
        fecha_publicacion: "1913-11-14",
        editorial: "Editorial 3",
        paginas: 4215,
        dimensiones: "17x10x24 cm",
        peso: "3.0 kg"
    },
    {
        titulo: "Moby Dick",
        autor: "Herman Melville",
        genero: "Aventura",
        idioma: "Inglés",
        precio: 59000,
        formato: "Tapa dura",
        isbn: "9781503280786",
        descripcion: "Una novela sobre la caza de una ballena blanca gigante.",
        estado: "Nuevo",
        ubicacion: "Nantucket, Estados Unidos",
        fecha_publicacion: "1851-10-18",
        editorial: "Editorial 3",
        paginas: 635,
        dimensiones: "15x4x22 cm",
        peso: "1.0 kg"
    },
    {
        titulo: "El alquimista",
        autor: "Paulo Coelho",
        genero: "Ficción",
        idioma: "Español",
        precio: 49000,
        formato: "Tapa blanda",
        isbn: "9780061122415",
        descripcion: "Una novela sobre seguir tus sueños y encontrar tu destino.",
        estado: "Nuevo",
        ubicacion: "Santiago, Chile",
        fecha_publicacion: "1988-01-01",
        editorial: "Editorial 3",
        paginas: 208
    },
    {
        titulo: "Harry Potter y la piedra filosofal",
        autor: "J.K. Rowling",
        genero: "Fantasía",
        idioma: "Inglés",
        precio: 160000,
        formato: "Tapa dura",
        isbn: "9780590353427",
        descripcion: "El primer libro de la famosa serie de Harry Potter.",
        estado: "Nuevo",
        ubicacion: "Londres, Reino Unido",
        fecha_publicacion: "1997-06-26",
        editorial: "Editorial 4",
        paginas: 352
    },
    {
        titulo: "El código Da Vinci",
        autor: "Dan Brown",
        genero: "Ficción",
        idioma: "Español",
        precio: 45000,
        formato: "Tapa blanda",
        isbn: "9780307474278",
        descripcion: "Una novela de intriga que mezcla historia y conspiración.",
        estado: "Usado",
        ubicacion: "París, Francia",
        fecha_publicacion: "2003-03-18",
        editorial: "Editorial 4",
        paginas: 624
    },
    {
        titulo: "La sombra del viento",
        autor: "Carlos Ruiz Zafón",
        genero: "Ficción",
        idioma: "Español",
        precio: 50000,
        formato: "Tapa dura",
        isbn: "9788401337800",
        descripcion: "Una historia de misterio y amor en la Barcelona de posguerra.",
        estado: "Nuevo",
        ubicacion: "Barcelona, España",
        fecha_publicacion: "2001-04-01",
        editorial: "Editorial 4",
        paginas: 512
    },
    {
        titulo: "El Hobbit",
        autor: "J.R.R. Tolkien",
        genero: "Fantasía",
        idioma: "Inglés",
        precio: 79000,
        formato: "Tapa blanda",
        isbn: "9780345339683",
        descripcion: "La historia del hobbit Bilbo Bolsón y su aventura para recuperar el tesoro de Smaug.",
        estado: "Nuevo",
        ubicacion: "Londres, Reino Unido",
        fecha_publicacion: "1937-09-21",
        editorial: "Editorial 4",
        paginas: 322
    },
    {
        titulo: "Los juegos del hambre",
        autor: "Suzanne Collins",
        genero: "Ciencia ficción",
        idioma: "Inglés",
        precio: 35000,
        formato: "Tapa blanda",
        isbn: "9788427202122",
        descripcion: "Una saga distópica sobre una competencia mortal televisada.",
        estado: "Usado",
        ubicacion: "Atlanta, Estados Unidos",
        fecha_publicacion: "2008-09-14",
        editorial: "Editorial 4",
        paginas: 416,
    },


]


const nuevoLibro = {
    titulo: "El Ciclo del Hombre lobo",
    autor: "Stephen King",
    genero: "Suspenso y Terror",
    idioma: "Español",
    precio: 39000,
    formato: "Tapa blanda",
    isbn: "9786287513631",
    descripcion: "El primer grito fue el de un ferroviario aislado por la nieve, cuando sintió unos colmillos desgarrando su garganta.",
    estado: "Nuevo",
    ubicacion: "Londres",
    fecha_publicacion: "1983-10-19",
    editorial: "Editorial w",
    paginas: 189,
    dimensiones: "13 X 19 cm",
    peso: "50 GRS"
};


function mostrarMenu() {
    console.log("Seleccione una opción:");
    console.log("1. Mostrar pila de libros");
    console.log("2. Añadir un libro a la pila");
    console.log("3. Quitar el último libro de la pila");
    console.log("4. Mostrar la longitud de la pila");
    console.log("5. Mostrar lista");
    console.log("6. Salir");
    }
    
    function mostrarLibros(libros) {
    console.table( libros);
    }
    
    function añadirLibro(libros, libro) {
    libros.push(libro);
    console.log(`Libro añadido: ${libro.titulo}`);
    }
    
    function quitarLibro(libros) {
    const libroQuitado = libros.pop();
    if (libroQuitado) {
      console.log(`Libro quitado: ${libroQuitado.titulo}`);
    } else {
      console.log("No hay libros para quitar.");
    }
    }
    
    function mostrarLongitud(libros) {
    console.log(`Longitud del array: ${libros.length}`);
    }


const LibroList = libros.map((libro ) => {
    return{
        titulo:libro.titulo,
        autor:libro.autor,
        precio:libro.precio,
    }
})

const iteraciones1 = libros.map((libro ) => {
    return{
        titulo: libro.titulo,
        genero: libro.genero
    }
})

const iteraciones2 = libros.map((libro ) => {
    return{
        titulo: libro.titulo,
        genero: libro.genero
    }
})

const iteraciones3 = libros.map((libro ) => {
    return{
        titulo: libro.titulo,
        genero: libro.genero
    }
})

const iteraciones4 = libros.map((libro ) => {
    return{
        titulo: libro.titulo,
        genero: libro.genero
    }
})

const iteraciones5 = libros.map((libro ) => {
    return{
        titulo: libro.titulo,
        genero: libro.genero
    }
})

const iteraciones6 = libros.map((libro ) => {
    return{
        titulo: libro.titulo,
        genero: libro.genero
    }
})

const iteraciones7 = libros.map((libro ) => {
    return{
        titulo: libro.titulo,
        genero: libro.genero
    }
})

const iteraciones8 = libros.map((libro ) => {
    return{
        titulo: libro.titulo,
        genero: libro.genero
    }
})

const iteraciones9 = libros.map((libro ) => {
    return{
        titulo: libro.titulo,
        genero: libro.genero
    }
})

const iteraciones10 = libros.map((libro ) => {
    return{
        titulo: libro.titulo,
        genero: libro.genero
    }
})

  
  var continuar = "si";
  
  do {
  mostrarMenu();
  var opcion = prompt("Seleccione una opción:");
  switch (opcion) {
    case '1':
      mostrarLibros(libros);
      break;
    case '2':
      
      añadirLibro(libros, nuevoLibro);
      break;
    case '3':
      quitarLibro(libros);
      break;
    case '4':
      mostrarLongitud(libros);
      break;
    case '5':
      continuar = "no";
      console.log("Saliendo del programa...");
      break;
    default:
      console.log("Opción no válida. Intente de nuevo.");
      break;
  }
  if (continuar !== "no") {
    continuar = prompt("Desea continuar (si/no)").toLowerCase();
  }
  } while (continuar === "si");



