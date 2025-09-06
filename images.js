// This file manages all images used across the website to make updates easier.
// Each array contains objects representing images for a specific page.
// Each image object must follow this format:
// {
//     src: 'images/filename' // Path to the image in the 'images/' folder (e.g., JPG, PNG)
//     alt: 'Descriptive_alt_text' // Alt text for accessibility
// }
// To update or add images:
// 1. Place the new image in the 'images/' folder in the project directory.
// 2. Update the appropriate array below with the new filename and alt text.
// 3. Save this file, and the changes will automatically reflect on the corresponding pages.

// Images for the homepage (index.html)
// These images appear in the grid on the homepage, displayed side by side.
const homeImages = [
    { src: 'images/lillagalleriet001.jpg', alt: 'Nature' },
    { src: 'images/tackochlovsalenlogga.jpg', alt: 'Nature' },
    { src: 'images/clothes002.jpg', alt: 'Nature' }
];

// Images for the "Om oss" page (om-oss.html)
// This image appears on the right side of the "Om oss" content.
const aboutImages = [
    { src: 'images/lampa001.jpg', alt: 'bildtext' }
];

// Images for the "Lilla Galleriet" page (lillagalleriet.html)
// The order corresponds to: first image, second image (hidden on mobile), third image.
const galleryImages = [
    { src: 'images/lampa001.jpg', alt: 'bildtext' },
    { src: 'images/lampa001.jpg', alt: 'bildtext' },
    { src: 'images/tonyutstallning.jpg', alt: 'bildtext' }
];

// Example of how to add a new image to an array:
// const newImages = [
//     { src: 'images/new-image.jpg', alt: 'New image description' },
//     // Add more images as needed
// ];