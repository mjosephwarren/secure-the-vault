// Create string for the secret combination message
const userMessage = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"

// Assign variables to each wheel on the vault lock, matching the stakeholder's specifications of 10-40-39
let wheel1 = 5 + 5; // equals 10
let wheel2 = 5 * 8; // equals 40
let wheel3 = 40 - 1; // equals 39

// Display a popup dialog box with the vault combination
alert(userMessage + " " + wheel1 + " - " + wheel2 + " - " +  wheel3);
