# Movie Database App (React)

This is a simple React application that fetches and displays movies from The Movie Database (TMDb) API.

## Features

* Displays a list of movies fetched from the TMDb API.
* Shows movie posters, titles, ratings, and release dates.
* Responsive grid layout for different screen sizes.
* Loading indicator while fetching data.

## Technologies Used

* React
* Tailwind CSS (for styling)
* TMDb API

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd <project_directory>
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  **Obtain a TMDb API key:**

    * Go to [TMDb](https://www.themoviedb.org/) and create an account.
    * Go to your account settings and request an API key.

5.  **Replace the API key in the `App.js` file:**

    * Find the following line in `App.js`:

        ```javascript
        const res=await fetch("[https://api.themoviedb.org/3/discover/movie?api_key=b19a032083aa92a8ff5fc868c24d20e2](https://api.themoviedb.org/3/discover/movie?api_key=b19a032083aa92a8ff5fc868c24d20e2)")
        ```

    * Replace `b19a032083aa92a8ff5fc868c24d20e2` with your own API key.

6.  **Start the development server:**

    ```bash
    npm start
    ```

7.  **Open the application in your browser:**

    * Go to `http://localhost:3000`

