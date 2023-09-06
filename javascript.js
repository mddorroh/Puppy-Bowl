const ul = document.querySelector('ul');

let players;

const fetchPlayers = async()=> {
    const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2307-ftb-et-web-ft/players');
    const json = await response.json();
    players = json.data;
    
  
  const hash = window.location.hash.slice(1)*1;
  const html = players.players.map( player => {
        return `
        <li>
          <a href='#${player.id}' class='${ player.id === hash ? 'selected' : ''}'>
          ${ player.name }
          </a>
        </li>
    `;
    }).join('');
  ul.innerHTML = html;
};

window.addEventListener('hashchange', ()=> {
    const hash = window.location.hash.slice(1)*1;
  const html = players.players.map( player => {
        return `
        <li>
          <a href='#${player.id}' class='${ player.id === hash ? 'selected' : ''}'>
          ${ player.name }
          </a>
        </li>
    `;
    }).join('');
  ul.innerHTML = html;
});

fetchPlayers();