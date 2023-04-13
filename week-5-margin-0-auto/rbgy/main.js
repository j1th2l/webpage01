// Get all the buttons
const buttons = document.querySelectorAll('div');

// Add event listener for mouseover event
buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    // Calculate distance from button to mouse pointer
    const rect = button.getBoundingClientRect();
    const distanceX = rect.left - event.clientX;
    const distanceY = rect.top - event.clientY;
    
    // Move button away from mouse pointer with transition
    button.style.transition = 'transform 0.5s ease-out';
    button.style.transform = `translate(${distanceX}px, ${distanceY}px)`;
  });
  
  // Add event listener for mouseout event
  button.addEventListener('mouseout', () => {
    // Reset button position with transition
    button.style.transition = 'transform 0.5s ease-out';
    button.style.transform = 'translate(0, 0)';
  });
});
