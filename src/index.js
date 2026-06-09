import styleSheet from "./style.css";
import loadMainPage from "./main-page.js";
import loadMenuPage from "./menu-page.js";

// loadMainPage();

const navButtons = document.querySelectorAll("header>nav>button");
for (const button of navButtons) {
    button.addEventListener("click", () => {
        document.querySelector("#content").innerHTML = "";
        switch(button.textContent) {
            case "Home":
                loadMainPage();
                break;
            case "Menu":
                loadMenuPage();
                break;
            case "About":
                break;
        }
    });
    
}