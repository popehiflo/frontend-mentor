// Change theme
const btnTheme = document.querySelector('.btn-theme');

btnTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  // change icon for theme
  if(document.body.className == 'dark') {
    btnTheme.innerHTML = `
      <i class="fa-solid fa-sun"></i>
      Light Mode
    `;
  } else {
    btnTheme.innerHTML = `
    <i class="fa-solid fa-moon"></i>
    Dark Mode
  `;
  }
});

// API 
const listCountries = document.getElementById('countries')

document.addEventListener("DOMContentLoaded", e => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch('https://restcountries.com/v3.1/all')
        const data = await res.json()
        console.log(data)
        countries(data)
        
    } catch (error) {
        console.log(error)
    }
}

const countries = data => {
    let elements = ''
    data.forEach(item => {
        elements += `
        <article class="card">
            <img src="${item.flags.png}" alt="" class="img-fluid">
            <div class="card-content">
                <h3>${item.name.common}</h3>
                <p>
                    <b>Population: </b>
                    ${item.population}
                </p>
                <p>
                    <b>Capital: </b>
                    ${item.capital}
                </p>
                <p>
                    <b>Region: </b>
                    ${item.region}
                </p>
                <p>
                    <a href="country.html?name=${item.name.common}">More info</a>
                </p>
            </div>
        </article>
        `
    });
    listCountries.innerHTML = elements
}