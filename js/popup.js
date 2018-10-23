function test() {
    chrome.tabs.executeScript(null, { file: "js/jquery.js" }, function() {
        chrome.tabs.executeScript(null, { file: "js/message.js" });
    });
}

// chrome.tabs.onUpdated.addListener(function(tabId, info) {
//     if (info.status === "complete") {
//         chrome.tabs.executeScript(null, { file: "js/jquery.js" }, function() {
//             chrome.tabs.executeScript(null, { file: "js/message.js" });
//         });
//         // if (sessionStorage["extensionActive"]) {
//         //     scrape();
//         // }
//     }
// });

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("start").addEventListener("click", test);
    // document.getElementById("start").addEventListener("click", active);
    document.getElementById("clear").addEventListener("click", function() {
        document.body.style.backgroundColor = "green";
        if (sessionStorage["extensionActive"]) {
            document.body.style.backgroundColor = "red";
        }
        sessionStorage.clear();
        chrome.tabs.executeScript(null, {
            code: `
            sessionStorage.clear();
            `
        });
    });
});

// function active() {
//     sessionStorage.clear();
//     chrome.tabs.executeScript(null, {
//         code: `
//         sessionStorage.clear();
//         sessionStorage["linkCount"] = 1;
//         sessionStorage['baseLink'] = window.location.href;
//         `
//     });
//     sessionStorage["extensionActive"] = true;
//     scrape();
// }

// function scrape() {
//     // How to access the content of current tab
//     chrome.tabs.executeScript(null, {
//         code: `
//         sessionStorage['messagingActive'] = true;
//         var storedBusinesses = [];
//         if(sessionStorage['poop']) {
//             storedBusinesses = JSON.parse(sessionStorage['poop']);
//             var count = parseInt(sessionStorage["linkCount"]);
//             console.log(count);
//             if(storedBusinesses[count] !== undefined) {
//             window.location.href = storedBusinesses[count];
//             }
//         } else {
//             var nonAdBusinesses = [];
//             var businesses = Array.from(document.body.getElementsByClassName("biz-name"));
//             // Removal of Ads
//             for (var i = businesses.length-1; i >=0; i--) {
//                 if (businesses[i].closest(".js-yloca")) {
//                     businesses.splice(i, i+1);
//                     console.log("removed");
//                 } else {
//                     businesses[i].style.color = "teal";
//                     nonAdBusinesses.unshift(businesses[i].href);
//                 }
//             }
//             sessionStorage['poop'] = JSON.stringify(nonAdBusinesses);
//             storedBusinesses = JSON.parse(sessionStorage['poop']);
//             var count = parseInt(sessionStorage["linkCount"]);
//                 window.location.href = storedBusinesses[count];
//         }

//         `
//     });

//     // nonAdBusinesses.map(function(item) {
//     //     console.log(item.href);
//     //     accessLink(item, baseUrl);
//     // });

//     // This acccesses the content of the extension
//     // console.log("hello");

//     // THE NAME OF THE OBJECTS
//     //------------------------------
//     // Business Name || .biz-name span
//     // Business Link To Yelp || .biz-name.getAttr('href')
//     // Phone Number || .biz-phone
//     // Message Button || .js-message-biz
// }
