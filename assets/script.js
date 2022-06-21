const divContainer = document.getElementById("apiNews");

var requestUrl = "https://api.github.com/users/geoescobar/repos";

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    for (let i = 0; i < 100; i++) {
      const divElement = document.createElement("div");
      divElement.setAttribute("class", "api-news");
      const aTag = document.createElement("a");
      aTag.setAttribute("class", "repo");
      aTag.textContent = data[i].name;
      aTag.setAttribute("href", data[i].svn_url);
      aTag.setAttribute("target", "_blank");
      divElement.appendChild(aTag);
      divContainer.appendChild(divElement);
    }
  });
