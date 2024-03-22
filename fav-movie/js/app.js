
document.addEventListener('DOMContentLoaded', function() {
  console.log('Todo ha sido cargado con éxito')

  addTextoSlide()
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
