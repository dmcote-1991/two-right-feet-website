# Two Right Feet

Welcome to the **Two Right Feet** project! This website provides engaging library programs for children aged three to grade three, designed to foster a love for reading and learning.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [License](#license)

## Features

- User-friendly interface
- Interactive program listings
- Contact form for inquiries
- Responsive design for mobile and desktop

## Project Structure

```bash
two-right-feet-website/
├── backend/
│   ├── dist/                  # Compiled output files
│   │   └── ...        
│   ├── node_modules/
│   │   └── ...                
│   ├── src/                   # Source code
│   │   ├── server.ts          # Entry point
│   │   ├── global.d.ts
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   │   ├── Article.ts
│   │   │   ├── Image.ts
│   │   │   └── Program.ts
│   │   └── routes/
│   │       ├── article.ts
│   │       ├── image.ts
│   │       └── program.ts
│   ├── .env
│   ├── package.json
│   ├── eslint.config.js
│   └── tsconfig.json
├── frontend/
│   ├── dist/                  # Compiled output files
│   │   └── ...
│   ├── node_modules/
│   │   └── ...
│   ├── public/                # Static files
│   │   └── images/
│   │       ├── trf-header-footer-1.png  #TRF insignia static image
│   │       └── trf-home-1.png           #TRF banner static image
│   ├── src/                   # Source code
│   │   ├── components/
│   │   │    └── ...
│   │   ├── utils/             # Utility functions
│   │   │    └── fetchImages.ts 
│   │   ├── App.tsx            # Main application component
│   │   ├── index.tsx          # Entry point
│   │   └── styles.css
│   ├── index.html             
│   ├── .env
│   ├── eslint.config.js
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.env.d.ts
│   └── vite.config.mts
├── .gitignore
├── LICENSE.txt
└── README.md
    
```

## License

© David Cote 2024. All rights reserved.
This project is not open for use, distribution, or modification without explicit permission.
