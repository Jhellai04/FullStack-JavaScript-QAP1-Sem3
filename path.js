const path = require('path');

// Example file paths
const filePath1 = '/home/user/documents/file.txt';
const filePath2 = '../images/picture.jpg';

// Get the file name from a file path
const fileName1 = path.basename(filePath1);
const fileName2 = path.basename(filePath2);

console.log('File Name 1:', fileName1); // Output: File Name 1: file.txt
console.log('File Name 2:', fileName2); // Output: File Name 2: pic.jpg

// Join two parts of a file path
const joinedPath = path.join('/home/user', 'documents', 'file.txt');
console.log('Joined Path:', joinedPath); // Output: Joined Path: /home/user/documents/file.txt

// Get the directory name from a file path
const dirName = path.dirname(filePath1);
console.log('Directory Name:', dirName); // Output: Directory Name: /home/user/documents

// Get the file extension from a file path
const fileExt1 = path.extname(filePath1);
const fileExt2 = path.extname(filePath2);

console.log('File Extension 1:', fileExt1); // Output: File Extension 1: .txt
console.log('File Extension 2:', fileExt2); // Output: File Extension 2: .jpg

// Resolve a relative path to an absolute path
const absolutePath = path.resolve('../images', 'picture.jpg');
console.log('Absolute Path:', absolutePath); // Output: Absolute Path: /home/user/images/pic.jpg
