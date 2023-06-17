document.querySelector('#clickMe').addEventListener('click', makeReq)

document.querySelector('#clickMe').addEventListener('click', show)

function show() {
  document.getElementById('results').style.visibility = 'visible'
}

async function makeReq(){

  const userName = document.querySelector("#userName").value;
  const res = await fetch(`/api?student=${userName}`)
  const data = await res.json()

  console.log(data);
  document.querySelector("#personName").textContent = data.name
  document.querySelector("#personStatus").textContent = data.status
  document.querySelector("#personOccupation").textContent = data.currentOccupation
  document.querySelector("#flip").textContent = data.flip
}