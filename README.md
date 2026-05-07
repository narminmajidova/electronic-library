# Digital Library - Online Reference System

## Overview
Digital Library is a modern, user-friendly online reference system for an electronic library. It provides a clean interface for browsing, searching, and managing a collection of books.

## Features

### 📚 **4 Main Pages**

1. **Home (index.html)**
   - Hero section with search functionality
   - Featured features highlighting library capabilities
   - Recently added books showcase
   - Category browsing options

2. **Catalog (catalog.html)**
   - Advanced filtering system (category, year, rating)
   - Dynamic search functionality
   - Multiple sorting options
   - Responsive grid display of books

3. **Book Details (book-details.html)**
   - Comprehensive book information
   - User ratings and reviews
   - Add to favorites functionality
   - Borrow button
   - Similar books recommendations

4. **About (about.html)**
   - Library mission and vision
   - Collection overview
   - How to use the library
   - Contact information

### 🎨 **Design Features**

- **Clean, Modern Aesthetic**: Professional color scheme with soft grays, blues, and whites
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile devices
- **User-Friendly Navigation**: Intuitive menu structure with sticky navbar
- **Professional Typography**: Clear, readable fonts with proper hierarchy
- **Accessibility**: Semantic HTML and proper contrast ratios

### ⚡ **Interactive Features (JavaScript)**

- Dynamic search with real-time filtering
- Multi-criteria filtering (category, year published, rating)
- Sorting options (relevance, title, author, date, rating)
- Favorites management using localStorage
- Book borrowing system
- Responsive interactive elements
- URL parameter handling for book details

## Tech Stack

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript**: Interactive features and dynamic content
- **LocalStorage**: For saving user favorites

## Getting Started

### Installation

1. Clone the repository or download the files
2. Ensure all files are in the same directory:
   - `index.html`
   - `catalog.html`
   - `book-details.html`
   - `about.html`
   - `styles.css`
   - `script.js`

### Running the Project

1. Open `index.html` in your web browser
2. Navigate between pages using the menu
3. Use the search and filter features to explore the catalog

**Note**: For local development, you may need to use a local server due to CORS restrictions with localStorage.

## File Structure

```
electronic-library/
├── index.html           # Home page
├── catalog.html         # Book catalog with filters
├── book-details.html    # Individual book details
├── about.html           # About and information page
├── styles.css           # All styling
├── script.js            # Interactive functionality
└── README.md            # Documentation
```

## Color Scheme

- **Primary**: #2c3e50 (Dark Blue-Gray)
- **Secondary**: #34495e (Medium Blue-Gray)
- **Accent**: #3498db (Sky Blue)
- **Light Background**: #ecf0f1 (Off-White)
- **Text**: #2c3e50 (Dark) / #7f8c8d (Gray)

## Features in Detail

### Search Functionality
- Search by book title
- Search by author name
- Real-time filtering as you type
- URL-based search parameters

### Filtering System
- **Category Filter**: Fiction, Science, History, Biography, Technology, Philosophy
- **Year Range Filter**: 2020-2026, 2010-2019, 2000-2009, Before 2000
- **Rating Filter**: 5 stars, 4+ stars, 3+ stars
- **Reset Filters**: Clear all applied filters instantly

### Sorting Options
- Relevance (default)
- Title (A-Z)
- Author
- Newest First
- Rating (Highest First)

### User Interactions
- Add books to favorites (persists with localStorage)
- Borrow books
- View detailed book information
- Read user reviews and ratings
- View similar book recommendations

## Sample Data

The system includes 8 sample books for demonstration:
1. The Great Gatsby - F. Scott Fitzgerald (1925)
2. Pride and Prejudice - Jane Austen (1813)
3. 1984 - George Orwell (1949)
4. To Kill a Mockingbird - Harper Lee (1960)
5. A Brief History of Time - Stephen Hawking (1988)
6. Sapiens - Yuval Noah Harari (2011)
7. Steve Jobs - Walter Isaacson (2011)
8. Clean Code - Robert C. Martin (2008)

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 769px - 1199px
- **Mobile**: 480px - 768px
- **Small Mobile**: Below 480px

## Future Enhancements

- User authentication and accounts
- Reading progress tracking
- Personalized recommendations
- PDF/eBook downloads
- Mobile app version
- Backend integration with database
- Advanced analytics
- Multi-language support
- Dark mode theme

## License

This project is open source and available for educational and personal use.

## Support

For issues or questions about the Digital Library system, please refer to the About page or contact the support team.

---

**Created**: 2026
**Version**: 1.0
**Status**: Production Ready