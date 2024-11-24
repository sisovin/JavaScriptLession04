# Lesson 04: HTML + CSS + JavaScript

## Table of Contents

- [Introduction of HTML + CSS + JavaScript](#introduction-of-html--css--javascript)
  - [HTML (HyperText Markup Language)](#html-hypertext-markup-language)
    - [Key Concepts](#key-concepts)
  - [CSS (Cascading Style Sheets)](#css-cascading-style-sheets)
    - [Key Concepts](#key-concepts-1)
  - [JavaScript (JS)](#javascript-js)
    - [Key Concepts](#key-concepts-2)
  - [Putting It All Together](#putting-it-all-together)
- [REVIEW](#review)
- [Linking External CSS File](#linking-external-css-file)
- [Linking External JavaScript File](#linking-external-javascript-file)
- [Fixed Code Example](#fixed-code-example)
- [Install Vanilla + JavaScript + Vite](#install-vanilla--javascript--vite)
- [Install Tailwindcss and Prettier](#install-tailwindcss-and-prettier)
- [Run the Json Server](#run-the-json-server)

## Introduction of HTML + CSS + JavaScript

Welcome to the world of web development! This guide introduces the foundational trio of technologies that power the web: HTML, CSS, and JavaScript. Together, these technologies allow you to create complex and interactive web pages.

### HTML (HyperText Markup Language)

HTML is the backbone of any web page. It's a markup language that tells the web browser how to structure the web page. HTML uses tags to mark up text, images, and other content to display it on the web page.

#### Key Concepts

- **Tags**: The building blocks of HTML. Examples include `<p>` for paragraphs, `<h1>` to `<h6>` for headings, `<img>` for images, and `<a>` for links.
- **Attributes**: Provide additional information about elements. For example, the `src` attribute of the `<img>` tag specifies the path to the image you want to display.
- **Structure**: A typical HTML document has a structured format with a `<!DOCTYPE html>` declaration, followed by `<html>`, `<head>`, and `<body>` sections.

### CSS (Cascading Style Sheets)

CSS is used to style and layout web pages. It allows you to add colors, fonts, spacing, and positioning to your HTML elements, making your web pages visually appealing.

#### Key Concepts

- **Selectors**: Identify the HTML elements you want to style. For example, the `p` selector targets all `<p>` elements.
- **Properties**: The aspects of the elements you want to change, such as `color`, `font-size`, `margin`, and `padding`.
- **Values**: The settings you want to apply to the properties. For example, `color: blue;` changes the text color to blue.

### JavaScript (JS)

JavaScript is a programming language that enables interactive web pages. It's what makes web pages dynamic, allowing for user interaction, data manipulation, and much more.

#### Key Concepts

- **Variables**: Containers for storing data values. JavaScript has `var`, `let`, and `const` to declare variables.
- **Functions**: Blocks of code designed to perform a particular task. A function is executed when "something" invokes it (calls it).
- **Events**: Actions that can be detected by your web application. For example, the `click` event occurs when a user clicks on something.

### Putting It All Together

When combined, HTML, CSS, and JavaScript allow for the creation of complex, interactive, and beautiful web pages. HTML provides the structure, CSS adds styling, and JavaScript brings interactivity. By mastering these three, you'll be well on your way to becoming a proficient web developer.

## REVIEW

1. **Reviewed basics of HTML and CSS**: This point indicates a foundational step in web development. Understanding the structure (HTML) and styling (CSS) of web pages is crucial. It's important that the basics cover not just the syntax but also best practices in using HTML and CSS effectively.
2. **Set up VSCode for Code Editor**: Setting up Visual Studio Code as the code editor is a good choice for web development. VSCode offers a wide range of extensions and tools that can enhance coding efficiency, such as live preview, IntelliSense, and integrated Git control. It would be beneficial to explore specific extensions that aid in HTML, CSS, and JavaScript development.
3. **Load JavaScript inside the HTML file such `<script>`, `onclick=""`**: This point covers the integration of JavaScript into HTML, which is essential for adding interactivity to web pages. Using `<script>` tags and event attributes like `onclick` are fundamental techniques. It's important to understand not just how to use these, but also when and why. For instance, loading scripts asynchronously or deferring them to improve page load time.
4. **How to use comments**: Comments are vital for maintaining code, making it readable not only to others but also to the future self. The review should emphasize the importance of commenting code effectively. This includes not just how to write comments in HTML, CSS, and JavaScript, but also what to comment on, such as the purpose of a complex function or why a particular styling choice was made.
5. **Use `console.log` to send message to the Browser**: This is a basic yet powerful tool for debugging JavaScript code. `console.log` allows developers to print information to the browser's console, making it easier to track variable values, understand the flow of execution, and identify issues. The review should encourage the practice of using `console.log` for debugging purposes and might also mention other console methods like `console.error` and `console.warn` for more specific debugging scenarios.

## Linking External CSS File

To link an external CSS file to an HTML document, you use the `<link>` element inside the `<head>` section of your HTML file. The `href` attribute specifies the path to the CSS file, and the `rel` attribute should be set to `"stylesheet"` to indicate the relationship between the HTML file and the linked file. Here's an example:

```html
<head>
  <link rel="stylesheet" href="styles.css" />
</head>
```

## Linking External JavaScript File

To link an external JavaScript file to an HTML document, you use the `<script>` tag, placing it typically right before the closing `</body>` tag. The `src` attribute specifies the path to the JavaScript file. Here's an example:

```html
<body>
  <!-- Your HTML content here -->

  <script src="script.js"></script>
</body>
```

## Fixed Code Example

Use template literals correctly and createElement for DOM manipulation:

```javascript
document.querySelector('#app').innerHTML = `
  <div>
    <button>Hello, World!</button>
    <p>paragraph of text</p>
  </div>
`;
```

## Install Vanilla + JavaScript + Vite

1. Type: `npm create vite@latest`
2. Name your project
3. Select the framework as React you want to develop the project
4. Select the programming language
5. Change directory to the created directory of your project
6. Run: `npm i` or `npm install`
7. Run: `npm run dev` to start your project

## Install Tailwindcss and Prettier

1. Install Tailwind CSS: `npm install -D tailwindcss`
2. Initialize Tailwind CSS: `npx tailwindcss init`
3. Install Prettier plugin for Tailwind CSS: `npm i -D prettier-plugin-tailwindcss`
4. Add Tailwind directives to your CSS file:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
5. Build your CSS:
   ```bash
   npx tailwindcss -i ./src/input.css -o ./src/css/index.css
   npx tailwindcss -i ./src/input.css -o ./src/style.css --watch
   ```
6. Add Prettier script to `package.json`:
   ```json
   "scripts": {
     "prettier": "npx prettier --write *.{html,js,css}"
   }
   ```

## Run the Json Server

To run the JSON server, type the following command:
```bash
npx json-server -w data/products.json -p 3500

