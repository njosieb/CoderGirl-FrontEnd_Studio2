function AstronautBios(astronaut) {
  let active = "false";
  if (astronaut.active) {
    active = "true";
  }
  return (
    <div className="astronaut">
      <div className="bio">
        <h3>{astronaut.firstName} {astronaut.lastName}</h3>
        <ul>
          <li>Hours in space: {astronaut.hoursInSpace}</li>
          <li>Active: {active}</li>
          <li>Skills: {astronaut.skills.join(", ")}</li>
        </ul>
      </div>
      <img className="avatar" src={astronaut.picture}/>
    </div>
  )
}

function getData() {
  fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    .then(function(response) {
      return response.json()
    }) 
    .then(function(data) {
      console.log(data)
      const astronautElements = [];
      for (let i = 0; i < data.length; i++) {
        astronautElements.push(AstronautBios(data[i]))
      }
      const rootElement = document.querySelector('#root');
      const appElement = <div className="container">{astronautElements}</div>
      ReactDOM.render(appElement, rootElement);
    })
}

getData();


