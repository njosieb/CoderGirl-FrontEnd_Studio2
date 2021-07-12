
//Function should return a component displaying an astronaut's bio
function AstronautBios(astronaut) {

  return (
    <div>

    </div>
  )
}

function getData() {
  fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    .then(function(response) {
      return response.json()
    }) 
    .then(function(data) {
      //Render all astronaut bios. 
      //The AstronautBios component should be repeated to display bios for all 
      //astronaunts in the returned data object.
      
      //Then attach to the 'root' div!
    })
}

getData();


