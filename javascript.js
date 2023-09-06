const ul = document.querySelector('ul');
console.log(ul);

const fetchPlayers = async()=> {
    const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2307-ftb-et-web-ft/players');
    const json = await response.json();
    const players = json.data;
  console.log(players);
    const html = players.players.map( player => {
        return `
        <li>
        ${ player.name }
        </li>
    `;
    }).join('');
  ul.innerHTML = html;
  console.log(html);
};

fetchPlayers();