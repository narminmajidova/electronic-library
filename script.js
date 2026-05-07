// Digital Library - Interactive JavaScript

// Book database
const books = [
    {
        id: 1,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        year: 1925,
        category: 'fiction',
        rating: 4.8,
        pages: 180,
        isbn: '978-0-7432-7356-5',
        description: 'The Great Gatsby is a novel of the Jazz Age that has been acclaimed by generations of readers. The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan is a tragic tale of American idealism and obsession.'
    },
    {
        id: 2,
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        year: 1813,
        category: 'fiction',
        rating: 4.9,
        pages: 432,
        isbn: '978-0-14-143951-8',
        description: 'Pride and Prejudice is a romantic novel of manners written by Jane Austen in 1813. The novel follows the character development of Elizabeth Bennet, a protagonist of the book, who learns about the repercussions of hasty judgments.'
    },
    {
        id: 3,
        title: '1984',
        author: 'George Orwell',
        year: 1949,
        category: 'fiction',
        rating: 4.7,
        pages: 328,
        isbn: '978-0-451-52494-2',
        description: '1984 is a dystopian novel written in 1948 by English author George Orwell. The novel is set in Airstrip One, a world state that is a member of the larger totalitarian union called Oceania.'
    },
    {
        id: 4,
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        year: 1960,
        category: 'fiction',
        rating: 4.8,
        pages: 324,
        isbn: '978-0-06-112008-4',
        description: 'To Kill a Mockingbird is a novel by Harper Lee published in 1960. It was immediately successful and won the Pulitzer Prize. The plot and characters are loosely based on Lee\'s observations of her own family.'
    },
    {
        id: 5,
        title: 'A Brief History of Time',
        author: 'Stephen Hawking',
        year: 1988,
        category: 'science',
        rating: 4.6,
        pages: 212,
        isbn: '978-0-553-38016-3',
        description: 'A Brief History of Time is a book written by Stephen Hawking and first published by the Bantam Dell Publishing Group. It was a bestseller and is often cited as the most sold book on cosmology in the market.'
    },
    {
        id: 6,
        title: 'Sapiens',
        author: 'Yuval Noah Harari',
        year: 2011,
        category: 'history',
        rating: 4.7,
        pages: 443,
        isbn: '978-0-06-231609-7',
        description: 'Sapiens is a book by Yuval Noah Harari, first published in Hebrew in 2011, and in English in 2014. The book surveys the history of humankind from the emergence of Homo sapiens.'
    },
    {
        id: 7,
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        year: 2011,
        category: 'biography',
        rating: 4.8,
        pages: 630,
        isbn: '978-1-4516-4853-9',
        description: 'Steve Jobs is the authorized biography of Steve Jobs, the Apple founder, by Walter Isaacson. The book was released on October 24, 2011, shortly after Jobs\' death on October 5, 2011.'
    },
    {
        id: 8,
        title: 'Clean Code',
        author: 'Robert C. Martin',
        year: 2008,
        category: 'technology',
        rating: 4.6,
        pages: 464,
        isbn: '978-0-13-235088-4',
        description: 'Clean Code: A Handbook of Agile Software Craftsmanship is a book by Robert C. Martin. It is a guide to writing code that is readable, maintainable, and scalable.'
    }
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeSearch();
    initializeFilters();
    loadBookDetails();
    initializeFavorites();
});

// Search functionality
function initializeSearch() {
    const heroSearch = document.getElementById('heroSearch');
    const catalogSearch = document.getElementById('catalogSearch');

    if (heroSearch) {
        const searchBtn = document.querySelector('.search-btn');
        searchBtn.addEventListener('click', () => {
            const query = heroSearch.value.trim();
            if (query) {
                window.location.href = `catalog.html?search=${encodeURIComponent(query)}`;
            }
        });
        heroSearch.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });
    }

    if (catalogSearch) {
        catalogSearch.addEventListener('input', () => {
            filterBooks();
        });
    }
}

// Filter functionality
function initializeFilters() {
    const categoryFilters = document.querySelectorAll('.category-filter');
    const yearFilters = document.querySelectorAll('.year-filter');
    const ratingFilters = document.querySelectorAll('.rating-filter');
    const resetBtn = document.querySelector('.reset-filters-btn');
    const sortSelect = document.getElementById('sortBy');

    categoryFilters.forEach(filter => {
        filter.addEventListener('change', filterBooks);
    });

    yearFilters.forEach(filter => {
        filter.addEventListener('change', filterBooks);
    });

    ratingFilters.forEach(filter => {
        filter.addEventListener('change', filterBooks);
    });

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            categoryFilters.forEach(f => f.checked = false);
            yearFilters.forEach(f => f.checked = false);
            ratingFilters.forEach(f => f.checked = false);
            filterBooks();
        });
    }

    if (sortSelect) {
        sortSelect.addEventListener('change', filterBooks);
    }
}

// Filter and search books
function filterBooks() {
    const searchQuery = document.getElementById('catalogSearch')?.value.toLowerCase() || '';
    const selectedCategories = Array.from(document.querySelectorAll('.category-filter:checked')).map(f => f.value);
    const selectedYears = Array.from(document.querySelectorAll('.year-filter:checked')).map(f => f.value);
    const selectedRatings = Array.from(document.querySelectorAll('.rating-filter:checked')).map(f => parseFloat(f.value));
    const sortBy = document.getElementById('sortBy')?.value || 'relevance';

    let filtered = books.filter(book => {
        const matchesSearch = !searchQuery || 
            book.title.toLowerCase().includes(searchQuery) || 
            book.author.toLowerCase().includes(searchQuery);
        
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(book.category);
        
        let matchesYear = true;
        if (selectedYears.length > 0) {
            matchesYear = selectedYears.some(range => {
                if (range === 'before-2000') return book.year < 2000;
                if (range === '2000-2009') return book.year >= 2000 && book.year <= 2009;
                if (range === '2010-2019') return book.year >= 2010 && book.year <= 2019;
                if (range === '2020-2026') return book.year >= 2020 && book.year <= 2026;
                return true;
            });
        }
        
        let matchesRating = true;
        if (selectedRatings.length > 0) {
            matchesRating = selectedRatings.some(rating => book.rating >= rating);
        }

        return matchesSearch && matchesCategory && matchesYear && matchesRating;
    });

    // Sort
    switch (sortBy) {
        case 'title':
            filtered.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'author':
            filtered.sort((a, b) => a.author.localeCompare(b.author));
            break;
        case 'newest':
            filtered.sort((a, b) => b.year - a.year);
            break;
        case 'rating':
            filtered.sort((a, b) => b.rating - a.rating);
            break;
        case 'relevance':
        default:
            // Keep original order for relevance
            break;
    }

    displayBooks(filtered);
}

// Display books
function displayBooks(booksToDisplay) {
    const grid = document.getElementById('catalogGrid');
    if (!grid) return;

    grid.innerHTML = '';

    if (booksToDisplay.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #7f8c8d;">No books found matching your criteria.</p>';
        return;
    }

    booksToDisplay.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.innerHTML = `
            <div class="book-cover">📕</div>
            <h3>${book.title}</h3>
            <p class="author">${book.author}</p>
            <p class="year">${book.year}</p>
            <div class="rating">⭐⭐⭐⭐⭐ (${book.rating})</div>
            <p class="category-tag">${book.category.charAt(0).toUpperCase() + book.category.slice(1)}</p>
            <a href="book-details.html?id=${book.id}" class="view-btn">View Details</a>
        `;
        grid.appendChild(bookCard);
    });
}

// Load book details
function loadBookDetails() {
    const params = new URLSearchParams(window.location.search);
    const bookId = parseInt(params.get('id')) || 1;
    const book = books.find(b => b.id === bookId);

    if (book) {
        document.getElementById('bookTitle').textContent = book.title;
        document.getElementById('detailTitle').textContent = book.title;
        document.getElementById('detailAuthor').textContent = book.author;
        document.getElementById('detailYear').textContent = book.year;
        document.getElementById('detailCategory').textContent = book.category.charAt(0).toUpperCase() + book.category.slice(1);
        document.getElementById('detailPages').textContent = book.pages;
        document.getElementById('detailISBN').textContent = book.isbn;
        document.getElementById('detailDescription').textContent = book.description;
    }
}

// Favorites functionality
function initializeFavorites() {
    const favoriteBtn = document.querySelector('.add-to-favorites-btn');
    const params = new URLSearchParams(window.location.search);
    const bookId = parseInt(params.get('id'));

    if (favoriteBtn) {
        // Check if book is already in favorites
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        if (favorites.includes(bookId)) {
            favoriteBtn.style.backgroundColor = '#e74c3c';
        }

        favoriteBtn.addEventListener('click', () => {
            let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
            
            if (favorites.includes(bookId)) {
                favorites = favorites.filter(id => id !== bookId);
                favoriteBtn.style.backgroundColor = '#3498db';
                alert('Removed from favorites');
            } else {
                favorites.push(bookId);
                favoriteBtn.style.backgroundColor = '#e74c3c';
                alert('Added to favorites!');
            }
            
            localStorage.setItem('favorites', JSON.stringify(favorites));
        });
    }
}

// Borrow button
const borrowBtn = document.querySelector('.borrow-btn');
if (borrowBtn) {
    borrowBtn.addEventListener('click', () => {
        alert('Book borrowed successfully! You can read it online or download it.');
    });
}

// View Details buttons on home page
const viewBtns = document.querySelectorAll('.view-btn');
viewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (!btn.href.includes('book-details')) {
            e.preventDefault();
            alert('View Details feature active!');
        }
    });
});

// Initialize on page load
window.addEventListener('load', () => {
    filterBooks();
});