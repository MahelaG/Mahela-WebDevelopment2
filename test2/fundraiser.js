document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const fundraiserId = urlParams.get('id');

    fetch(`/fundraiser/${fundraiserId}`)
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
});
