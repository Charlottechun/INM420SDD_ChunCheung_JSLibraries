// Initialize Glide.js
const glide = new Glide('.glide', {
  type: 'carousel',
  perView: 2,
  focusAt: 'center',
  breakpoints: {
      800: {
          perView: 2
      },
      480: {
          perView: 1
      }
  }
})

glide.mount();

// Initialize Granim.js for hero section gradient
const granimInstance = new Granim({
  element: '#hero-gradient',
  name: 'hero-gradient',
  direction: 'diagonal', // Can be left-right, top-bottom, etc.
  opacity: [1, 1],
  states: {
      "default-state": {
          gradients: [
              ['#ff9966', '#ff5e62'],
              ['#00c6ff', '#0072ff']
          ],
          transitionSpeed: 5000
      }
  }
});

// Initialize the map and set its view to Toronto, Canada with a zoom level of 10
const map = L.map('map-container').setView([43.65107, -79.347015], 10); // Adjust zoom level as needed

// Add a tile layer from OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(map);

// Add a marker at the specified coordinates (Toronto) and bind a popup
L.marker([43.65107, -79.347015]).addTo(map).bindPopup('Toronto, Canada').openPopup();