const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    // Aquí puedes agregar la lógica para añadir el producto al carrito
    console.log('Producto añadido al carrito');
  });
});

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });
});
