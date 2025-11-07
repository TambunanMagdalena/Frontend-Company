Company - Frontend Website
Modern Vue.js 3 frontend application untuk website company. Dibangun dengan Vue 3, Vue Router, Pinia, dan Element Plus untuk menciptakan user experience yang profesional dan responsive.

🛠 Tech Stack

- Framework: Vue.js 3 dengan Composition API
- Routing: Vue Router 4
- State Management: Pinia
- UI Framework: Element Plus
- HTTP Client: Axios
- Build Tool: Vite
- tyling: CSS3 dengan design system modern

📋 Prerequisites

- Node.js 16+
- npm atau yarn
- Git

🚀 Installation & Setup

1. Clone Repository
   git clone <repository-url>
   cd moonlay-frontend

2. Install Dependencies
   npm install

3. Development Server
   npm run dev
   Aplikasi akan berjalan di http://localhost:5173

🎯 Features
📄 Pages

1. Home - Hero section, company values, statistics, dan client showcase
2. About Us - Company history, vision & mission, team introduction
3. Services - Service portfolio dan development process
4. Cities Management - CRUD interface untuk data cities dengan API integration
5. Contact - Contact form dan company information

Production Build
npm run build
File hasil build akan berada di folder dist/

🔧 Configuration

Vue Router
Router terkonfigurasi di src/router/index.js dengan routes:

1. / - Home page
2. /about - About us page
3. /services - Services page
4. /cities - Cities management
5. /contact - Contact page

API Integration
Backend API configuration di src/services/api.js:
const API_BASE_URL = 'http://localhost:5000' // Sesuaikan dengan backend URL

State Management
Pinia store untuk cities management:

- cities - List of cities
- fetchCities() - Get cities dari API
- createCity() - Create new city
- updateCity() - Update existing city
- deleteCity() - Delete city

🌐 Backend Integration
Frontend terintegrasi dengan backend Flask melalui:

RESTful API calls menggunakan Axios

CORS sudah dikonfigurasi di backend

Error handling yang comprehensive

Loading states untuk better UX

API Endpoints yang Digunakan
GET /cities - Mendapatkan list cities

POST /cities - Membuat city baru

PUT /cities/:id - Update city

DELETE /cities/:id - Hapus city

👥 Development Team
Frontend Framework: Vue.js 3

UI Components: Element Plus

State Management: Pinia

Routing: Vue Router

Build Tool: Vite

# magdalena pebrianty tambunan
