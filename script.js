// Mobile menu toggle
function toggleMenu() {
    document.getElementById('nav-links').classList.toggle('show');
}

// Initialize destination data
const destinations = [
    {
        id: 1,
        name: 'Maldives',
        image: 'https://source.unsplash.com/400x300/?maldives',
        description: 'Crystal-clear waters and stunning beaches await you.',
        price: '$1999',
        liked: false
    },
    {
        id: 2,
        name: 'Swiss Alps',
        image: 'https://source.unsplash.com/400x300/?swiss,alps',
        description: 'Breathtaking mountain views and snowy adventures.',
        price: '$2499',
        liked: false
    },
    {
        id: 3,
        name: 'New York',
        image: 'https://source.unsplash.com/400x300/?new,york',
        description: 'The city that never sleeps is ready to amaze you.',
        price: '$1799',
        liked: false
    },
    {
        id: 4,
        name: 'Tokyo',
        image: 'https://source.unsplash.com/400x300/?tokyo',
        description: 'Experience the perfect blend of tradition and modernity.',
        price: '$2299',
        liked: false
    },
    {
        id: 5,
        name: 'Paris',
        image: 'https://source.unsplash.com/400x300/?paris',
        description: 'Romance, art, and culture in the City of Light.',
        price: '$1999',
        liked: false
    },
    {
        id: 6,
        name: 'Bali',
        image: 'https://source.unsplash.com/400x300/?bali',
        description: 'Tropical paradise with rich culture and beauty.',
        price: '$1599',
        liked: false
    }

    
];

// Render destinations
function renderDestinations(destinationsData) {
    const container = document.querySelector('.destinations');
    container.innerHTML = destinationsData.map(dest => `
        <div class="card">
            <img src="${dest.image}" alt="${dest.name}">
            <button class="like-btn" onclick="toggleLike(${dest.id})">
                <i class="fas fa-heart ${dest.liked ? 'liked' : ''}"></i>
            </button>
            <div class="card-body">
                <h3>${dest.name}</h3>
                <p>${dest.description}</p>
                <div class="price">${dest.price}</div>
                <button class="btn" onclick="bookNow('${dest.name}')">Book Now</button>
            </div>
        </div>
    `).join('');
}

// Toggle like status
function toggleLike(id) {
    const destination = destinations.find(d => d.id === id);
    if (destination) {
        destination.liked = !destination.liked;
        renderDestinations(destinations);
    }
}

// Book Now functionality
function bookNow(destination) {
    alert(`Thank you for your interest in ${destination}! A travel agent will contact you soon.`);
}

// Search functionality
function searchDestinations(query) {
    const filtered = destinations.filter(dest => 
        dest.name.toLowerCase().includes(query.toLowerCase()) ||
        dest.description.toLowerCase().includes(query.toLowerCase())
    );
    renderDestinations(filtered);
}

// Newsletter subscription
function subscribeNewsletter(e) {
    e.preventDefault();
    const email = document.querySelector('.newsletter-form input').value;
    if (email) {
        alert('Thank you for subscribing to our newsletter!');
        document.querySelector('.newsletter-form').reset();
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderDestinations(destinations);

    // Search event listener
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => searchDestinations(e.target.value));
    }

    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', subscribeNewsletter);
    }
});
