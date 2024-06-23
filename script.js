document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
  });

  function handleMouseMove(event) {
      const card = this;
      const boundingRect = card.getBoundingClientRect();
      const mouseX = event.clientX - boundingRect.left;
      const mouseY = event.clientY - boundingRect.top;

      const rotateX = 20 * ((mouseY - boundingRect.height / 2) / boundingRect.height);
      const rotateY = -20 * ((mouseX - boundingRect.width / 2) / boundingRect.width);

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  function handleMouseLeave() {
      this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  }
});
