# Hng-movie-site
HNG stage two task built using React with Next.js and integrates with The Movie Database (TMDb) API to build Movie Site. It allows users to search for movies, view movie details. The TMDb API is using authentication tokens.

# Next.js Movie App

- [Getting Started](#getting-started)
- [Environments Variables](#environment-variables)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

## Getting Started

To get started with this project, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/nextjs-movie-app.git
   cd nextjs-movie-app
   npm install

## Emvironments Variables
Create a .env.local file in the root directory of the project with the following content:
    ```bash
    NEXT_PUBLIC_API_KEY='your-api-key'
    NEXT_PUBLIC_BASE_URL='https://api.themoviedb.org/3/'

Replace 'your-api-key' with your actual TMDb API key. You can obtain an API key by signing up on the TMDb website if you don't have one.

## Usage
This Next.js application allows you to search for movies and view their details, including title, overview, release date, and more.

## Technologies Used
Next.js
React
Tailwind CSS
The Movie Database (TMDb) API