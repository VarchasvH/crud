# CRUD App with React and Axios

This project is a simple CRUD (Create, Read, Update, Delete) application built with React.js and Axios. It demonstrates basic operations using a mock API from JSONPlaceholder to manage user data.

## Features

- Fetch user data from an API.
- Update user details.
- Delete user data.
- Register new users.

## Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/your-repository.git
```

2. Navigate into the project directory:

```bash
cd your-repository
```

3. Install dependencies using npm:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

## Usage

Once the development server is running, you can access the application in your web browser at `http://localhost:5173`.

### Files and Components

- **Update.js**: Component to update user details retrieved from the API.
- **Home.js**: Component displaying a list of users and providing options to edit or delete them.
- **Register.js**: Component to register new users by submitting data to the API.

### How to Use the Components

#### Update.js

The `Update.js` component allows you to update user details retrieved from the API. It fetches user data based on the ID parameter from the URL and provides input fields to modify the user's name, email, address, city, and zipcode. After making changes, you can submit the updated data to the API using the "Update" button.

#### Home.js

The `Home.js` component displays a list of users fetched from the API. It shows user details such as username, email, and phone number in a table format. Each user row includes options to edit (via `Update.js`) or delete the user. Clicking the edit button navigates to the `Update.js` component for modifying user details, while the delete button removes the user data from the list and API.

#### Register.js

The `Register.js` component is used to register new users by submitting username, email, and password data to the API. After entering the required information, click the "Register" button to create a new user. If any details are missing, an alert will prompt you to fill in all fields before registration.

## Folder Structure

The project folder structure is organized as follows:

```
src/
|-- components/
|   |-- Update.js
|   |-- Home.js
|   |-- Register.js
|-- App.js
|-- index.js
|-- index.css
```

- **components/**: Directory containing React components (`Update.js`, `Home.js`, `Register.js`).
- **App.js**: Main component rendering the application layout and routing.
- **index.js**: Entry point of the application.
- **index.css**: Global CSS styles for the application.

## Dependencies

- React.js: Frontend library for building user interfaces.
- react-router-dom: Library for managing routing within a React application.
- Axios: Promise-based HTTP client for making requests to the API.

## API Used

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/): A fake online REST API for testing and prototyping.

## Contributing

Contributions are welcome! Feel free to open issues or pull requests for any improvements or additional features.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
