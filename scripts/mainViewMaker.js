function mainView(Element, showDiv) {
  console.log(Element.id);
  appendMain(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${Element.id}`,
    showDiv
  );
}

async function appendMain(url, showDiv) {
  try {
    var res = await fetch(url);
    //www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
    //console.log(res);
    var data = await res.json();
    console.log(data);
    //return data.meals;
  } catch (error) {
    console.log(error);
  }
  showDiv.innerHTML = "";
  mainAppender(data.meals, showDiv);
}

function mainAppender(arr, showDiv) {
  arr.forEach(
    ({
      strMeal,
      strArea,
      strCategory,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
      strIngredient6,
      strIngredient7,
      strIngredient8,
      strIngredient9,
      strIngredient10,
      strIngredient11,
      strIngredient12,
      strIngredient13,
      strIngredient14,
      strIngredient15,
      strIngredient16,
      strIngredient17,
      strIngredient18,
      strIngredient19,
      strIngredient20,
      strMeasure1,
      strMeasure2,
      strMeasure3,
      strMeasure4,
      strMeasure5,
      strMeasure6,
      strMeasure7,
      strMeasure8,
      strMeasure9,
      strMeasure10,
      strMeasure11,
      strMeasure12,
      strMeasure13,
      strMeasure14,
      strMeasure15,
      strMeasure16,
      strMeasure17,
      strMeasure18,
      strMeasure19,
      strMeasure20,
      strInstructions,
      strMealThumb,
      strSource,
      strYoutube,
    }) => {
      let h1 = document.createElement("h1");
      h1.innerHTML = strMeal;
      let div1 = document.createElement("div");
      let p1 = document.createElement("p");
      p1.innerHTML = `Category - ${strCategory}`;
      let p2 = document.createElement("p");
      p2.innerHTML = `Originated from - ${strArea}`;
      div1.append(p1, p2);

      let div2 = document.createElement("div");
      let p3 = document.createElement("h2");
      p3.innerHTML = `Ingredients `;
      div2.append(p3);
      if (strIngredient1 != null && strIngredient1 != "") {
        let p3 = document.createElement("p");
        p3.innerHTML = `${strIngredient1} -${strMeasure1} `;
        div2.append(p3);
      }
      if (strIngredient2 != null && strIngredient2 != "") {
        let p3 = document.createElement("p");
        p3.innerHTML = `${strIngredient2} -${strMeasure2} `;
        div2.append(p3);
      }
      if (strIngredient3 != null && strIngredient3 != "") {
        let p3 = document.createElement("p");
        p3.innerHTML = `${strIngredient3} -${strMeasure3} `;
        div2.append(p3);
      }
      if (strIngredient4 != null && strIngredient4 != "") {
        let p3 = document.createElement("p");
        p3.innerHTML = `${strIngredient4} -${strMeasure4} `;
        div2.append(p3);
      }
      if (strIngredient5 != null && strIngredient5 != "") {
        let p3 = document.createElement("p");
        p3.innerHTML = `${strIngredient5} -${strMeasure5} `;
        div2.append(p3);
      }
      if (strIngredient6 != null && strIngredient6 != "") {
        let p3 = document.createElement("p");
        p3.innerHTML = `${strIngredient6} -${strMeasure6} `;
        div2.append(p3);
      }
      if (strIngredient7 != null && strIngredient7 != "") {
        let p3 = document.createElement("p");
        p3.innerHTML = `${strIngredient7} -${strMeasure7} `;
        div2.append(p3);
      }
      if (strIngredient8 != null && strIngredient8 != "") {
        let p3 = document.createElement("p");
        p3.innerHTML = `${strIngredient8} -${strMeasure8} `;
        div2.append(p3);
      }
      if (strIngredient9 != null && strIngredient9 != "") {
        let p3 = document.createElement("p");
        p3.innerHTML = `${strIngredient9} -${strMeasure9} `;
        div2.append(p3);
      }
      if (strIngredient10 != null && strIngredient10 != "") {
        let p3 = document.createElement("p");
        p3.innerHTML = `${strIngredient10} -${strMeasure10} `;
        div2.append(p3);
      }
      if (strIngredient11 != null && strIngredient11 != "") {
        let p3 = document.createElement("p");
        p3.innerHTML = `${strIngredient11} -${strMeasure11} `;
        div2.append(p3);
      }
      if (strIngredient12 != null && strIngredient12 != "") {
        let p3 = document.createElement("p");
        p3.innerHTML = `${strIngredient12} -${strMeasure12} `;
        div2.append(p3);
      }
      if (strIngredient13 != null && strIngredient13 != "") {
        let p3 = document.createElement("p");
        p3.innerHTML = `${strIngredient13} -${strMeasure13} `;
        div2.append(p3);
      }
      if (strIngredient14 != null && strIngredient14 != "") {
        let p3 = document.createElement("p");
        p3.innerHTML = `${strIngredient14} -${strMeasure14} `;
        div2.append(p3);
      }
      if (strIngredient15 != null && strIngredient15 != "") {
        let p3 = document.createElement("p");
        p3.innerHTML = `${strIngredient15} -${strMeasure15} `;
        div2.append(p3);
      }
      if (strIngredient16 != null && strIngredient16 != "") {
        let p3 = document.createElement("p");
        p3.innerHTML = `${strIngredient16} -${strMeasure16} `;
        div2.append(p3);
      }
      if (strIngredient17 != null && strIngredient17 != "") {
        let p3 = document.createElement("p");
        p3.innerHTML = `${strIngredient17} -${strMeasure17} `;
        div2.append(p3);
      }
      if (strIngredient18 != null && strIngredient18 != "") {
        let p3 = document.createElement("p");
        p3.innerHTML = `${strIngredient18} -${strMeasure18} `;
        div2.append(p3);
      }
      if (strIngredient19 != null && strIngredient19 != "") {
        let p3 = document.createElement("p");
        p3.innerHTML = `${strIngredient19} -${strMeasure19} `;
        div2.append(p3);
      }
      if (strIngredient20 != null && strIngredient20 != "") {
        let p3 = document.createElement("p");
        p3.innerHTML = `${strIngredient20} -${strMeasure20} `;
        div2.append(p3);
      }

      let h2 = document.createElement("h2");
      h2.innerHTML = `<h2>Instructions</h><br/>
        <span>${strInstructions}<span/>
        `;
      let img = document.createElement("img");
      img.src = strMealThumb;

      let div3 = document.createElement("div");
      div3.append(div2, h2);

      let video = document.createElement("iframe");
      let link = "https://www.youtube.com/embed/";
      let both = strYoutube.split("=");

      link += both[1];
      video.src = link;

      let divUltimate = document.createElement("div");
      divUltimate.append(img, h1, div1, div3, video);

      showDiv.append(divUltimate);
    }
  );
}

export { mainView, appendMain, mainAppender };
