import pizzaData from '../data';
import Pizzas from './Pizzas';

function Menu() {
  return (
    <main className='menu'>
      <h2>Notre menu</h2>
      <p>
        Cuisine italienne authentique. 6 plats créatifs au choix. Tous préparés
        dans notre four à pierre, tous bio, tous délicieux.
      </p>
      <ul className='pizzas'>
        {pizzaData.map((pizzaObj) => (
          <Pizzas pizzaObj={pizzaObj} key={pizzaObj.name} />
        ))}
      </ul>
    </main>
  );
}

export default Menu;
