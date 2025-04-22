# Health-care

## Description

Health-care is a React-based application designed to provide health services. It offers functionalities for patients and doctors, including appointment scheduling, medical records management, and communication features.

## Features and Functionality

*   **Home Page:** Landing page with information about the health services.
*   **Doctor Dashboard:** Dedicated dashboard for doctors to manage appointments, patient records, and schedules.
*   **Patient Dashboard:** Personalized dashboard for patients to book appointments, view medical records, and communicate with doctors.
*   **Authentication:** User registration and login functionality for both patients and doctors.
*   **Appointment Scheduling:** Allows patients to book appointments with doctors based on specialty, date, and location.
*   **Medical Records Management:** Enables doctors to manage and update patient medical records.
*   **Communication:** Messaging feature for patients and doctors to communicate effectively.
*   **Pharmacies directory:** A list of pharmacies near you.
*   **Health blogs and articles:** Acess the community and health blogs.

## Technology Stack

*   **React:** JavaScript library for building user interfaces.
*   **React Router:** Library for navigation within the application.
*   **React Icons:** Library for incorporating icons into the application.
*   **Lucide React:** Library for incorporating icons into the application.
*   **Axios/Fetch API:** Used for making HTTP requests to the backend server.
*   **Tailwind CSS:** Used for styling the frontend

## Prerequisites

Before running the application, ensure you have the following installed:

*   **Node.js:** JavaScript runtime environment.  Minimum version 16 or higher.
*   **npm:** Package manager for Node.js (usually comes with Node.js installation).

## Installation Instructions

1.  Clone the repository:

    ```bash
    git clone https://github.com/eric2003tu/Health-care.git
    cd Health-care
    ```

2.  Install the dependencies:

    ```bash
    npm install
    ```

## Usage Guide

1.  Start the development server:

    ```bash
    npm run dev
    ```

2.  Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

3.  **User Registration:**

    *   Navigate to the `/signup` route.
    *   Select the user role (Patient or Doctor).
    *   Fill in the required information and submit the form.
    *   Verify your email address using the OTP sent to your registered email.

4.  **User Login:**

    *   Navigate to the `/login` route.
    *   Enter your email and password.
    *   Select your role (Patient or Doctor).
    *   Click the "Login" button.
    *   Upon successful login, you will be redirected to your respective dashboard.

5.  **Patient Dashboard:**

    *   **Find a Doctor:**  Use the "Find a Doctor" section to search for doctors based on specialty, date, and location.
    *   **Pharmacies directory:** Use the pharmacies link to search for pharmacies around you.
    *   **Health blogs and articles:** use the blog link to read health articles and blogs.

6.  **Doctor Dashboard:**

    *   **Appointment Management:**  View and manage appointments in the "Schedules" section.
    *   **Patient Records:** Access and update patient medical records.
    *   **Communication:** Use the messaging feature to communicate with patients.

## API Documentation (if applicable)

The application interacts with a backend server (API) for user authentication, data retrieval, and storage.  The backend API endpoints include:

*   `POST /api/patient/signup`: Patient registration endpoint.
*   `POST /api/doctor/signup`: Doctor registration endpoint.
*   `POST /api/patient/login`: Patient login endpoint.
*   `POST /api/doctor/login`: Doctor login endpoint.
*   `POST /api/patient/verify`: Patient OTP verification endpoint.
*   `POST /api/doctor/verify`: Doctor OTP verification endpoint.
*   `POST /api/patient/resendOtp`: Patient OTP resend endpoint.
*   `POST /api/doctor/resendOtp`: Doctor OTP resend endpoint.
*   `GET /api/user/users`: Fetch all users

The base URL for the API is `https://employee-management-app-ghrg.onrender.com/api/user/`.

## Contributing Guidelines

Contributions are welcome! To contribute to the project, follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Implement your changes and thoroughly test them.
4.  Submit a pull request with a clear description of your changes.

## License Information

This project has no specified license. All rights are reserved.

## Contact/Support Information

For any questions, issues, or support requests, please contact: ericntwari2003@gmail.com