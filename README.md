# Learning Platform - Activity Listing App

A premium, mobile-first activity listing application for online learning platforms built with React Native, Expo, and Tamagui. Features beautiful gradients, smooth animations, and works seamlessly on both web and native mobile platforms from a single codebase.

## 🎯 Problem Statement

Built for online learning platforms serving learners in AI, Machine Learning, and Cloud Computing programs. The app provides a centralized hub for listing learning activities with quick access to classes, assignments, quizzes, and discussions with relevant filtering and search capabilities.

## ✨ Features

### Activity Management

- **Multiple Activity Types**: Online Classes, Assignments, Quizzes, Discussions
- **Status Tracking**: Not Started, In Progress, Completed
- **Rich Activity Cards**: Type badges, status indicators, duration display, and action buttons
- **Detail View**: Comprehensive activity information with gradient hero sections

### Search & Filtering

- **Real-time Search**: Instant search across all activity titles
- **Type Filters**: Filter by activity type (Classes, Assignments, Quizzes, Discussions)
- **Status Filters**: Filter by completion status
- **Combined Filtering**: Apply multiple filters simultaneously
- **Results Counter**: Live count of filtered activities

### Design Excellence

- **Gradient UI**: Beautiful color-coded gradients for each activity type
- **Modern Cards**: Elevated cards with sophisticated shadows and hover effects
- **Smooth Animations**: Buttery smooth transitions and interactions
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Platform-Specific Optimization**: Adapts to web vs native automatically

### Activity Types with Color Coding

- 📚 **Classes** - Blue gradient (#3B82F6 → #60A5FA)
- 📝 **Assignments** - Purple gradient (#8B5CF6 → #A78BFA)
- ✅ **Quizzes** - Pink gradient (#EC4899 → #F472B6)
- 💬 **Discussions** - Green gradient (#10B981 → #34D399)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Expo CLI (for native development)
- iOS Simulator (Mac only) or Android Emulator

### Installation

1. **Clone the repository**:

```bash
git clone <https://github.com/akm-engineer/great-learning.git>
cd learning-platform
```

2. **Install dependencies**:

```bash
npm install
# or
yarn install
```

### Running on Web

```bash
npm run web
# or
npx expo start --web
```

Open [http://localhost:8081](http://localhost:8081) in your browser.

### Running on Mobile

#### iOS (Mac only)

```bash
npm run ios
# or
npx expo start --ios
```

#### Android

```bash
npm run android
# or
npx expo start --android
```

#### Using Expo Go App

```bash
npm start
# or
npx expo start
```

Scan the QR code with:

- **iOS**: Camera app
- **Android**: Expo Go app

## 📱 Building for Production

### Build Web App

```bash
npx expo export --platform web
```

Output in `dist/` folder. Deploy to any static hosting service.

### Build Native Apps

#### iOS (requires Apple Developer account)

```bash
eas build --platform ios
```

#### Android

```bash
eas build --platform android
```

**Note**: Requires Expo Application Services (EAS) account. Sign up at [expo.dev](https://expo.dev).

## 🏗️ Architecture

### Tech Stack

- **Framework**: React Native + Expo Router
- **UI Library**: Tamagui (universal design system)
- **State Management**: Zustand (lightweight state management)
- **Navigation**: Expo Router (file-based routing)
- **Language**: TypeScript
- **Gradients**: tamagui/linear-gradient

### Why This Stack?

#### Tamagui

- **Universal**: Single codebase for web and native
- **Performance**: Optimized rendering and style compilation
- **Type-Safe**: Full TypeScript support
- **Themeable**: Built-in theme system
- **Responsive**: Automatic platform adaptations

#### Expo Router

- **File-Based Routing**: Routes generated from file structure
- **Type-Safe**: Auto-generated route types
- **Deep Linking**: Built-in deep link support
- **Shared Routes**: Same navigation code for web and native

#### Zustand

- **Lightweight**: Minimal bundle size (~1KB)
- **Simple API**: Easy to learn and use
- **No Boilerplate**: Direct state access
- **TypeScript**: Full type inference

## 🔧 State Management

### Store Structure

```typescript
interface ActivityStore {
	activities: Activity[];
	typeFilter: ActivityType | 'all';
	statusFilter: ActivityStatus | 'all';
	search: string;

	setActivities: (activities: Activity[]) => void;
	setTypeFilter: (filter: ActivityType | 'all') => void;
	setStatusFilter: (filter: ActivityStatus | 'all') => void;
	setSearch: (search: string) => void;
}
```

### Activity Interface

```typescript
interface Activity {
	id: string;
	title: string;
	type: 'class' | 'assignment' | 'quiz' | 'discussion';
	status: 'not_started' | 'in_progress' | 'completed';
	duration?: number;
	description?: string;
	dueDate?: string;
	instructor?: string;
}
```

## 📊 Data Flow

1. **Initial Load**: Mock data loaded into Zustand store
2. **User Interaction**: Filters/search update store state
3. **Computed Filtering**: Activities filtered in component
4. **Re-render**: UI updates with filtered results
5. **Navigation**: Router pushes to detail page with activity ID

## 📄 License

MIT

## 👨‍💻 Author

Built as an assignment submission for a frontend developer position, showcasing modern React Native development skills with emphasis on design excellence and cross-platform compatibility.

## 🙏 Acknowledgments

- **Tamagui** - Universal design system
- **Expo** - Development platform
- **Zustand** - State management
- Design inspiration from modern learning platforms

---

**Ready to impress in your interview!** 🚀
