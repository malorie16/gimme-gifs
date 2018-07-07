class Adapter {

  static getGifs() {
    //25 shape gifs
    const baseUrl = 'http://api.giphy.com/v1/gifs/search?q=shapes&limit=8&api_key=qgT88PjvT8DKVaX0ONx7gXv95YqtM7F8'
    return fetch(baseUrl).then(r => r.json())
  }

  static searchGiphy(input){
    const offset = Math.floor(Math.random() * 22)
    const baseUrl = `http://api.giphy.com/v1/gifs/search?q=${input}&limit=8&api_key=qgT88PjvT8DKVaX0ONx7gXv95YqtM7F8`
    return fetch(baseUrl).then(r => r.json())
  }


}
// &offset=${offset}
// random+
