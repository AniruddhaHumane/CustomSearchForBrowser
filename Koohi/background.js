chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    id: "KoohiCustomSearch",
    title: "Search with Kanji Koohi",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === "KoohiCustomSearch") {
    var selectedText = encodeURIComponent(info.selectionText);
    var url = "https://kanji.koohii.com/study/kanji/" + selectedText;
    chrome.windows.create({
      url: url,
      type: "popup",
      width: 720,
      height: 720
    });
  }
});
