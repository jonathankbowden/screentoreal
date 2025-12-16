# Screen to Real Life - Expedia AI Trip Suggestions

An interactive prototype demonstrating how Expedia could connect to users' digital lives and use AI to proactively suggest personalized trips based on their actual interests.

## 🎯 Concept

This prototype shows a futuristic, premium experience where Expedia:
- Connects to your digital life (Spotify, Netflix, Instagram, ESPN)
- Analyzes your interests and passions using AI
- Suggests perfectly personalized trips that match your screen activity
- Creates detailed itineraries based on what you actually love

## ✨ Features

### Five Interactive Screens

1. **Home Page** - "Turn Your Screen Life Into Real Life" callout with premium animations
2. **Account Connection** - Connect Spotify, Netflix, Instagram, and ESPN accounts
3. **AI Analysis** - Real-time AI analysis with futuristic loading states
4. **Trip Suggestions** - Personalized trip cards with AI match scores
5. **Trip Details** - Full itinerary with AI reasoning for each activity

### Example Journey

The prototype uses a realistic example:
- **User Profile**: Watches F1, listens to Brazilian music, follows surf accounts
- **AI Suggestion**: Brazilian Grand Prix + Surf Adventure
- **Trip Details**: 10-day itinerary combining VIP F1 experience with beach culture

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 🎨 Design Features

- **Premium Gradient Backgrounds** - Animated, futuristic color schemes
- **Glass Morphism UI** - Modern frosted glass effects
- **Smooth Animations** - Transitions, pulses, and micro-interactions
- **Responsive Design** - Works on desktop and mobile
- **Custom Tailwind Config** - Extended with Expedia brand colors

## 🛠️ Tech Stack

- **React 18** - Modern UI framework
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Custom Animations** - CSS-based premium effects

## 📁 Project Structure

```
src/
├── components/
│   ├── Home.tsx          # Landing page with callout
│   ├── Connect.tsx       # Account connection screen
│   ├── Analysis.tsx      # AI analysis loading state
│   ├── Suggestions.tsx   # Trip suggestions with cards
│   └── TripDetails.tsx   # Detailed itinerary view
├── App.tsx               # Main app with navigation
├── index.css             # Global styles and Tailwind
└── main.tsx              # App entry point
```

## 🎭 Interactive Flow

1. User sees compelling "Screen to Real Life" message
2. Connects their digital accounts (Spotify, Netflix, Instagram, ESPN)
3. Watches AI analyze their interests in real-time
4. Reviews personalized trip suggestions with match scores
5. Explores detailed itinerary with AI reasoning for each activity

## 💡 AI Personalization Examples

The prototype shows how AI connects digital behavior to travel:

- **Spotify**: 247 Brazilian samba tracks → Authentic samba club experiences
- **Netflix**: Drive to Survive viewing → VIP F1 Paddock access
- **Instagram**: Following surf accounts → Professional surf lessons
- **ESPN**: F1 race views → Premium Grand Prix tickets

## 🎬 Demo Highlights

- Animated background gradients that pulse and flow
- Real-time progress tracking during AI analysis
- Match score percentages showing trip relevance
- Detailed AI reasoning for each itinerary activity
- Premium booking interface with pricing

## 📝 License

This is a prototype demonstration project.

## 🤝 Contributing

This is a showcase project. Feel free to fork and adapt for your own prototypes!

---

Built with ❤️ to demonstrate the future of AI-powered travel planning
