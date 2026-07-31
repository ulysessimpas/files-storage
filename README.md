# Ulyses G. Simpas Personal Website

Welcome to the Ulyses G. Simpas personal website project! This project showcases my skills, projects, and educational background as an Information Technology student with a passion for web development and programming.

## Project Structure

The project is organized as follows:

```
ulyses-simpas-website
├── src
│   ├── app.tsx               # Main application component
│   ├── main.tsx              # Entry point of the application
│   ├── components             # Contains all React components
│   │   ├── Navbar.tsx        # Navigation bar component
│   │   ├── Hero.tsx          # Hero section component
│   │   ├── About.tsx         # About me section component
│   │   ├── Skills.tsx        # Skills showcase component
│   │   ├── Projects.tsx      # Projects display component
│   │   ├── Education.tsx     # Education background component
│   │   ├── Contact.tsx       # Contact information component
│   │   ├── Footer.tsx        # Footer component
│   │   └── ThemeToggle.tsx    # Dark mode toggle component
│   ├── data
│   │   └── siteData.ts       # Static data for the website
│   ├── hooks
│   │   └── useDarkMode.ts    # Custom hook for dark mode
│   ├── styles
│   │   └── globals.css       # Global CSS styles
│   └── types
│       └── index.ts          # TypeScript types and interfaces
├── public
│   └── favicon.svg           # Favicon for the website
├── package.json              # NPM configuration file
├── tsconfig.json             # TypeScript configuration file
├── vite.config.ts            # Vite configuration file
├── index.html                # Main HTML template
├── README.md                 # Project documentation
└── .gitignore                # Git ignore file
```

## Features

- **Responsive Design**: The website is designed to be fully responsive, ensuring a great user experience on all devices.
- **Dark Mode**: Users can toggle between light and dark modes for better accessibility and comfort.
- **Dynamic Components**: Each section of the website is modularized into components for easier maintenance and scalability.

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/ulyses-simpas-website.git
   ```
2. Navigate to the project directory:
   ```
   cd ulyses-simpas-website
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```
5. Open your browser and go to `http://localhost:3000` to view the website.

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to create a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.