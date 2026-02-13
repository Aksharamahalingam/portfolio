/*
 * script.js
 * Handles interactions: card expansion for case studies.
 */

// CARD EXPANSION
// Exposed globally to work with onclick attributes
window.toggleCaseStudy = function (id) {
    const content = document.getElementById(id);

    if (content.style.maxHeight && content.style.maxHeight !== '0px') {
        // Close
        content.style.maxHeight = '0px';
        content.classList.remove('open');
    } else {
        // Open
        content.style.maxHeight = content.scrollHeight + 100 + "px"; // + buffer
        content.classList.add('open');
    }

    // Optional: Stop propagation if clicking link inside
    // event.stopPropagation(); 
};
