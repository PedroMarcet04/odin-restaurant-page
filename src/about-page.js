import biteSVG from "../images/bite.svg";

const contentContainer = document.querySelector("#content");

const loadPage = function() {
    const aboutH2 = document.createElement("h2");
    aboutH2.textContent = "About";
    contentContainer.appendChild(aboutH2);

    const aboutP = document.createElement("p");
    aboutP.textContent = "Please come back again later, someone took a bite out of our about page.";
    contentContainer.appendChild(aboutP);

    const aboutImg = document.createElement("img");
    aboutImg.classList.add("bite");
    aboutImg.src = biteSVG;
    contentContainer.appendChild(aboutImg);
}
export default loadPage;