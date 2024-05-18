# PlateSwap

PlateSwap is a web application aimed at facilitating food sharing and surplus reduction. It provides various features and functionalities to allow users to share surplus food items, make requests for specific items, and manage their interactions securely.

## Technologies Used

- **Frontend**: React.js, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Other Tools**: React Router, Axios, TanStack Query, react-toastify

## Project Features

### Navbar

The navbar includes links to different sections of the website:
- Home
- Available Foods
- Add Food (PRIVATE)
- Manage My Foods (PRIVATE)
- My Food Request (PRIVATE)
- Login/Signup

Except for the Home, Available Foods, and Login/Signup routes, all other routes are private.

### Login & Registration Systems

#### Login Page
- Email/Password form
- Google/Github Sign-in
- Link to redirect to the registration page

#### Registration Page
- Form with fields:
  - Name
  - Email
  - Password
  - Photo URL

### Home Page

#### Banner/Slider
- Catchy and impressive banner/slider

#### Featured Foods
- Display at least 6 featured food items with relevant information:
  - Food Image
  - Food Name
  - Donator Image & Name
  - Food Quantity
  - Pickup Location
  - Expired Date/Time
  - Additional Notes
  - View Detail Button
- Show All button to redirect to the Available Foods page

#### Extra Sections
- Add 2 relevant extra sections to enhance the homepage.

### Add a Food (PRIVATE)

Create an Add Food page with a form including fields such as:
- Food Name
- Food Image
- Food Quantity
- Pickup Location
- Expired Date/Time
- Additional Notes
- Donator Image, Name, & Email (From logged-in user)
- Food Status (By default, set to "available")

### Available Foods Page

#### Search Section
- Implement search functionality by Food name.

#### Sorting Section
- Implement sorting functionality by Food Expire Date.

#### Foods Section
- Show all available foods with the following information:
  - Food Image
  - Food Name
  - Donator Image & Name
  - Food Quantity
  - Pickup Location
  - Expired Date/Time
  - Additional Notes
  - View Details Button

### Single Food Details

After clicking on the View Details button, the user will be redirected to the Food Details route (/food/:id) containing:
- Donor Information
- Single Food Section

### Manage My Foods (PRIVATE)

This page shows all foods added by the logged-in user in a tabular format. Each row includes:
- Update and Delete buttons

### My Food Request (PRIVATE)

This page displays all food requests made by the logged-in user in a tabular format.

### Show The Toast

Display relevant toast/notification for all CRUD operations with meaningful messages.

### 404 Page

Create a custom 404 page with an interesting image/gif and a Back to Home button.

### Explore New Packages

Implement two of the following packages to enhance functionality:
- react-elastic-carousel
- Lottie-react
- Framer-motion
- React Hook Form

here i used react hook and Framer-motion
## Challenges Part

### Layout
Implement a toggle button to change the layout from three columns to two columns in the Available Foods Page.

### TanStack Query
Implement TanStack Query for fetching API data and utilize the mutation feature for CRUD operations.

### Security with JWT
Implement JWT for user authentication and authorization on private routes.


