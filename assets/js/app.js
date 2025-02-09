const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');  //Tenemos que asociarlas a la clase del index con "."
const $b = document.querySelector('.blog'); //Tenemos que asociarlas a la clase del index con "."
const $l = document.querySelector('.location');

const displayUser = async (username) => {/*Se convirtió auna funcion flecha asincrónica ya que "await" depende de ello"*/
  $n.textContent = 'cargando...';
  /*Se agrego la estructura de control de esrrores con try y Catch*/
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json(); //Se agrego la variablea data donde se obtendran los datos crudos en el formato json.
    console.log(data);
    $n.textContent = `${data.name}`;  //Las comillas deben ser graves
    $b.textContent = `${data.blog}`;  //Las comillas deben ser graves
    $l.textContent = `${data.location}`; //Las comillas deben ser graves
  } catch (err) {
    handleError(err);
  }

}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`;/*Le falta una */
}

displayUser('stolinski'); //Es de un parámetro

