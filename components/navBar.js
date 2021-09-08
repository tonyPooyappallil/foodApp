async function navBar() {
  return `     <div id="beforeNav">
  <h1>Find your Recipes!!</h1>
</div>
<div id="mainNav">
  <div id="navContainer">
    <div class="hoverPointer">
      <a href="foodAppHome.html"><h2>Search By Recipe Name</h2></a>
    </div>
    <div class="hoverPointer">
      <a href="recipeOfDay.html"><h2>Recipe Of the Day</h2></a>
    </div>
    <div onclick="location.href=''" class="hoverPointer">
      <a href="latestRecipes.html"> <h2>Latest Recipes</h2></a>
    </div>
  </div>
</div>
<div id="searchDiv">
  <input id="search" type="text" placeholder="Search 😋" />
</div>
<div id="suggestionsDiv"></div>
<div id="showDiv"></div>`;
}

export { navBar };
