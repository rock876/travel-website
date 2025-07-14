// Mobile menu toggle
function toggleMenu() {
    document.getElementById('nav-links').classList.toggle('show');
}

// Initialize destination data
const destinations = [
    {
        id: 1,
        name: 'Maldives',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
        description: 'Crystal-clear waters and stunning beaches await you.',
        price: '$1999',
        liked: false
    },
    {
        id: 2,
        name: 'Swiss Alps',
        image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
        description: 'Breathtaking mountain views and snowy adventures.',
        price: '$2499',
        liked: false
    },
    {
        id: 3,
        name: 'New York',
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
        description: 'The city that never sleeps is ready to amaze you.',
        price: '$1799',
        liked: false
    },
    {
        id: 4,
        name: 'Tokyo',
        image: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=400&q=80',
        description: 'Experience the perfect blend of tradition and modernity.',
        price: '$2299',
        liked: false
    },
    {
        id: 5,
        name: 'Paris',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80',
        description: 'Romance, art, and culture in the City of Light.',
        price: '$1999',
        liked: false
    },
    {
        id: 6,
        name: 'Bali',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80',
        description: 'Tropical paradise with rich culture and beauty.',
        price: '$1599',
        liked: false
    },
    {
        id: 7,
        name: 'Santorini',
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80',
        description: 'Famous for its white-washed houses and blue domes.',
        price: '$1899',
        liked: false
    },
    {
        id: 8,
        name: 'Sydney',
        image: 'https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=620,height=400,dpr=2/tour_img/ef62608e4b4eb0f455c394dc776a32e2bd1968ffcb06908e0a28b6312d1bc926.jpg',
        description: 'Visit the iconic Opera House and beautiful beaches.',
        price: '$2099',
        liked: false
    },
    {
        id: 9,
        name: 'Cairo',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80',
        description: 'Explore the ancient pyramids and Egyptian culture.',
        price: '$1699',
        liked: false
    },
    {
        id: 10,
        name: 'Rio de Janeiro',
        image: 'https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=620,height=400,dpr=2/tour_img/8c4cca1038aa2412b3b4973fa01d8ad5eb0e59c44a193bb0ec1df2ebaf6aa27a.jpg',
        description: 'Enjoy the vibrant city and famous beaches of Brazil.',
        price: '$2199',
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
