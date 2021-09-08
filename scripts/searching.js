// var showDiv = document.getElementById("showDiv");
// var suggestionsDiv = document.getElementById("suggestionsDiv");

var timerId;
function debounce(func, delay, showDiv, suggestionsDiv, name) {
  console.log(name);
  if (timerId) {
    console.log("-------------------------");
    clearTimeout(timerId);
  }

  timerId = setTimeout(function () {
    console.log(name, suggestionsDiv);
    func(suggestionsDiv, name);
  }, delay);
}

async function main(suggestionsDiv, name) {
  console.log(name);
  if (name == "") {
    suggestionsDiv.innerHTML = "";
    return;
  }
  let mealsArr = await search(name);
  console.log(mealsArr);
  suggestionsDiv.innerHTML = "";
  if (mealsArr == undefined) {
    return;
  }

  apend(mealsArr);
}

async function search(n) {
  try {
    var res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${n}`
    );
    //www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
    var data = await res.json();
    // console.log(data);
    return data.meals;
  } catch (error) {
    console.log(error);
  }
}
var myElement;
function apend(arr) {
  console.log(arr);
  arr.forEach(({ strMeal, idMeal }) => {
    console.log(strMeal);
    let pDiv = document.createElement("div");
    pDiv.id = idMeal;
    pDiv.classList.add("clickClass");
    pDiv.addEventListener("click", () => {
      myElement = document.getElementById(idMeal);
      // console.log(myElement);
      // mainView();
    });

    let p = document.createElement("p");
    p.innerHTML = strMeal;
    pDiv.append(p);
    suggestionsDiv.append(pDiv);
  });
}

export { debounce, main, search, apend, myElement };
