# Passenger Chatbot

## Overview

The Passenger Chatbot project is a web application that integrates a chatbot for handling customer service inquiries related to flights. This project uses React for the frontend, and Webpack for module bundling and development server setup.

## Project Structure

- `chatbot_backend/`: Contains the backend logic and API integrations.
- `chatbot_frontend/`: Contains the React application and Webpack configuration.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or later)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/christymugs/passenger_chatbot.git

2. Navigate to the chatbot_frontend directory:
   - cd passenger_chatbot/chatbot_backend/chatbot_frontend

4. Install dependencies:
    - npm install

### Running the Application
    npx webpack serve

#### Troubleshooting
    - Error: listen EADDRINUSE: If you encounter an address already in use error, it means the port is occupied by another process. You can either kill the process using the port or configure Webpack to use a different port by modifying webpack.config.js.
    - Cannot GET /: If you see this error, ensure that the index.html file exists in the public directory, and that your Webpack configuration is correctly pointing to this directory.

#### Acknowledgements
    Thanks to the Webpack and React communities for their support and documentation.
