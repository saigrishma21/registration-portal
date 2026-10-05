Registration Portal
A responsive user registration portal built with React.js using reusable components, Formik form handling, Yup validation, API integration, and modern responsive UI styling.
🚀 Features
- Responsive registration form
- Reusable React components
- Form handling with Formik
- Client-side validation with Yup
- REST API integration using Fetch API
- Validation error messages
- Password and confirm-password validation
- Loading state during form submission
- Success and error messages
- Responsive design for desktop, tablet, and mobile
- Clean and maintainable project structure
🛠️ Technologies Used
- React.js
- JavaScript
- Formik
- Yup
- Fetch API
- HTML5
- CSS3
- Vite
- ESLint
- Git & GitHub
📂 Project Structure
registration-portal/
│
├── src/
│   ├── components/
│   │   ├── FormInput.jsx
│   │   ├── Message.jsx
│   │   └── RegistrationForm.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── validation/
│   │   └── registrationSchema.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
 
📌 Components
RegistrationForm.jsx
Main registration form component that handles Formik, Yup validation, API integration, and form submission.
FormInput.jsx
Reusable input component used for name, email, phone, password, and confirm-password fields.
Message.jsx
Reusable component used to display success and error messages.
registrationSchema.js
Contains the Yup validation rules for all registration fields.
api.js
Handles API communication using the JavaScript Fetch API.
App.jsx
Main application component that renders the registration form.
index.css
Contains the complete responsive styling for the application.
🔄 Application Flow
User enters registration details
            ↓
      FormInput Components
            ↓
          Formik
            ↓
       Yup Validation
            ↓
      Valid information?
        ↙          ↘
      No            Yes
      ↓              ↓
Show errors      API Request
                     ↓
                 Fetch API
                     ↓
                API Response
                 ↙       ↘
             Success     Error
                ↓          ↓
        Success Message  Error Message
 
✅ Form Validation
Field	Validation
Full Name	Required, minimum 3 characters
Email	Required, valid email format
Phone Number	Required, exactly 10 digits
Password	Required, minimum 6 characters
Confirm Password	Must match password
 
 
🔌 API Integration
The application uses the Fetch API to send registration information through a POST request.
const response = await fetch(API_URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(userData)
});
 
Note: The project currently uses a practice/mock REST API to demonstrate frontend API integration. It does not permanently store user registration data in a production database.
 
📱 Responsive Design
The application is responsive and designed to work across:
- Desktop
- Laptop
- Tablet
- Mobile devices
CSS media queries are used to adapt the registration form to different screen sizes.
⚙️ Installation and Setup
1. Clone the repository
git clone https://github.com/saigrishma21/registration-portal.git
 
2. Navigate to the project
cd registration-portal
 
3. Install dependencies
npm install
 
4. Start the development server
npm run dev
 
5. Open the application
Open the URL displayed by Vite, usually:
http://localhost:5173/
 
🧪 Testing
The application can be tested by:
1. Submitting the form with empty fields.
2. Checking the validation messages.
3. Entering an invalid email.
4. Entering an invalid phone number.
5. Entering different passwords.
6. Entering valid registration details.
7. Submitting the form.
8. Checking the API response and success message.
🎯 Project Objective
This project demonstrates practical frontend development using React and modern form-handling techniques.
Key concepts demonstrated:
- Component-based React development
- Reusable components
- Form state management with Formik
- Client-side validation with Yup
- REST API integration
- Error and success handling
- Responsive UI development
- Clean project organization
🔮 Future Enhancements
- Real backend registration API
- Database integration
- User authentication
- Login functionality
- JWT authentication
- Email verification
- Password reset
- User dashboard
👩‍💻 Author
Saigrishma
GitHub:
https://github.com/saigrishma21
