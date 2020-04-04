# whatsapp-react

Whatsapp React clone with Tailwind CSS.

## Project setup
```
npm install
```

### Run Project
```
npm run start
```

### Sources

`https://blog.logrocket.com/create-react-app-and-tailwindcss/`

### Note

Install **Autoprefixer** and **PostCSS-CLI** like this:

```
npm install postcss-cli autoprefixer --save-dev
```

**PostCSS** is a tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.

While **Autoprefixer** is a PostCSS plugin, it basically parses your CSS and adds/removes unnecessary vendor prefixes in your compiled CSS rules. It can help you add prefixes for animations, transition, transform, grid, flex, flexbox, etc.

The `index.css` file is where we would be importing tailwind’s base styles and configurations, while the `tailwind.css` would contain the compiled output of the `index.css`.

`package.json` file:

```
"scripts": {
    "build:style":"tailwind build src/styles/index.css -o src/styles/tailwind.css",
  "start": "npm run build:style && react-scripts start",
},
```

`index.js` file:

```
import './styles/tailwind.css';
```