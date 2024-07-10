ALLO-DINE
-----------------------------------

This project is a web application built with React.js that integrates Clerk for user authentication and interacts with an external API to fetch data related to food and drink options. The application allows users to select their preferred meals and beverages, provides pagination for browsing through available options, and ensures a responsive user interface for seamless usability across different devices.


SCREENSHOTS
--------------------------------------------------------------------------------------------------




Table of Contents
-----------------------------------
1.Introduction

2.Features

3.Technologies Used

4.Installation

5.Getting Started

6.Configuration

7.Running the Application

8.Usage

9.API Reference

10.Contributing

11.License

Introduction
------------------------------------------------------------------------------------------------
This project is a web application built with React.js that integrates Clerk for user authentication and interacts with an external API to fetch data related to food and drink options. The application allows users to select their preferred meals and beverages, provides pagination for browsing through available options, and ensures a responsive user interface for seamless usability across different devices.

Features
------------------------------------------------------------------------------------------------

1.Authentication: Users can log in using Clerk for secure authentication.

2.Data Fetching: Utilizes an API to fetch food and drink data.

3.Selection: Users can select their preferred food and drink items.

4.Pagination: Provides pagination for easy navigation through items.

5.Responsive UI: Ensures a seamless experience across various devices.
 
Technologies Used
-----------------------------------------------------------------------------------------------

Frontend:
--------------------
1.React.js

2.Tailwind CSS

3.Clerk for authentication

Installation
------------------------------------------------------------------------------------------------
1.Ensure you have Node.js and npm installed on your machine before proceeding.

2.Clone the repository

git clone https://github.com/your/repository.git
cd project-directory

3.Install dependencies: 

npm install


Getting Started
------------------------------------------------------------------------------------------------
Follow these steps to get your project up and running.

Configuration
------------------------------------------------------------------------------------------------

1.Clerk Configuration:

2.Obtain your Clerk Publishable Key from the Clerk dashboard.

3.Set your Clerk Publishable Key in the .env file or as an environment variable:

REACT_APP_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
Ensure your backend API is configured correctly (if applicable).

Running the Application
------------------------------------------------------------------------------------------------

Run the application:
npm start

Open in your browser:

Navigate to http://localhost:3000 to view the application.

Usage
------------------------------------------------------------------------------------------------

Authentication
--------------------
1.Sign Up / Sign In: Use the Clerk authentication form to create an account or log in with existing credentials.

2.Browse Options: Navigate through the available food and drink items displayed on the main page.

3.Filtering: Use the category filters to narrow down options based on preferences.

4.Selection: Click on items to select them, adjusting quantities or preferences as needed.

Pagination
--------------------
5.Navigate Pages: Use the pagination controls at the bottom of the page to move between different sets of items.

Responsive UI
--------------------
6.Device Compatibility: The application is designed to adapt seamlessly to different screen sizes, ensuring optimal viewing and interaction on desktops, tablets, and mobile devices.


API Reference
------------------------------------------------------------------------------------------------

Meals API
The project utilizes an API to fetch meal data. Here are the details of the API:

Base URL

https://example.com/api/meals
Endpoints
Get All Meals
Endpoint: /meals
Method: GET
Description: Fetches all available meals.
Response Example:
json
--------------------

{
  "meals": [
    {
      "id": "meal1",
      "title": "3 course chicken",
      "starter": "Lorem Ipsum",
      "desert": "Cake",
      "price": 9.99,
      "labels": ["chicken", "breakfast"],
      "img": "https://shorturl.at/hkVZ8",
      "drinks": [
        { "id": "drink-1", "title": "Vine", "price": 4.99 },
        { "id": "drink-2", "title": "Juice", "price": 5.99 },
        { "id": "drink-3", "title": "Beer", "price": 6.99 }
      ]
    },
    // Additional meal objects...
  ]
}

Get Meal by ID
-----------------------
Endpoint: /meals/{mealId}
Method: GET
Description: Fetches details of a specific meal by its ID.
Parameters:
mealId: ID of the meal to fetch.
Response Example:
json
Copy code
{
  "id": "meal1",
  "title": "3 course chicken",
  "starter": "Lorem Ipsum",
  "desert": "Cake",
  "price": 9.99,
  "labels": ["chicken", "breakfast"],
  "img": "https://shorturl.at/hkVZ8",
  "drinks": [
    { "id": "drink-1", "title": "Vine", "price": 4.99 },
    { "id": "drink-2", "title": "Juice", "price": 5.99 },
    { "id": "drink-3", "title": "Beer", "price": 6.99 }
  ]
}

Contributing
------------------------------------------------------------------------------------------------

Fork the repository and create your branch (git checkout -b feature/AmazingFeature).
Commit your changes (git commit -am 'Add some AmazingFeature').
Push to the branch (git push origin feature/AmazingFeature).
Open a pull request.
Include guidelines for code formatting, pull requests, and issue reporting.

License
------------------------------------------------------------------------------------------------

MIT License

Copyright (c) [2025] [SonuKumarYadav]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
