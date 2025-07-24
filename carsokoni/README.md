# Carsokoni - React Frontend E-commerce Project

Carsokoni is a car e-commerce platform where users can browse, search, and purchase cars online. This project demonstrates advanced React, Redux, and Tailwind CSS skills, with a focus on clean code, UI/UX, and modern best practices.

## 🚗 Features
- Responsive homepage with hero, featured cars, categories, and newsletter signup
- Car listings and details with image gallery, specs, tags, dealer info, and reviews
- Shopping cart with add/remove functionality
- Mock authentication (login/logout, protected profile page)
- Dark mode toggle
- Custom animations, hover effects, and loading spinner
- Local data store with 50+ realistic car entries (JSON)
- Redux Toolkit for state management
- Tailwind CSS for styling and custom CSS for effects

## 🛠️ Tech Stack
- React (functional components, hooks)
- Redux Toolkit
- Tailwind CSS
- Custom CSS (animations, effects)
- Local JSON data store

## 📁 Project Structure
```
carsokoni/
  src/
    components/
    pages/
    store/
    data/
    styles/
    App.js
    index.js
  public/
  package.json
  README.md
```

## 🚀 Getting Started

### 1. Clone the repository
```sh
git clone <your-repo-url>
cd carsokoni
```

### 2. Install dependencies
```sh
npm install
```

### 3. Generate car data (optional, already included)
```sh
node generateCars.js
```

### 4. Start the development server
```sh
npm start
```
Visit [http://localhost:3000](http://localhost:3000) to view the app.

## 🌐 Deployment

### Deploy to Netlify or Vercel
1. Push your code to GitHub.
2. Go to [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/).
3. Connect your GitHub repo and follow the prompts.
4. For Create React App, the default build command is:
   ```sh
   npm run build
   ```
   and the output directory is `build/`.
5. Set the site to deploy from the `build/` folder.

### Static Hosting (GitHub Pages, Surge, etc.)
- Build the app:
  ```sh
  npm run build
  ```
- Deploy the `build/` folder to your static host of choice.

## 📝 Demo Credentials
- **Username:** `user`
- **Password:** `password`

## 📦 Local Data
- Car data is stored in `src/data/cars.json`.
- To regenerate, run `node generateCars.js`.

## 📄 License
MIT

---

**Made with ❤️ for the Kenyan car market!** 