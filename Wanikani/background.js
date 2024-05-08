chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    id: "WanikaniCustomSearch",
    title: "Search with Wanikani",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === "WanikaniCustomSearch") {
    var selectedText = encodeURIComponent(info.selectionText);
    var url = "https://www.wanikani.com/kanji/" + selectedText;
    chrome.windows.create({
      url: url,
      type: "popup",
      width: 720,
      height: 720
    });
  }
});
