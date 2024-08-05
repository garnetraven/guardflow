// Example of extracting data from the webpage
const pageData = {
  url: window.location.href,
  title: document.title,
  // Additional features can be added here
};


// Example of extracting URL features
const url = window.location.href;
const urlFeatures = extractUrlFeatures(url);

// Function to extract URL features (implement this based on your feature engineering)
function extractUrlFeatures(url) {
  // Example: Return a vector of feature values
  return [url.length, url.includes('login')];
}

// Send the data to the background script for analysis
chrome.runtime.sendMessage({ type: 'CHECK_WEBSITE', data: pageData }, (response) => {
  if (response.isMalicious) {
    alert('Warning: This website may be malicious!');
  }
});

