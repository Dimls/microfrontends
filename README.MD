## Why iframes for Micro Frontends?

Micro frontends provide a modular and scalable approach to building web applications by breaking them down into smaller, independently deployable units. Using iframes as the integration mechanism for micro frontends offers several advantages:

- **Isolation:** iframes provide a high degree of isolation, allowing micro frontends to run independently without interfering with each other. This isolation helps prevent style and JavaScript conflicts between different micro frontends.

- **Technology Agnostic:** iframes enable the integration of micro frontends developed with different technologies (e.g., Vue, React, Angular) into a single application. Each micro frontend can be built with its preferred framework and still seamlessly integrated into the overall system.

- **Independent Deployment:** Since micro frontends are loaded in iframes, they can be developed, tested, and deployed independently. This enables teams to work autonomously and release updates to their micro frontends without affecting the entire application.

- **Scalability:** iframes allow the application to scale horizontally by distributing different micro frontends across multiple servers or services. Each micro frontend can be hosted and scaled independently, improving performance and resilience.

- **Security:** iframes provide a security boundary between the micro frontends and the host application. This helps mitigate security risks by preventing unauthorized access to sensitive data or interactions between different micro frontends.

Using iframes as the integration mechanism for micro frontends provides a flexible and scalable architecture, enabling teams to build and maintain complex applications composed of independently developed and deployed components.


- Node.js version: v16.13.0

## Available Scripts

### `cd microfrontend-service`

### `npm install`

Installs dependencies

### `npm run dev`

Lunches the dev server for the microfrontend service to http://127.0.0.1:5173/
### `open a new terminal`

### `cd container-service`

### `npm install`

Installs dependencies

### `npm run start`

Lunches the dev server for the container service  to http://localhost:3000/



