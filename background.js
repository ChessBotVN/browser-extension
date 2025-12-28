chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({
    url: "https://chessbotvn.vercel.app/"
  });
});
