const clickme = document.getElementById("myBtn");
clickme.addEventListener("click", async function() {
    const link1 = "https://www.linkedin.com/in/isanur-sardar-a14106185/";
    const link2 = "https://www.linkedin.com/in/nishu-anand-5961b0194/";
    const link3 = "https://www.linkedin.com/in/sovan-mondal-038858194/";
    const Profiles = new Array(link1, link2, link3);
    // window.open(link1);
    // window.open(link2);
    // window.open(link3);
    for (let i = 0; i < Profiles.length; i++) {
        chrome.tabs.create({
            url: Profiles[i]
        }, function(newTab) {
            chrome.scripting.executeScript({
                target: { tabId: newTab.id },
                files: ['content.js']
            });
        });
    }
});