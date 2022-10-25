function myScript() {
    const idname = document.querySelector("#ember33 > div.ph5.pb5 > div.mt2.relative > div:nth-child(1) > div:nth-child(1) > h1");
    const location = document.querySelector("#ember33 > div.ph5.pb5 > div.mt2.relative > div.pv-text-details__left-panel.pb2 > span.text-body-small.inline.t-black--light.break-words");
    const continfo = document.querySelector("#ember285 > section > div > section.pv-contact-info__contact-type.ci-phone > ul > li > span.t-14.t-black.t-normal");

    if (idname || location || continfo) {
        console.log(idname.innerText);
        console.log(location.innerText);
        console.log(continfo.innerText);
    }

}
window.addEventListener("load", myScript);