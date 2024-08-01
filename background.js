chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed');
});

// Listen for messages from content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'CHECK_WEBSITE') {
    // Here you can implement a check based on the data received
    const isMalicious = performCheck(message.data);
    sendResponse({ isMalicious });
  }
});

// Example check function (placeholder for actual logic)
function performCheck(data) {
  // Implement your detection logic here
  // For now, let's assume all websites are safe
  return false;
}

