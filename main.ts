/**
 * @author Miles Aube
 * @version 1.0.0
 * @date 2025-12-01
 * @fileoverview This program asks the user for a length in centimetres and converts it to inches
 */

// constant
const CM_TO_INCH: number = 2.54;

// variiables
let cmAsString: string;
let cmAsNumber: number;
let inches: number;

//input 
cmAsString = prompt("Enter the length in centimetres:") || "0";

// process
cmAsNumber = parseFloat(cmAsString);
inches = cmAsNumber / CM_TO_INCH;

//output
console.log(`${cmAsNumber} cm is equal to ${inches} inches.`);