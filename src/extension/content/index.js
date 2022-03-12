import { printLine } from './modules/print';

console.log('Content script does works!');
console.log('Must reload extension for modifications to take effect.');

printLine("Using the 'printLine' function from the Print Module");

chrome.runtime.onMessage.addListener((message, _, sendResponse) => {
  console.log(message);
  sendResponse({ title: document.title });
});
