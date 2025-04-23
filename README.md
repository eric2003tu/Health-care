# Health-care

## Description

Health-care is a web application providing health services, connecting patients and doctors, and offering access to pharmacies, medical information, and more. It offers features for appointment scheduling, doctor discovery, telemedicine consultations, and access to medical records.

## Features and Functionality

*   **User Authentication:** Secure signup and login for patients and doctors.
*   **Doctor and Patient Roles:** Distinct dashboards and functionalities based on user roles.
*   **Doctor Dashboard:**  Provides an interface for managing schedules, patient records, and appointments.
*   **Patient Dashboard:** Allows patients to find doctors, book appointments, access health information, and manage medical records.
*   **Appointment Scheduling:**  Patients can schedule appointments with doctors based on specialty, date, and location.
*   **Doctor Search:** Patients can search for doctors by specialty and location, as demonstrated in `src/Components/LogedHome.jsx`.
*   **Pharmacy Information:** Provides information on nearby pharmacies and their services.
*   **Medical Information Access:**  Links to blogs and articles on health-related topics.
*   **Telemedicine Consultation:** Facilitates online consultations with doctors.
*   **Responsive Design:**  The application is designed to be responsive and accessible on various devices.
*   **Calendar Integration:** Uses `react-calendar` in `src/Components/LogedHome.jsx` to display upcoming appointments.

## Technology Stack

*   **React:**  A JavaScript library for building user interfaces.
*   **React Router:**  A standard library for routing in React applications.
*   **Vite:**  A build tool that provides a fast and optimized development experience.
*   **Axios/Fetch:** Used for making HTTP requests to the backend API (example seen in `src/Components/AddPatients.jsx`).
*   **JavaScript:** Primary programming language.
*   **CSS:** Used for styling the application (see `src/App.css` for global styles and individual component CSS).
*   **lucide-react:** Used for icons.
*   **react-icons:** Used for icons.
*   **AOS:** Used for animations.

## Prerequisites

Before running the application, ensure you have the following installed:

*   **Node.js:** (Version >= 12) - JavaScript runtime environment.  Download from [https://nodejs.org/](https://nodejs.org/)
*   **npm:** (Usually comes with Node.js) - Package manager for JavaScript.
*   **Vite:** Vite is used as the build tool

## Installation Instructions

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/eric2003tu/Health-care.git
    cd Health-care
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

## Usage Guide

1.  **Start the development server:**

    ```bash
    npm run dev
    ```

    This command will start the application in development mode.  Open your browser and navigate to the address provided (usually `http://localhost:5173/`).

2.  **Accessing Different Routes:**

    *   `/`: Home page ( `src/Components/Home.jsx` )
    *   `/login`: Login page ( `src/Components/Login.jsx` )
    *   `/signup`: Signup page ( `src/Components/Signup.jsx` )
    *   `/patient`: Patient dashboard ( `src/Components/Patient.jsx`, `src/Components/LogedHome.jsx` )
    *   `/doctor`: Doctor dashboard ( `src/Components/DoctorDashboard.jsx` , `src/Components/DoctorPage.jsx`)
    *   `/patient/findDoctors`: Find doctors page, accessed after submitting the doctor search form ( `src/Components/doctor.jsx` )

3.  **User Roles:**

    *   When signing up, users can select either "Patient" or "Doctor" role. This selection determines the features and access available after logging in.  Role selection is handled in `src/Components/Signup.jsx`.

4.  **Doctor Search:**

    *   On the Patient Dashboard, use the "Find a doctor" section ( `src/Components/LogedHome.jsx` ) to search for doctors by specialty, date, and location.  The results are displayed on the `/patient/findDoctors` route.

## API Documentation

The application relies on the following backend APIs:

*   **Authentication:**
    *   `POST /api/patient/signup`: Patient signup ( `src/Components/Signup.jsx` )
    *   `POST /api/doctor/signup`: Doctor signup ( `src/Components/Signup.jsx` )
    *   `POST /api/patient/login`: Patient login ( `src/Components/Login.jsx` )
    *   `POST /api/doctor/login`: Doctor login ( `src/Components/Login.jsx` )
    *   `POST /api/patient/verify`: Patient OTP verification ( `src/Components/Signup.jsx`, `src/Components/Login.jsx` )
    *   `POST /api/doctor/verify`: Doctor OTP verification ( `src/Components/Signup.jsx`, `src/Components/Login.jsx` )
    *   `POST /api/patient/resendOtp`: Resend OTP for patients ( `src/Components/Signup.jsx`, `src/Components/Login.jsx` )
    *   `POST /api/doctor/resendOtp`: Resend OTP for doctors ( `src/Components/Signup.jsx`, `src/Components/Login.jsx` )
    *   `POST /api/user/add`: Add new user (`src/Components/AddPatients.jsx`)
    *   `POST /api/patient/forget`: Forget password patient (`src/Components/login.jsx`)

*   **User Data:**
    *   `GET /api/user/users`: Fetch all users ( `src/Components/AddPatients.jsx` )

**Note:** Replace `https://employee-management-app-ghrg.onrender.com` and `https://baho-healthcare.onrender.com` with your actual backend server URL if it is different.

## Contributing Guidelines

We welcome contributions to the Health-care project! To contribute, please follow these steps:

1.  **Fork the repository.**
2.  **Create a new branch for your feature or bug fix:**

    ```bash
    git checkout -b feature/your-feature-name
    ```

3.  **Make your changes and commit them:**

    ```bash
    git add .
    git commit -m "Add: your descriptive commit message"
    ```

4.  **Push your changes to your forked repository:**

    ```bash
    git push origin feature/your-feature-name
    ```

5.  **Create a pull request to the `master` branch of the original repository.**

Please ensure your code adheres to the existing style and conventions, and that all tests pass before submitting a pull request.

## License Information

This project does not have a specified license. All rights are reserved by the repository owner.

## Contact/Support Information

For questions, bug reports, or feature requests, please contact:

[No contact information provided - insert contact information here, like an email]