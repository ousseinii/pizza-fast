import Order from './Order';

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className='footer'>
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>
          Nous serons ravis de vous accueillir entre {openHour}:00 et{' '}
          {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

export default Footer;
