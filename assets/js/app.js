window.addEventListener('load', function(evento){
  event.preventDefault();

  var cajaContenedor = document.getElementById('caja-contenedor');

  var coders = ['','Fiorella Quispe','Lourdes vilchez','Leydi Madonado','Yessica ',
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


  var ul = document.createElement('ul');
  var li= document.createElement('li');
  var div = document.createElement('div');
  var figure = document.createElement('figure');
  var imagen = document.createElement('img');
  var figcaption = document.createElement('figcaption');
  var span = document.createElement('span');

  for (var i = 0; i < 55; i++) {
    var urlImg = 'assets/img/'+i+'.png';
    imagen.setAttribute('src', urlImg);

    figure.appendChild(imagen);
    figure.setAttribute ('class','contenedor');

    div.appendChild(figure);
    div.setAttribute('class','box');

    li.appendChild(div);
    li.setAttribute('class','grid');

  }
  cajaContenedor.appendChild(li);
})

/*
<li class="grid">
  <div class="box">
    <figure class="contenedor">
      <img src="assets/img/2.png" class="coders" alt="nombre">
      <figcaption>
        <span>Nombre Coder 2</span>
      </figcaption>
    </figure>
  </div>
</li>
*/
