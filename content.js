// Example of extracting data from the webpage
const pageData = {
  url: window.location.href,
  title: document.title,
  // Additional features can be added here
};

// Send the data to the background script for analysis
chrome.runtime.sendMessage({ type: 'CHECK_WEBSITE', data: pageData }, (response) => {
  if (response.isMalicious) {
    alert('Warning: This website may be malicious!');
  }
});

