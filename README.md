# Grill Master - Restaurant & Recipe Hub

[![Grill Master](https://github.com/user-attachments/assets/9fc08bfe-1c00-4259-9ed4-49f1873d20c4)](https://muhammadhuzaifayousaf.github.io/Grill-Master_Restaurant-and-Recipe-Hub_EcodeCamp-Internship/)

Welcome to **Grill Master**, a website showcasing a fictional restaurant with a searchable recipe catalog. The website is built with **HTML**, **CSS**, and **JavaScript**, and is fully responsive across desktop and mobile devices. The site includes features like a hero section, best seller dishes, oriental cuisine, a recipe catalog, and statistics.

## Demo

🎥 **[Watch the Demo Video](https://youtu.be/WkrSMQrS-AY)**  
🌐 **[Live Website Link](https://muhammadhuzaifayousaf.github.io/Grill-Master_Restaurant-and-Recipe-Hub_EcodeCamp-Internship/)**

## Features

- **Restaurant Landing Page**: Displays the best seller dishes, restaurant stats, and a call to action for orders.
- **Recipe Catalog**: A searchable and filterable recipe catalog, allowing users to explore various recipes.
- **Responsive Design**: The website is fully responsive and adapts across desktop, tablet, and mobile devices.
- **Interactive Navigation**: Includes a mobile-friendly hamburger menu and smooth scrolling for enhanced navigation.

## Adding New Recipes

You can add new recipes to the website by following these steps:

1. **Navigate to the JavaScript file**:
   Open the `script.js` file where the existing recipe data is located.
   
2. **Locate the recipe array**:
   You'll find the array `recipes` that contains all the recipe objects. Each object holds details about a recipe.

3. **Add a new recipe**:
   Add a new recipe object inside the array following this structure:
   
   ```javascript
   {
       name: "Recipe Name",
       ingredients: ["ingredient1", "ingredient2", "ingredient3"],
       instructions: "Step-by-step instructions for the recipe.",
       image: "images/recipe-image.jpg" // Path to your recipe image
   }
   ```

4. **Add the image**:
   Upload the corresponding recipe image to the `images` folder, and make sure the path matches what you define in the recipe object.

5. **Save the file**:
   After adding your new recipe, save the `script.js` file. The new recipe will now appear in the recipe catalog.

## Tech Stack

- **HTML5**: Semantic structure of the website.
- **CSS3**: Styling, including Flexbox and media queries for responsive design.
- **JavaScript**: Interactivity for recipe filtering, smooth scrolling, and responsive menu behavior.

## Project Structure

```bash
.
├── index.html            # Main HTML file
├── styles.css            # Main CSS file
├── script.js             # JavaScript for interactivity
├── images/               # Folder for images (dishes, logos, etc.)
└── README.md             # Project documentation
```

## Contribution

Feel free to fork the repository, make your own additions, and open a pull request if you would like to contribute!

## License

This project is open-source and available under the [MIT License](LICENSE).
