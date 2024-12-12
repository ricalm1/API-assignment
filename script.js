
const button = document.getElementById('click');


button.addEventListener('click', async function() {
  const response = await fetch ('https://meowfacts.herokuapp.com/');
  const facts = await response.json()
  document.getElementById('catFact').innerText = facts.data[0]
  // console.log(facts.data[0])
});



