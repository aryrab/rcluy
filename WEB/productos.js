const productos = [
  { id:1, categoria:"mates", nombre:"Mate Camionero", descripcion:"Calabaza clásica.", precio:790, imagenes:["fotos/matera.jpg"] },
  { id:2, categoria:"mates", nombre:"Mate Porongo", descripcion:"Virola de acero", precio:890, imagenes:[] },
  { id:4, categoria:"combos", nombre:"Combo Iniciación", descripcion:"Mate + bombilla + yerba.", precio:2200, imagenes:[] },
  { 
    id: 10, 
    categoria: "personalizados", 
    nombre: "Mate Imperial Personalizado", 
    descripcion: "Calabaza forrada en cuero, virola alpaca. Armalo a tu gusto.", 
    precio: 1450, 
    imagenes: [
      // Acá podés poner las rutas de tus fotos, ejemplo:
    "fotos/imperial.jpg",
    "fotos/matera.jpg",
    ], 
    personalizable: true, 
    precioGrabado: 250, 
    opciones: [
      {
        idOpcion: "color", nombre: "Color del cuero",
        valores: [
          { nombre: "Negro", extra: 0 }, { nombre: "Marrón", extra: 0 }, { nombre: "Cuero Crudo", extra: 200 }
        ]
      },
      {
        idOpcion: "guarda", nombre: "Guarda / Fleje",
        valores: [
          { nombre: "Pampa Uruguaya", extra: 0, imgrel: "" }, 
          { nombre: "Pampa Brasil", extra: 0, imgrel: "" }, 
          { nombre: "Espejo", extra: 0, imgrel: "" }
        ]
      },
      {
        idOpcion: "material", nombre: "Material interior",
        valores: [
          { nombre: "Calabaza", extra: 0 }, { nombre: "Cerámica", extra: 0 }
        ]
      }
    ],
    apliques: [
      { idAplique: "letras", nombre: "Letras/Números", precio: 200 },
      { idAplique: "escudo_nacional", nombre: "Escudos Peñarol/Nacional", precio: 400 },
      { idAplique: "escudo_otros", nombre: "Otros Escudos", precio: 500 }
    ]
  }
];