
document.addEventListener('DOMContentLoaded', () => {
  console.log('Todo ha sido cargado con éxito')

  addTextoSlide()
  addTextoAboutMovie()
  addTextoResume()
})


const addTextoSlide = () => {
  fetch('../data/info-slide.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al obtener información');
    }
    return response.json();
  })
  .then(data => {
    // Info obtenida
    for(let i=0; i<9; i++) {
      const { title, description } = data["knowledge"][i]
      
      const ncTitulo = document.getElementById(`title0${i+1}`)
      const ncDescripcion = document.getElementById(`description0${i+1}`)
      
      ncTitulo.textContent = title
      ncDescripcion.textContent = description
    }

  })
  .catch(error => {
    console.error('Error:', error);
  });
}

const addTextoAboutMovie = () => {
  fetch('../data/info-slide.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al obtener información');
    }
    return response.json();
  })
  .then(data => {
    // Info obtenida
    const { 
      title, originalTitle, review, director, 
      productor, country, year, gen
    } = data["about"];

    document.getElementById('movieTitle').textContent = title
    document.getElementById('movieTitleOriginal').textContent = originalTitle

    const contenidoInfo = document.getElementById('infoMovie')

    review.forEach(element => {
      const parrafo = document.createElement('p')
      parrafo.className = 'reviewMK'
      parrafo.textContent = element

      contenidoInfo.appendChild(parrafo)
    })

    document.getElementById('movieDirector').textContent = director
    document.getElementById('movieProductor').textContent = productor
    document.getElementById('movieCountry').textContent = country
    document.getElementById('movieYear').textContent = year
    document.getElementById('movieGen').textContent = gen
  })
  .catch(e => {
    console.error('Error:', e);
  })
}

const addTextoResume = () => {
  fetch('../data/info-slide.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al obtener información');
    }
    return response.json();
  })
  .then(data => {
    // Info obtenida
    const { inicio, desarrollo, desenlace } = data["resumen"]
    const containerInicio = document.getElementById('inicio')
    const containerDesarrollo = document.getElementById('desarrollo')
    const containerDesenlace = document.getElementById('desenlace')
    
    inicio.forEach(element => {
      const parrafo = document.createElement('p')
      parrafo.textContent = element
      containerInicio.appendChild(parrafo)
    })

    desarrollo.forEach(element => {
      const parrafo = document.createElement('p')
      parrafo.textContent = element
      containerDesarrollo.appendChild(parrafo)
    })

    desenlace.forEach(element => {
      const parrafo = document.createElement('p')
      parrafo.textContent = element
      containerDesenlace.appendChild(parrafo)
    })
  })
  .catch(e => {
    console.error('Error:', e);
  })
}







const handleSliders = () => {
  fetch('info-slide.json')
    .then(Response => {
      if(!Response.ok) {
        throw new Error('Error al leer la data')
      }
      console.log('Se accedió a la informacion')
      return Response.json
    })
    .then(data => {
      for(let i = 0; i < data.knowledge.lenght(); i++) {
        sliders.appendChild(cargarSliders(knowledge, i))
      }
    })
  console.log('Generando todos los slides')


}
