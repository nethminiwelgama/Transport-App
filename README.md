# GoMate Transport App

A modern, user-friendly mobile application for transportation services built with React Native and Expo. GoMate helps users discover, compare, and favorite various transportation routes including buses, trains, metros, and ferries.

## 🚀 Features

### Core Functionality
- **Route Discovery**: Browse available transportation routes with detailed information
- **Real-time Information**: View route schedules, durations, and pricing
- **Favorites System**: Save and manage favorite routes for quick access
- **Dark/Light Theme**: Toggle between themes for better user experience
- **User Authentication**: Secure login and registration using Auth0

### Transportation Types Supported
- 🚌 Bus Routes
- 🚆 Train Services
- 🚇 Metro Lines
- ⛴️ Ferry Routes

### User Experience
- **Intuitive Navigation**: Tab-based navigation with stack navigation for details
- **Responsive Design**: Optimized for both mobile and tablet devices
- **Offline Support**: Local storage for favorites and user preferences
- **Smooth Animations**: Native-feeling interactions and transitions

## 🛠️ Technology Stack

### Frontend
- **React Native 0.81.5** - Cross-platform mobile development
- **Expo ~54.0.25** - Development platform and build service
- **React Navigation 7.0.0** - Navigation library for React Native

### State Management
- **Redux Toolkit 2.0.0** - State management
- **React Redux 9.0.0** - React bindings for Redux

### Authentication
- **Auth0** - Authentication and authorization
- **AsyncStorage** - Local storage for user data

### UI/UX
- **Expo Vector Icons** - Icon library
- **Custom Theme System** - Dark/Light mode support
- **Responsive Components** - Adaptive UI components

### Development Tools
- **Yup** - Schema validation
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 📱 Screenshots

*(Add screenshots of your app here)*

## 🚀 Getting Started

### Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- **Expo CLI** (`npm install -g @expo/cli`)
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/gomate-transport-app.git
   cd gomate-transport-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure Auth0** (if using authentication)
   - Create an Auth0 account and application
   - Update the Auth0 configuration in your app

4. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

### Running the App

#### For Android
```bash
npm run android
# or
yarn android
```

#### For iOS (macOS only)
```bash
npm run ios
# or
yarn ios
```

#### For Web
```bash
npm run web
# or
yarn web
```

## 📁 Project Structure

```
gomate-transport-app/
├── App.js                    # Main application component
├── app.json                  # Expo configuration
├── index.js                  # Application entry point
├── package.json              # Dependencies and scripts
├── assets/                   # Static assets (images, icons)
├── components/               # Reusable UI components
│   ├── CustomInput.js        # Custom input component
│   └── TransportCard.js      # Transportation route card
├── navigation/               # Navigation configuration
│   ├── StackNavigator.js     # Stack navigation setup
│   └── TabNavigator.js       # Tab navigation setup
├── redux/                    # State management
│   ├── store.js              # Redux store configuration
│   └── slices/               # Redux slices
│       ├── authSlice.js      # Authentication state
│       └── transportSlice.js # Transport data state
├── screens/                  # Application screens
│   ├── DetailsScreen.js      # Route details screen
│   ├── FavoritesScreen.js    # User favorites screen
│   ├── HomeScreen.js         # Main home screen
│   ├── LoginScreen.js        # User login screen
│   └── RegisterScreen.js     # User registration screen
└── utils/                    # Utility functions and constants
    ├── constants.js          # App constants and mock data
    ├── ThemeContext.js       # Theme context provider
    └── validation.js         # Form validation schemas
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory and add your configuration:

```env
# Auth0 Configuration
AUTH0_DOMAIN=your-auth0-domain
AUTH0_CLIENT_ID=your-auth0-client-id

# API Configuration
API_URL=https://your-api-endpoint.com

# Other configurations
NODE_ENV=development
```

### API Integration

The app uses MockAPI for demonstration purposes. To integrate with a real API:

1. Update the `API_URL` in `utils/constants.js`
2. Modify the API calls in `redux/slices/transportSlice.js`
3. Update data models as needed

## 🧪 Testing

### Running Tests
```bash
npm test
# or
yarn test
```

### Testing Strategy
- Unit tests for utility functions
- Integration tests for Redux slices
- Component tests for UI components
- End-to-end tests for critical user flows

## 🚀 Deployment

### Building for Production

#### Android APK/AAB
```bash
expo build:android
```

#### iOS App Store
```bash
expo build:ios
```

### Publishing to Expo
```bash
expo publish
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Run tests and linting**
   ```bash
   npm run test
   npm run lint
   ```
5. **Commit your changes**
   ```bash
   git commit -m "Add your commit message"
   ```
6. **Push to your branch**
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request**

### Code Style
- Follow the existing code style
- Use meaningful variable and function names
- Add comments for complex logic
- Write tests for new features

## 📝 API Documentation

### Transport Routes API

#### Get All Routes
```http
GET /api/routes
```

Response:
```json
[
  {
    "id": 1,
    "route": "Route 101",
    "type": "Bus",
    "from": "Central Station",
    "to": "Airport Terminal",
    "duration": "45 mins",
    "price": "$5.50",
    "frequency": "Every 15 mins",
    "status": "Active",
    "image": "https://...",
    "description": "...",
    "operator": "City Transit",
    "schedule": ["6:00 AM", "6:15 AM", ...]
  }
]
```

## 🐛 Troubleshooting

### Common Issues

1. **Metro bundler issues**
   ```bash
   npm start --clear
   ```

2. **Cache issues**
   ```bash
   expo r -c
   ```

3. **Dependency conflicts**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

### Performance Tips
- Use FlatList for large lists
- Implement proper key props
- Optimize images and assets
- Use React.memo for expensive components

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Your Name** - *Initial work* - [Your GitHub](https://github.com/your-username)

## 🙏 Acknowledgments

- React Native Community
- Expo Team
- Auth0 for authentication
- Unsplash for demo images
- All contributors

## 📞 Support

For support, email support@gomate.com or join our Slack channel.

---

**Happy traveling with GoMate! 🚀**