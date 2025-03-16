// Select all photos in the grid
const photos = document.querySelectorAll('.grid-photo');

// Function to toggle photo visibility
photos.forEach(photo => {
  setInterval(() => {
    photo.style.opacity = photo.style.opacity === "0" ? "1" : "0"; // Toggle visibility
  }, Math.random() * 5000 + 2000); // Random interval between 1-4 seconds
});

// Get elements
const popup = document.getElementById('popup');
const popupButton = document.querySelector('.popup-button');
const closeButton = document.getElementById('closeBtn');

// Show the pop-up when the button is clicked
popupButton.addEventListener('click', () => {
  popup.style.display = 'flex'; // Make the pop-up visible
});

// Hide the pop-up when the close button is clicked
closeButton.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Hide the pop-up when clicking outside the content
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});

// Select all "See More" links
const seeMoreLinks = document.querySelectorAll('.see-more');
// Select all popups
const popups = document.querySelectorAll('.popup-sec2');

// Add click event to each "See More" link
seeMoreLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // Prevent the default link action
    const popupId = link.getAttribute('data-popup'); // Get the pop-up ID
    document.getElementById(popupId).style.display = 'flex'; // Show the corresponding pop-up
  });
});

// Close buttons
const closeButtons = document.querySelectorAll('.close-btn');

// Add click event to close each pop-up
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.closest('.popup-sec2').style.display = 'none'; // Hide the closest pop-up
  });
});

// Close the pop-up when clicking outside of the content
popups.forEach(popup => {
  popup.addEventListener('click', event => {
    if (event.target === popup) {
      popup.style.display = 'none'; // Hide the pop-up
    }
  });
});
