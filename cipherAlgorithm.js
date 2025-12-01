class ShiftCipher {
    constructor(shiftValue){
        this.shiftValue = shiftValue;
    }

    encrypt(message){
        let encryptedMessage = '';
        message = message.toUpperCase();

        for(let i=0; i<message.length; i++){
            let charCode = message.charCodeAt(i);
            if(charCode <= 90 && charCode >= 65){
                charCode += this.shiftValue;
                if(charCode > 90){
                    charCode -= 26;
                }
                encryptedMessage += String.fromCharCode(charCode); 
            }
            else{
                encryptedMessage += message[i];
            }
        }
        return encryptedMessage;
    }

    decrypt(message){
        let decryptedMessage = '';
        message = message.toUpperCase();

        for(let i=0; i<message.length; i++){
            let charCode = message.charCodeAt(i);
            if(charCode <= 90 && charCode >= 65){
                charCode -= this.shiftValue;
                if(charCode < 65){
                    charCode += 26;
                }
                decryptedMessage += String.fromCharCode(charCode);
            }
            else{
                decryptedMessage += message[i];
            }
        }
        return decryptedMessage;
    }
} 

export { ShiftCipher };