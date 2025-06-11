# Mini Weather App

A lightweight weather application built with Vue.js and Vite, designed to provide quick and intuitive weather information.

## Installation

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Steps

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd mini-weather
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Delivery / Deployment Process

### Development

- Run `npm run dev` to start the development server
- The application will automatically reload when you make changes

### Production Build

- Run `npm run build` to create a production-ready build
- The built files will be in the `dist/` directory
- Run `npm run preview` to preview the production build locally

### Deployment Options

- **Static Hosting**: Deploy the `dist/` folder to any static hosting service (Netlify, Vercel, GitHub Pages)
- **CDN**: Upload built files to a CDN for global distribution
- **Docker**: Can be containerized for deployment in any container orchestration platform

## Project Structure

```
mini-weather/
├── src/
│   ├── App.vue          # Main application component
│   ├── main.js          # Application entry point
│   └── style.css        # Global styles
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── package.json         # Dependencies and scripts
├── package-lock.json    # Dependency lock file
├── .gitignore          # Git ignore rules
└── README.md           # Project documentation
```

## Frameworks / Libraries Used

### Core Framework

- **Vue.js 3.5.16**: Progressive JavaScript framework for building user interfaces
- **Vite 6.3.5**: Fast build tool and development server

### Development Tools

- **@vitejs/plugin-vue 5.2.4**: Official Vue plugin for Vite
- **ES Modules**: Modern JavaScript module system

### Build Configuration

- **Vite**: Configured with Vue plugin support
- **Development Server**: Runs on port 3000 with auto-open browser
- **Hot Module Replacement**: Enabled for fast development

## Server Information

### Development Server

- **Port**: 3000 (configurable in `vite.config.js`)
- **Host**: localhost
- **Auto-open**: Browser automatically opens on server start
- **Hot Reload**: Enabled for real-time updates

### Production Server

- Static files served from `dist/` directory
- Compatible with any web server (Apache, Nginx, etc.)
- CDN-friendly for global distribution

## Continuous Integration

### Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build locally
- `npm test`: Run tests (currently not configured)

### Recommended CI/CD Pipeline

1. **Code Quality**: ESLint, Prettier integration
2. **Testing**: Unit tests with Vitest (recommended)
3. **Build**: Automatic production builds on push
4. **Deploy**: Auto-deployment to staging/production environments

## Other Information

### Development Notes

- Built with modern JavaScript (ES6+)
- Follows Vue.js 3 Composition API patterns
- Responsive design principles
- Modular component architecture

### Future Enhancements

- Weather API integration
- Location-based weather data
- Weather forecasts and historical data
- Responsive mobile design
- Progressive Web App (PWA) features

### Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

### License

ISC License - see package.json for details

### Support

For issues and questions, please create an issue in the project repository.
