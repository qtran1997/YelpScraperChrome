$(document).ready(function() {
    // if (sessionStorage["messagingActive"]) {
    sessionStorage["linkCount"] = parseInt(sessionStorage["linkCount"]) + 1;
    console.log("Link Count:" + sessionStorage["linkCount"]);

    // if ($(".js-message-biz").length != 0) {
    // $(".js-message-biz")
    //     .get(0)
    //     .click();

    // iframeSource = document.elementFromPoint(622, 413).src;
    // console.log(iframeSource);

    // window.location = iframeSource;
    console.log($(".textarea__20r-o:eq(0)")[0]);
    $(".textarea__20r-o:eq(0)")[0].click();
    $(".textarea__20r-o:eq(0)")[0].focus();
    console.log($(".textarea__20r-o:eq(0)").is(":focus"));
    var e = new KeyboardEvent("keydown", { keyCode: 32, which: 32 });
    document.dispatchEvent(e);

    // setTimeout(function() {
    // console.log(document.elementFromPoint(622, 413).src);
    //VALUE
    // document
    //     .elementFromPoint(622, 413)
    //     .contentDocument.getElementsByClassName(
    //         "textarea__20r-o"
    //     )[0].innerText = "poo poo pee pee";
    // document
    //     .elementFromPoint(622, 413)
    //     .contentDocument.getElementsByClassName(
    //         "input__1POmY"
    //     )[0].innerText = "poo@gmail.com";
    // document
    //     .elementFromPoint(622, 413)
    //     .contentDocument.getElementsByClassName(
    //         "input__1POmY"
    //     )[1].innerText = "poo";
    // //TEXT
    // document
    //     .elementFromPoint(622, 413)
    //     .contentDocument.getElementsByClassName(
    //         "textarea__20r-o"
    //     )[0].value = "poo poo pee pee";
    // document
    //     .elementFromPoint(622, 413)
    //     .contentDocument.getElementsByClassName(
    //         "input__1POmY"
    //     )[0].value = "poo@gmail.com";
    // document
    //     .elementFromPoint(622, 413)
    //     .contentDocument.getElementsByClassName(
    //         "input__1POmY"
    //     )[1].value = "poo";
    // }, 3000);
    // }
    // sessionStorage.removeItem("messagingActive");
    // window.location.href = sessionStorage['baseLink'];
    // }
});
