Wanderlust 🏡

Wanderlust is a full-stack Airbnb-inspired web application where
users can discover property listings, create and manage their own
listings, and share reviews.

The project was built to practice and apply real-world full-stack
development concepts including authentication, authorization, CRUD
operations, MongoDB relationships, server-side validation, sessions, and
responsive UI development.

✨ Features

🔐 User Authentication

User registration and login

Persistent login sessions

Logout functionality

🛡️ Authorization

Protected routes for authenticated users

Listing ownership checks

Users can edit or delete only their own listings

🏠 Listing Management

Create new property listings

View individual listings

Edit existing listings

Delete listings

⭐ Reviews & Ratings

Authenticated users can add reviews

Users can delete their own reviews

Ratings are associated with listings

✅ Validation & Error Handling

Server-side request validation

Custom error handling

Flash messages for user feedback

Protected routes and invalid-request handling

🗺️ Location & Maps

Location-based listing data

Map integration for listing locations

📱 Responsive Interface

Responsive layouts for different screen sizes

Reusable EJS partials and layouts

🛠️ Tech Stack

Frontend

HTML5

CSS3

JavaScript

EJS

Bootstrap

Backend

Node.js

Express.js

Database

MongoDB

Mongoose

Authentication & Sessions

Passport.js

Passport Local Strategy

Express Session

Connect-Mongo

Flash messages

Other Tools

Git & GitHub

Method Override

EJS Mate

Mapbox

📂 Project Structure

Wanderlust/
├── models/          # Mongoose models
├── routes/          # Application routes
├── views/           # EJS templates
│   ├── includes/    # Reusable partials
│   ├── layouts/     # Page layouts
│   └── listings/    # Listing-related pages
├── public/          # Static CSS, JavaScript and assets
├── utils/           # Utility and error-handling functions
├── init/            # Database initialization / seed data
├── app.js           # Main Express application
├── schema.js        # Joi validation schemas
├── package.json     # Project dependencies and scripts
└── .gitignore

🚀 Getting Started

1. Clone the repository

git clone https://github.com/hariompatidar-dev/wanderlust-airbnb-clone.git

2. Navigate to the project

cd wanderlust-airbnb-clone

3. Install dependencies

npm install

4. Configure environment variables

Create a .env file in the project root.

MONGO_URL=your_mongodb_connection_string
SECRET=your_session_secret
MAP_TOKEN=your_mapbox_token

5. Start the application

node app.js

For development with nodemon:

nodemon app.js

6. Open the application

http://localhost:8080

🔑 Authentication Flow

Wanderlust uses session-based authentication.

Register
   ↓
Login
   ↓
Passport authenticates user
   ↓
Session stored
   ↓
Authenticated requests
   ↓
Protected resources

Authorization is handled separately from authentication. For example,
being logged in does not automatically allow a user to edit another
user's listing.

🔄 Core Application Flow

User
 │
 ├── Browse Listings
 │
 ├── Register / Login
 │       │
 │       └── Session
 │
 ├── Create Listing
 │
 ├── Edit / Delete Own Listing
 │
 └── Add / Manage Reviews

🧠 What I Learned

Building Wanderlust helped me understand how different parts of a
full-stack application work together:

Building RESTful Express routes

Working with MongoDB and Mongoose

Designing relationships between users, listings, and reviews

Implementing authentication with Passport.js

Implementing authorization and ownership checks

Managing sessions and persistent session storage

Validating incoming data

Handling errors with custom middleware

Using EJS layouts and reusable partials

Integrating location/map functionality

Using Git and GitHub to track project development

🔮 Future Improvements

Possible improvements for future versions include:

Advanced listing search and filtering

Image upload and cloud storage

Booking and reservation functionality

Payment integration

User profile pages

Favorites / wishlist functionality

More advanced map-based search

Production deployment and performance optimization

📸 Screenshots

Screenshots of the application will be added here.

👨‍💻 Author

Hariom Patidar

GitHub: hariompatidar-dev

⭐ If you found the project interesting, consider giving the repository
a star.