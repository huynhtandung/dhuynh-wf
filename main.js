const input = document.querySelector(".txtCity");
const ul = document.querySelector("ul");
const result = document.querySelector(".result");

function getImage(weather) {
  switch (weather) {
    case "Clear": {
      return "./images/sun.png";
    }
    case "Clouds": {
      return "./images/cloud.png";
    }
    case "Rain": {
      return "./images/rain.png";
    }
    default: {
      return "./images/icon.png";
    }
  }
}

function createResult(img, city, weather, temp, humidity, sunRaise, sunSet) {
  return `
      <img src="${img}" />
      <p><strong><span class="city">${city}, Việt Nam</span></strong></p>
      <p><strong><span class="status">${weather}</span></strong></p>
      <p><strong>Temperature: <span class="temp">${temp}°C</span></strong></p>
      <p><strong>Humidity: <span class="humidity">${humidity}%</span></strong></p>
      <p><strong>Sunrise at: <span class="sun-raise">${sunRaise}</span></strong></p>
      <p><strong>Sunset at: <span class="sun-set">${sunSet}</span></strong></p>`;
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Browser does not support");
  }
}

async function showPosition(position) {
  try {
    const api = createApi(position.coords.latitude, position.coords.longitude);
    console.log(api);
    let response = await fetch(api);
    if (response.ok) {
      let json = await response.json();
      let data = json.current;

      result.innerHTML = createResult(
        getImage(data.weather[0].main),
        "Local",
        data.weather[0].main,
        Math.round(data.temp - 273),
        data.humidity,
        new Date(data.sunrise * 1000).getHours() +
          "h" +
          new Date(data.sunrise * 1000).getMinutes(),
        new Date(data.sunset * 1000).getHours() +
          "h" +
          new Date(data.sunset * 1000).getMinutes()
      );
    } else {
      console.error("Fail to get resource");
    }
  } catch (err) {}
}

getLocation();
showPosition();

let value = "";
let timeOut = null;

input.addEventListener("keydown", async () => {
  let xhtml = "";
  let _city = "";
  timeOut && clearTimeout(timeOut);

  result.innerHTML = "";

  timeOut = setTimeout(() => {
    value = input.value;

    cities.map((city, index) => {
      if (
        removeAccents(city.name).toLowerCase().includes(value.toLowerCase()) ||
        city.name.toLowerCase().includes(value.toLowerCase())
      ) {
        xhtml += `<li data-location="${city.lat}-${city.lng}">${city.name}</li>`;
      }
    });

    ul.innerHTML = "";
    value && (ul.innerHTML = xhtml);

    const liElements = document.querySelectorAll("li");
    liElements.forEach((li) => {
      li.addEventListener("click", async (e) => {
        ul.innerHTML = "";
        input.value = e.target.innerHTML;
        _city = e.target.innerHTML;
        const location = e.target.dataset.location.split("-");
        const api = createApi(location[0], location[1]);
        //fetch data
        let response = await fetch(api);
        if (response.ok) {
          let json = await response.json();
          let data = json.current;

          result.innerHTML = createResult(
            getImage(data.weather[0].main),
            _city,
            data.weather[0].main,
            Math.round(data.temp - 273),
            data.humidity,
            new Date(data.sunrise * 1000).getHours() +
              "h" +
              new Date(data.sunrise * 1000).getMinutes(),
            new Date(data.sunset * 1000).getHours() +
              "h" +
              new Date(data.sunset * 1000).getMinutes()
          );
        } else {
          console.error("Fail to get resource");
        }
      });
    });
  }, 500);

  function removeAccents(str) {
    var AccentsMap = [
      "aàảãáạăằẳẵắặâầẩẫấậ",
      "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
      "dđ",
      "DĐ",
      "eèẻẽéẹêềểễếệ",
      "EÈẺẼÉẸÊỀỂỄẾỆ",
      "iìỉĩíị",
      "IÌỈĨÍỊ",
      "oòỏõóọôồổỗốộơờởỡớợ",
      "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
      "uùủũúụưừửữứự",
      "UÙỦŨÚỤƯỪỬỮỨỰ",
      "yỳỷỹýỵ",
      "YỲỶỸÝỴ",
    ];
    for (var i = 0; i < AccentsMap.length; i++) {
      var re = new RegExp("[" + AccentsMap[i].substr(1) + "]", "g");
      var char = AccentsMap[i][0];
      str = str.replace(re, char);
    }
    return str;
  }
});
