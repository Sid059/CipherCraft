import { ShiftCipher } from './cipherAlgorithm.js';

// DOM Elements
const shiftInput = document.getElementById('shiftValue');
const originalMessage = document.getElementById('originalMessage');
const encryptedMessage = document.getElementById('encryptedMessage');
const encryptBtn = document.getElementById('encryptBtn');
const decryptBtn = document.getElementById('decryptBtn');
const swapBtn = document.getElementById('swapBtn');
const clearBtn = document.getElementById('clearBtn');
const copyBtn = document.getElementById('copyBtn');

// Event Listeners
encryptBtn.addEventListener('click', encryptMessage);
decryptBtn.addEventListener('click', decryptMessage);
swapBtn.addEventListener('click', swapMessages);
clearBtn.addEventListener('click', clearAll);
copyBtn.addEventListener('click', copyEncrypted);

function validateShiftValue(){
    const shift = parseInt(shiftInput.value);
    if(isNaN(shift) || shift < 1 || shift > 25){
        alert('Please enter a valid shift value between 1 and 25');
        return false;
    }
    return true;
}

function encryptMessage() {
    if(!validateShiftValue()) return;
    originalMessage.focus();
    const shift = parseInt(shiftInput.value);
    const message = originalMessage.value;
    // to prevent encrypting empty messages
    if (!message.trim()) {
        alert('Please enter a message to encrypt');
        return;
    }
    const cipher = new ShiftCipher(shift);
    const encrypted = cipher.encrypt(message);
    encryptedMessage.value = encrypted;
    encryptBtn.removeEventListener('click', encryptMessage);
    encryptBtn.style.backgroundColor = '#001a00';
    encryptBtn.style.borderColor = '#006600';
    encryptBtn.style.color = '#006600'; // change color to indicate disabled
}

function decryptMessage() {
    if(!validateShiftValue()) return;
    encryptedMessage.focus();
    const shift = parseInt(shiftInput.value);
    const message = encryptedMessage.value;
    
    if (!message.trim()) {
        alert('Please enter a message to decrypt');
        return;
    }
    
    const cipher = new ShiftCipher(shift);
    const decrypted = cipher.decrypt(message);
    originalMessage.value = decrypted;
    decryptBtn.removeEventListener('click', decryptMessage);
    decryptBtn.style.backgroundColor = '#001a00';
    decryptBtn.style.borderColor = '#006600';
    decryptBtn.style.color = '#006600'; // change color to indicate disabled
}

function swapMessages() {
    // swapping values using destructuring
    [originalMessage.value, encryptedMessage.value] = [encryptedMessage.value, originalMessage.value];
}

function clearAll() {
    originalMessage.value = '';
    encryptedMessage.value = '';
    shiftInput.value = 3;
    originalMessage.focus();

    // reattaching event listeners
    encryptBtn.addEventListener('click', encryptMessage);
    encryptBtn.style.backgroundColor = '#4CAF50';
    encryptBtn.style.background = '#000000';
    encryptBtn.style.color = '#00ff00'; // change color to indicate enabled

    decryptBtn.addEventListener('click', decryptMessage);
    decryptBtn.style.backgroundColor = '#4CAF50';
    decryptBtn.style.background = '#000000';
    decryptBtn.style.color = '#00ff00'; //change color to indicate enabled
}

function copyEncrypted() {
    if (!encryptedMessage.value.trim()) {
        alert('No encrypted message to copy');
        return;
    }
    // These are just for selecting the text field
    encryptedMessage.select();
    encryptedMessage.setSelectionRange(0, 99999);
    
    try {
        //this is for the actual copy action
        navigator.clipboard.writeText(encryptedMessage.value);
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
            copyBtn.textContent = 'Copy Encrypted';
        }, 2000);
    } catch (err) {
        alert('Failed to copy text');
    }
}

// Initialize with example
document.addEventListener('DOMContentLoaded', function() {
    originalMessage.focus();
});