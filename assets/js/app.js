document.getElementById("toggle").addEventListener("click", function(evento){
  evento.preventDefault();
  document.getElementById("nav-header").classList.toggle("open");
  document.getElementById('body').classList.toggle("overflow-hidden");
});

var lastScrollTop = 0;

window.addEventListener("scroll", function(){
   var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
   if (currentScroll > lastScrollTop){
     document.getElementById('nav-background').style.display="none";
     document.getElementById("nav-header").classList.remove("header-in");
     document.getElementById("nav-header").style.opacity = 0;
   } else {
     document.getElementById('nav-background').style.display="table";
     document.getElementById("nav-header").classList.add("header-in");
     document.getElementById("nav-header").classList.add("solid");
     document.getElementById("nav-header").style.opacity = 1;
     if(currentScroll<=3){
       document.getElementById("nav-header").classList.remove("solid");
       document.getElementById("nav-header").classList.remove("header-in");
     }
   }

   lastScrollTop = currentScroll;
}, false);

window.addEventListener('load', function(evento){
  event.preventDefault();

  //Llamaa al section
  var cajaContenedor = document.getElementById('caja-contenedor');

  //Array de las coders
  var coders = ['','Fiorella Quispe','Lourdes vilchez','Leydi Madonado','Yessica Huaman',
                    'Miriam Mendoza', 'Elizabeth Condori', 'Arantza Burga', 'Grecia Rayme',
                    'Janine Vega', 'Rosario Félix', 'Daguiana Revolledo', 'Jenny Velasquez',
                    'Nadia Cuadros','Michelle More', 'Marilu Llamoca', 'Mariel García',
                    'Fiorella Cisneros', 'Geraldine Chauca', 'Yelitza Choque',
                    'Stephanie Hiyagon', 'Rocio Tapia', 'Dana Franco', 'Flor Retamoso',
                    'Nathaly Pacheco', 'Erika Vidal', 'Katherine Ortega', 'Brilly Majuan',
                    'Flor de Cantuta','Leslie Avendaño', 'Cindy Mendoza', 'Annia Flores',
                    'Betsi Loayza', 'Ayda Sulca', 'Milagros Gutierrez','Nakarid Jave', 'Angie Condor',
                    'Maricarmen Rojas', 'Ariana Cabana', 'Flor Tello', 'Mitchell Rodríguez',
                    'Naomi Villanueva', 'Mary Castillo', 'Miriam Peralta', 'Karin Alejo',
                    'Consultar', 'Ruth Salvador','Marilu Llamoca', 'Wendy Reyes', 'Consultar2',
                    'Maria Grecia Cutipa', 'Ana Durand', 'Glisse Jorge', 'Neiza Nuñez',
                    'Sandra Solorzano'];

  //Iterará todas las coders y creará las etiquetas
  for (var i = 1; i < 55; i++) {
    var urlImg = 'assets/img/'+i+'.png';
    var li= document.createElement('li');
    var div = document.createElement('div');
    var figure = document.createElement('figure');
    var imagen = document.createElement('img');
    var figcaption = document.createElement('figcaption');
    var span = document.createElement('span');

    //Creará el atributo src - url de las imágenes
    imagen.setAttribute('src', urlImg);
    imagen.setAttribute('class', 'coders');

    figure.appendChild(imagen);
    figure.setAttribute ('class','contenedor');

    span.innerText= coders[i];
    span.setAttribute('class','nombre-coder');
    figcaption.appendChild(span);
    figure.appendChild(figcaption);

    div.appendChild(figure);
    div.setAttribute('class','box');

    li.appendChild(div);
    li.setAttribute('class','grid');

    cajaContenedor.appendChild(li);
  }
})
