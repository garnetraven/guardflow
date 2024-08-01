// Get the active tab and check if the site is safe
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  const activeTab = tabs[0];
  chrome.tabs.sendMessage(activeTab.id, { type: 'CHECK_WEBSITE_STATUS' }, (response) => {
    const statusElement = document.getElementById('status');
    if (response && response.isMalicious) {
      statusElement.innerText = 'This site may be malicious!';
      statusElement.style.color = 'red';
    } else {
      statusElement.innerText = 'This site appears safe.';
      statusElement.style.color = 'green';
    }
  });
});

