// !Variables
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let weatherCard1 = document.getElementById("weatherCard1");
let weatherCard2 = document.getElementById("weatherCard2");
let weatherCard3 = document.getElementById("weatherCard3");
let apiKey = "2bf4bb3176e34558aa2214530251111";
let timer;
// !functions
searchInput.addEventListener("input", function () {
  let city = searchInput.value.trim();
  clearTimeout(timer);
  if (city.length === 0) {
    alert("Pleas enter the city name");
    return;
  }
  timer = setTimeout(() => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
      .then((response) => response.json())
      .then((data) => {
        let city = data.location.name;
        let day = new Date(data.location.localtime).toLocaleDateString(
          "en-US",
          { weekday: "long" }
        );
        const date = new Date(data.location.localtime).toLocaleDateString(
          "en-US",
          { day: "numeric", month: "long" }
        );
        let temp = data.current.temp_c;
        let icon = data.current.condition.icon;
        let description = data.current.condition.text;
        let humidity = data.current.humidity;
        let wind = data.current.wind_kph;
        let wind_dir = data.current.wind_dir;
        weatherCard1.innerHTML = `
          <div class="card-header d-flex justify-content-between align-items-center">
            <span class="fs-6">${day}</span>
            <span class="fs-6">${date}</span>
          </div>
          <div class="card-body">
            <h6 class="card-title mb-2">${city}</h6>
            <h1 class="display-2 fw-bold mb-3">${temp}<sup>°C</sup></h1>
            <img src="${icon}" class="mb-2" alt="weather icon" />
            <div class="mb-3">${description}</div>
            <div class="weather-indecators d-flex gap-5">
              <span><i class="fa-solid fa-umbrella me-2"></i> ${humidity}%</span>
              <span><i class="fa-solid fa-wind me-2"></i> ${wind}km/h</span>
              <span><i class="fa-solid fa-compass me-2"></i> ${wind_dir}</span>
            </div>
          </div>
        `;

        weatherCard2.innerHTML = `
        <div class="card-header text-center mid-background-head">
                <span class="fs-6">${day}</span>
              </div>
              <div
                class="card-body mid-background d-flex flex-column align-items-center justify-content-center"
              >
                <img
                  src="${icon}"
                  class="mb-2"
                  alt="weather icon"
                />
                <h2 class="fw-bold mb-1">${temp}<sup>°C</sup></h2>
                <div class="mb-2">7.4<sup>°</sup></div>
                <span class="text-info">${description}</span>
              </div>
        `;
        weatherCard3.innerHTML = `
         <div class="card-header text-center">
                <span class="fs-6">${day}</span>
              </div>
              <div
                class="card-body d-flex flex-column align-items-center justify-content-center"
              >
                <img src="${icon}" />
                <h2 class="fw-bold mb-1">${temp}<sup>°C</sup></h2>
                <div class="mb-2">11.3<sup>°</sup></div>
                <span class="text-info">${description}</span>
              </div>
        `;
      })
      .catch((error) => {
        weatherCard1.innerHTML =
          '<div class="text-danger p-3">The city is not avilable</div>';
        console.log(error);
      });
  }, 500);
});
