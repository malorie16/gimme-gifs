class Controller {

  static gradientBackground(e) {
    console.log('hitting!')
    document.body.style.backgroundColor = "rgb( "+e.offsetX+", 200, "+e.offsetY+")"
  }

  static renderAllGifs(result) {
    let counter = 1
    console.log(result);
    result.data.forEach(function(gif) {
      const innerDiv = document.getElementById(`homepage-gif-${counter++}`)
      innerDiv.innerHTML = `<img src='${gif.images.downsized.url} '/>`
    })
  }

  static searchForGifs() {
    const input = document.querySelector('#search-input')
    console.log('input:', input.value)
    Adapter.searchGiphy(input.value)
      .then(result => Controller.renderAllGifs(result))
  }


}
