document.addEventListener('DOMContentLoaded', () => {
    fetch('/categories')
        .then(response => response.json())
        .then(data => {
            const categorySelect = document.getElementById('category');
            data.forEach(category => {
                const option = document.createElement('option');
                option.value = category.CATEGORY_ID;
                option.textContent = category.NAME;
                categorySelect.appendChild(option);
            });
        });

    document.getElementById('searchForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const queryString = new URLSearchParams(formData).toString();

        fetch(`/search?${queryString}`)
            .then(response => response.json())
            .then(data => {
                const resultsDiv = document.getElementById('search-results');
                resultsDiv.innerHTML = ''; // Clear previous results

                if (data.length === 0) {
                    resultsDiv.innerHTML = '<p style="color: red;">No fundraisers found.</p>';
                } else {
                    data.forEach(fundraiser => {
                        const resultDiv = document.createElement('div');
                        resultDiv.classList.add('fundraiser');
                        resultDiv.innerHTML = `
                            <h3>${fundraiser.CAPTION}</h3>
                            <p>Organizer: ${fundraiser.ORGANIZER}</p>
                            <p>City: ${fundraiser.CITY}</p>
                            <a href="fundraiser.html?id=${fundraiser.FUNDRAISER_ID}">View Details</a>
                        `;
                        resultsDiv.appendChild(resultDiv);
                    });
                }
            })
            .catch(error => console.error('Error fetching fundraisers:', error));
    });
});

function clearCheckboxes() {
    document.getElementById('searchForm').reset();
}
