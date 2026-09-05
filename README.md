Markdown

# SYMO E-Commerce Interface (Academic Prototype)

An academic **e-commerce storefront prototype** created with **HTML5**, **CSS3**, and vanilla **JavaScript**. It provides UI layouts for browsing consumer electronics, viewing a **shopping cart**, inspecting **user accounts**, and walking through a **checkout flow**. The project serves as an experimental frontend demonstration focused on desktop layout design and fundamental DOM manipulation.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Table of Contents

- [About](#about)
- [Project Scope and Limitations](#project-scope-and-limitations)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Run Locally](#run-locally)
- [Project Structure](#project-structure)

## About

This project was developed as a university coursework prototype to explore multi-page web design for a retail electronics storefront. It demonstrates the structure of core commercial pages including catalog displays, account views, and payment layouts. The objective was to practice structured markup, page linking, and basic script-driven UI events.

## Project Scope and Limitations

This project is an early educational prototype with specific architectural constraints:

- **Desktop-Only Layout**: The stylesheets are designed primarily for desktop screen widths and are not responsive on mobile or tablet viewports.
- **Mocked Functionality**: Advanced transactional features such as server-side authentication, live payment gateways, and backend inventory management are visual mockups without a live database.
- **Client-Side State**: Cart and account interactions operate on direct DOM updates and static values rather than persistent storage.

## Features

- **Storefront Display**: Present product items, promotional banners, and category sections on the landing page.
- **Shopping Cart View**: Display item listings, pricing summaries, and checkout triggers.
- **Checkout and Payment Interface**: Provide form fields for billing details, shipping addresses, and mock payment methods.
- **Account Overview**: Present a dedicated account page structure for customer credentials and preferences.
- **Vanilla DOM Handlers**: Execute simple client-side event listeners and interface navigation via custom scripts.

## Tech Stack

- [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML) (Semantic page structure)
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) (Desktop layouts and styling)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) (DOM interaction and event handling)

## Run Locally

Clone the repository:

```bash
git clone [https://github.com/omarahmed321/Collegeproject.git](https://github.com/omarahmed321/Collegeproject.git)
cd Collegeproject

Run the application:

Because this is a static project, you can open index.html directly in any web browser, or serve it using a local HTTP server:
Bash

# Using Python
python3 -m http.server 3000

# Or using Node.js
npx serve .

Navigate to http://localhost:3000 or double-click index.html.
Project Structure
Plaintext

Collegeproject/
├── css/                  # Layout stylesheets and styling
├── js/                   # Client-side scripts
│   └── index.js          # DOM listeners and UI handlers
├── Acccount.html         # User account layout
├── cart.html             # Cart view layout
├── index.html            # Main storefront landing view
├── payment.html          # Checkout and mock payment layout
└── README.md             # Project documentation
