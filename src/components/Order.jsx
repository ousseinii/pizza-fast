function Order({ openHour, closeHour }) {
  return (
    <div className='order'>
      <p>
        Nous sommes ouverts de {openHour}:00 à {closeHour}:00. Venez nous rendre
        visite ou commandez en ligne.
      </p>
      <button className='btn'>Commander maintenant</button>
    </div>
  );
}

export default Order;
