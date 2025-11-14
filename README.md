# Profile Card App

**Student ID:** [220408011]  
**Name:** [M. Yağız Kurthan]

## Project Description

This is a React Native Profile Card application built with Expo. The app displays a scrollable list of profile cards with interactive features. Each card shows a profile image, name, and role, and users can tap on cards to see an alert message.

## Features

- **Reusable Components:** ProfileCard component that accepts props for customization
- **Responsive Design:** Uses Flexbox for layout and adapts to different screen sizes
- **Interactive UI:** Cards are tappable with TouchableOpacity and show alerts on tap
- **Scrollable List:** ScrollView enables viewing multiple profiles
- **Professional Styling:** Platform-specific shadows for both iOS and Android

## Project Structure

```
ProfileApp/
├── assets/
│   ├── person1.jpg          # Profile image for Ada Lovelace
│   ├── person2.jpg          # Profile image for Grace Hopper
│   └── person3.jpg          # Profile image for Hedy Lamarr
├── components/
│   └── ProfileCard.js       # Reusable profile card component
├── App.js                   # Main app component
├── package.json             # Project dependencies
└── README.md                # Project documentation
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Expo Go app installed on your mobile device (iOS or Android)

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone [your-repository-url]
   cd ProfileApp
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npx expo start
   ```

4. **Run on your device:**
   - Open the Expo Go app on your mobile device
   - Scan the QR code displayed in the terminal or browser
   - The app will load on your device

   **For iOS users:** If you encounter issues, try running with tunnel mode:
   ```bash
   npm install @expo/ngrok
   npx expo start --tunnel
   ```

## How to Use

1. Launch the app on your device using Expo Go
2. You'll see three profile cards displayed vertically
3. Scroll up and down to view all profiles
4. Tap on any profile card to see an alert with the person's name

## Technologies Used

- **React Native:** Framework for building native mobile apps
- **Expo:** Platform for universal React applications
- **react-native-safe-area-context:** For proper handling of safe areas on different devices

## Components

### ProfileCard Component

A reusable component that displays profile information.

**Props:**
- `name` (string): The person's name
- `role` (string): The person's role or title
- `imageSource` (image): The profile picture (using require())

**Features:**
- Circular avatar images
- Platform-specific shadow effects
- Touch feedback with alerts
- Responsive padding and margins

## Git Commit History

- **init:** Initial project setup with dependencies
- **Part 2:** Created reusable ProfileCard component with styling
- **Part 3:** Display list of profiles with ScrollView
- **Part 4:** Add interactivity with TouchableOpacity and Alert
- **Final:** Added comprehensive README documentation

## Troubleshooting

### Common Issues

1. **Metro bundler not starting:**
   - Clear cache: `npx expo start -c`

2. **Images not loading:**
   - Ensure images are in the `assets/` folder
   - Restart the Expo development server

3. **QR code not scanning:**
   - Make sure your phone and computer are on the same network
   - Try using tunnel mode: `npx expo start --tunnel`

## Future Enhancements

- Add more profile data fields (email, phone, social media)
- Implement navigation to detailed profile screens
- Add ability to edit and save profiles
- Include profile search and filter functionality
- Add animations for card interactions

## License

This project is for educational purposes as part of the Mobile Programming Lab 06.

---

**Lab:** Mobile Programming - Lab 06  
**Project:** React Native Lab 1: Building a Profile Card App  
**Date:** November 6, 2025
