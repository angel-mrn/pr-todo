
document.addEventListener('DOMContentLoaded', () => {
  console.log('Todo ha sido cargado con éxito')

  addTextoSlide()
  addTextoAboutMovie()
  addTextoResume()
  setItemsCharacters()
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

const setItemsCharacters = () => {
  fetch('../data/info-slide.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al obtener información');
    }
    return response.json();
  })
  .then(data => {
    // Info obtenida
    const { characters } = data
    const contenedorLista = document.getElementById('characterList')

    characters.forEach(element => {
      const link = document.createElement('button')
      link.classList.add('list-group-item')
      link.classList.add('list-group-item-action')
      link.classList.add('elementoPersonaje')
      link.value = element.id
      link.textContent = element.personaje

      link.setAttribute('type', 'button')
      link.setAttribute('data-bs-toggle', 'modal')
      link.setAttribute('data-bs-target', '#exampleModal')

      contenedorLista.appendChild(link)
    })

    const elementosPersonajes = document.querySelectorAll('.elementoPersonaje')

    const tituloModal = document.getElementById('exampleModalLabel')
    const cuerpoModal = document.getElementById('textModalCharacter')

    elementosPersonajes.forEach(element => {
      element.addEventListener('click', () => {
        const { id, personaje, actor, descripcion } = characters[element.value]
        
        tituloModal.textContent = personaje

        const parrafo = document.createElement('p')
        parrafo.innerHTML = `Interpretado por: <strong>${actor}</strong>.`
        const otroParrafo = document.createElement('p')
        otroParrafo.textContent = descripcion

        const imagen = document.createElement('img')
        imagen.setAttribute('src', `../imgs/character/0${id}.jpg`)
        imagen.setAttribute('alt', 'Foto del personaje')
        imagen.classList.add('w-100')

        cuerpoModal.innerHTML = ''

        cuerpoModal.appendChild(parrafo)
        cuerpoModal.appendChild(otroParrafo)
        cuerpoModal.appendChild(imagen)
      })
    })

  })
  .catch(e => {
    console.error('Error:', e);
  })
}