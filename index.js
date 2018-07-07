document.addEventListener("DOMContentLoaded", () => {


  document.addEventListener('mousemove', Controller.gradientBackground)

  Adapter.getGifs()
    .then(r => Controller.renderAllGifs(r))

  //FIND SEARCH FORM
  const searchForm = document.querySelector('.search-form')
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    Controller.searchForGifs();
    // searchForm.reset()
  })

})
