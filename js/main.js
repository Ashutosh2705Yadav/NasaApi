//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=NPB2BvHp0jQaJMCCD9yQavcH8cUPCTcDEzS4lRyY`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        
        document.querySelector("h2").innerText = data.title
        document.querySelector("img").src = data.hdurl
        document.querySelector("h3").innerText = data.explanation

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

