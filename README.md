# VRV_ASSIGNMENT

User Authentication: Secure user registration and login using hashed passwords and JWT tokens.
Authorization: Role-based access control to restrict access to certain endpoints based on user roles (e.g., Admin, User).
JWT Management: Secure session handling using JSON Web Tokens (JWT).
Secure Database: MongoDB for managing user data with roles and permissions.


git clone https://github.com/rawiina/VRV_ASSIGNMENT.git
cd VRV_ASSIGNMENT

Install Dependencies
npm install

Create a .env file in the root of the project and add the following variables:
PORT=5000
MONGO_URI=<your_mongo_connection_string>
JWT_SECRET=<your_jwt_secret> // use the tken.js to generate the jwt_secret_key



