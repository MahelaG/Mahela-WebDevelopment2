/* document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const fundraiserId = urlParams.get('id');

    fetch(`http://localhost:3020/api/fundraiser/${fundraiserId}`)
        .then(response => response.json())
        .then(fundraiser => {
            const detailsSection = document.getElementById('fundraiser-details');
            const fundraiserData = fundraiser[0]; // Assuming the result is an array with one item

            detailsSection.innerHTML = `
                <h2>${fundraiserData.CAPTION}</h2>
                <p>Organizer: ${fundraiserData.ORGANIZER}</p>
                <p>Target Funding: $${fundraiserData.TARGET_FUNDING}</p>
                <p>Current Funding: $${fundraiserData.CURRENT_FUNDING}</p>
                <p>City: ${fundraiserData.CITY}</p>
                <p>Category: ${fundraiserData.CATEGORY_ID}</p>
                <button onclick="alert('This feature is under construction')">Donate</button>
            `;
        })
        .catch(error => console.error('Error fetching fundraiser details:', error));
}); */
/* document.addEventListener('DOMContentLoaded', () => {
    // Get fundraiser ID from URL query string
    const params = new URLSearchParams(window.location.search);
    const fundraiserId = params.get('id');
    
    if (fundraiserId) {
        // Fetch fundraiser details from the API
        fetch(`http://localhost:3020/api/fundraiser/${fundraiserId}`)
            .then(response => response.json())
            .then(data => {
                document.getElementById('caption').textContent = data.CAPTION;
                document.getElementById('organizer').textContent = data.ORGANIZER;
                document.getElementById('target').textContent = data.TARGET_FUNDING;
                document.getElementById('current').textContent = data.CURRENT_FUNDING;
                document.getElementById('city').textContent = data.CITY;
                document.getElementById('category').textContent = data.CATEGORY;
            })
            .catch(error => console.error('Error fetching fundraiser details:', error));
    } else {
        alert('No fundraiser ID found in the URL.');
    }
});

// Function for "Donate" button
function donate() {
    alert("This feature is under construction.");
} */
// Extract 'id' from query string
const urlParams = new URLSearchParams(window.location.search);
const fundraiserId = urlParams.get('id');

// Elements where fundraiser details will be displayed
const captionElement = document.getElementById('fundraiser-caption');
const organizerElement = document.getElementById('fundraiser-organizer');
const cityElement = document.getElementById('fundraiser-city');
const categoryElement = document.getElementById('fundraiser-category');
const targetElement = document.getElementById('fundraiser-target');
const currentElement = document.getElementById('fundraiser-current');

// Fetch the fundraiser details from the server using the id from query string
if (fundraiserId) {
    fetch(`/api/fundraiser/${fundraiserId}`)
        .then(response => response.json())
        .then(fundraiser => {
            // Populate the HTML with fundraiser data
            captionElement.textContent = fundraiser.CAPTION;
            organizerElement.textContent = fundraiser.ORGANIZER;
            cityElement.textContent = fundraiser.CITY;
            categoryElement.textContent = fundraiser.CATEGORY;
            targetElement.textContent = fundraiser.TARGET_FUNDING;
            currentElement.textContent = fundraiser.CURRENT_FUNDING;
        })
        .catch(error => {
            console.error('Error fetching fundraiser details:', error);
            alert('Failed to load fundraiser details.');
        });
} else {
    alert('No fundraiser selected.');
}

// Add event listener to "Donate" button
document.getElementById('donate-btn').addEventListener('click', () => {
    alert('This feature is under construction.');
});

