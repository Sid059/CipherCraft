# Project OverView 
The **Caesar Cipher Tool** is an interactive web application that allows users to encrypt and decrypt messages using the classic **Caesar Cipher (Shift Cipher)** algorithm. This project demonstrates core programming concepts, including object-oriented design, character encoding/decryption algorithms, and modern web development practices.  

I built this project to:  
- Deepen my understanding of encryption algorithms and character manipulation in JavaScript  
- Practice **ES6+ features** (classes, modules, arrow functions)  
- Enhance my **DOM manipulation** and **event handling** skills  
- Create a clean, responsive, and visually engaging user interface  


## Features  
- **Real-time Encryption & Decryption**: Instantly convert messages using a customizable shift value (1–25)  
- **Interactive UI**:  
  - Swap messages between input fields  
  - Clear all fields with one click  
  - Copy encrypted text to clipboard  
- **Visual Appeal**:   
  - Fully responsive layout for mobile and desktop  
- **Error Handling**: Validates inputs and provides user-friendly alerts  
- **Modular Codebase**: Separated logic (cipher algorithm) from UI (DOM handling) for maintainability  


## How to Use  
1. **Set the Shift Value**: Enter a number between 1 and 25 in the "Shift Value" field (default is 3).  
2. **Encrypt a Message**:  
   - Type your message in the "Original Message" text area  
   - Click **Encrypt Message** to generate the encrypted text  
3. **Decrypt a Message**:  
   - Paste or type an encrypted message in the "Encrypted Message" field  
   - Click **Decrypt Message** to reveal the original text  
4. **Additional Actions**:  
   - **↕ Swap Messages**: Switch content between the two text areas  
   - **Clear All**: Reset all fields to default  
   - **Copy Encrypted**: Copy the encrypted text to your clipboard  


## Live Demo  
[Click here to try the Caesar Cipher Tool live](https://sid059.github.io/CipherCraft/)  


## Technologies Used   
- **HTML5**: Semantic structure and accessibility          
- **CSS3**: Styling, animations, and responsive layout  
- **JavaScript (ES6+)**: Core logic, DOM manipulation, and event handling 
- **CSS Grid/Flexbox**: Modern layout techniques                   
- **CSS Animations**: Visual effects (glowing borders, scan lines) 


## Key Learnings  
- **Object-Oriented Programming**: Implemented the `ShiftCipher` class with `encrypt()` and `decrypt()` methods  
- **Character Encoding**: Worked with `charCodeAt()` and `fromCharCode()` for letter shifting  
- **Event-Driven Development**: Managed user interactions with clean, reusable functions  
- **UI/UX Design**: Created an engaging, theme-consistent interface with visual feedback  
- **Code Organization**: Used ES6 modules to separate concerns and improve readability  


## Project Structure
```
Encrypter/
|
├── index.html # Main HTML structure
├── style.css # Cyberpunk-themed styling
├── script.js # DOM event handling and UI logic
└── cipherAlgorithm.js # ShiftCipher class (encryption/decryption core)
```


## Getting Started  
1. Clone or download the project files  
2. Open `index.html` in any modern web browser  
3. No installations or dependencies required—it runs entirely in the browser!  
