# React_portfolio_server
This is a Node.js server code that allows you to handle contact form submissions and send emails using Nodemailer. It provides an API endpoint `/contact` to receive contact form data and send an email with the submitted information.

## Prerequisites
- Node.js installed on your system

## Installation
- Clone the repository or download the code files.
- Navigate to the project directory in your terminal.
- Run the following command to install the required dependencies: `npm install`

## Configuration
- Create a .env file in the root directory of the project.

- Add the following environment variables to the .env file:

    - `PORT`: (optional) The port on which the server should listen. If not provided, it will default to `5000`.

    - `EMAIL_USER`: Your Gmail email address.

    - `EMAIL_PASS`: Your Gmail password or an app password if you have two-factor authentication enabled.

## Usage
- Start the server by running the following command: `node server.js`
- Once the server is running, you can send a POST request to `/contact` with the following data in the request body:

    - `firstName`: The first name of the person submitting the form.

    - `email`: The email address of the person submitting the form.

    - `message`: The message content.

    - `phone`: (optional) The phone number of the person submitting the form.

- The server will send an email to the `EMAIL_USER` address using the provided Gmail account.

- If the email is sent successfully, the server will respond with a JSON object containing `{ code: 200, status: "Message Sent" }`. Otherwise, it will return the error details in the JSON response.

## Frontend Integration
If you have a frontend application that needs to send contact form submissions to this server, you can use the following example code:
```
// Make a POST request to the server's /contact endpoint
fetch('/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstName: 'John',
    email: 'john@example.com',
    message: 'Hello, I would like to inquire about your services.',
    phone: '1234567890', // optional
  }),
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Handle the response from the server
  })
  .catch(error => {
    console.error(error);
    // Handle any errors that occur during the request
  });
```

## Credits
This code was adapted from the [web-dev-projects](https://github.com/judygab/web-dev-projects.git) repository by [@judygab](https://github.com/judygab). Thank you, @judygab (https://github.com/judygab), for sharing the original code!

## License
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)