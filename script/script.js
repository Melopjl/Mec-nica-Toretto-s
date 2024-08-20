async function fetchCharData(){
    try {
        const response = await fetch('dados.json');
        const carsData = await response();

        return carsData;

    } catch (error) {
        console.error(' Deu erro ao carregar os dados dos carros: ', error);

        return[]

    } 
}

function renderCards(){
    const cardContainer = document.getElementById('car-cards');
    //limpar o card que eventualemnte esteja carregado antes
    cardContainer.innerHTML = '';

    const filteredCars = brand === 'todos' ? carsData : carsData.filter (car => car.brand === brand);

    filteredCars.array.forEach(car => {
        //fazer isso para preço,km,marcar etc.
        const card = 
        `<div class="card cars-card" style="width: 18rem;">
        <img src="${car.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${car.name}</h5>
          <p class="card-text">${car.price}</p>
          <p class="card-text">${car.brand}</p>
          <p class="card-text">${car.year}</p>
          <p class="card-text">${car.km}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`;

      cardContainer.innerHTML += card;
        
    });
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', async(e) => {
        e.preventDefault();
        const brand = e.target.getAttribute('data-brand');
        const carsData = awaitfetchCardData();
        renderCards(CarsData, brand);
    }); 

    //render inicial

    fetchCharData().then(carsData => renderCards(CarsData, 'todos'));
})
