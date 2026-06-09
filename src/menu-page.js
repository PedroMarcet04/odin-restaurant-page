import platesImage from "../images/empty-plates.jpg";

const contentContainer = document.querySelector("#content");

const loadPage = function() {
    const menuH2 = document.createElement("h2");
    menuH2.textContent = "Our Menu:";
    contentContainer.appendChild(menuH2);

    const menuDesc = document.createElement("p");
    menuDesc.classList.add("section-description");
    menuDesc.textContent = "The Tetostaurant offers some of the finest meals available from worldwide cuisines. All hand-picked by Teto's insatiable taste.";
    contentContainer.appendChild(menuDesc);

    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu");
    contentContainer.appendChild(menuDiv);
    (() => {
        const appetizersDiv = document.createElement("div");
        appetizersDiv.classList.add("menu-section");
        appetizersDiv.classList.add("appetizers");
        menuDiv.appendChild(appetizersDiv);
        (() => {
            const appetizersH3 = document.createElement("h3");
            appetizersH3.textContent = "Appetizers";
            appetizersDiv.appendChild(appetizersH3);

            const appetizersDesc = document.createElement("p");
            appetizersDesc.classList.add("section-description");
            appetizersDesc.textContent = "Be careful how you pronounce your order to the waiter.";
            appetizersDiv.appendChild(appetizersDesc);

            const appetizerList = [
                {
                    name: "Baguette",
                    price: 5,
                },
                {
                    name: "Baguetwo (2 Baguettes)",
                    price: 12,
                },
                {
                    name: "Bathreettes (3 Baguettes)",
                    price: 16,
                },
                {
                    name: "Banquete (All-Teto-can-eat Baguette supply)",
                    price: 50,
                },
            ];

            for (const appetizerItem of appetizerList) {
                const itemDiv = document.createElement("div");
                itemDiv.classList.add("menu-item");
                appetizersDiv.appendChild(itemDiv);

                const name = document.createElement("p");
                name.classList.add("name");
                name.textContent = appetizerItem.name;
                itemDiv.appendChild(name);

                const price = document.createElement("p");
                price.classList.add("price");
                price.textContent = appetizerItem.price;
                itemDiv.appendChild(price);
            }

            const appetizersDisclaimer = document.createElement("p");
            appetizersDisclaimer.classList.add("disclaimer");
            appetizersDisclaimer.textContent = "Disclaimer: Teto often eats all the Baguettes before opening hour. If you order one of the above options you will be charged the full ammount regardless of supply.";
            appetizersDiv.appendChild(appetizersDisclaimer);
        })(); // appetizersDiv's children
            

        const entreesDiv = document.createElement("div");
        entreesDiv.classList.add("menu-section");
        entreesDiv.classList.add("entrees");
        menuDiv.appendChild(entreesDiv);
        (() => {
            const entreesH3 = document.createElement("h3");
            entreesH3.textContent = "Entrees";
            entreesDiv.appendChild(entreesH3);

            const entreesDesc = document.createElement("p");
            entreesDesc.classList.add("section-description");
            entreesDesc.textContent = "Why would you need to know the entrance to the place? You're already in here.";
            entreesDiv.appendChild(entreesDesc);
        })(); // entreesDiv's children


        const breakfastDiv = document.createElement("div");
        breakfastDiv.classList.add("menu-section");
        breakfastDiv.classList.add("breakfast");
        menuDiv.appendChild(breakfastDiv);
        (() => {
            const breakfastH3 = document.createElement("h3");
            breakfastH3.textContent = "Breakfast";
            breakfastDiv.appendChild(breakfastH3);

            const breakfastDesc = document.createElement("p");
            breakfastDesc.classList.add("section-description");
            breakfastDesc.textContent = "We open at 11am, we don't do breakfast.";
            breakfastDiv.appendChild(breakfastDesc);
        })(); // breakfastDiv's children

        const lunchDinnerDiv = document.createElement("div");
        lunchDinnerDiv.classList.add("menu-section");
        lunchDinnerDiv.classList.add("lunch-dinner");
        menuDiv.appendChild(lunchDinnerDiv);
        (() => {
            const lunchDinnerH3 = document.createElement("h3");
            lunchDinnerH3.textContent = "Lunch and Dinner";
            lunchDinnerDiv.appendChild(lunchDinnerH3);

            const lunchDinnerDesc1 = document.createElement("p");
            lunchDinnerDesc1.classList.add("section-description");
            lunchDinnerDesc1.textContent = "Now for the main section. We offer a fine selec-... Umm... Sorry for the inconvenience but the entire supply of food was just eaten... Look at this:";
            lunchDinnerDiv.appendChild(lunchDinnerDesc1);

            const lunchDinnerImg = document.createElement("img");
            lunchDinnerImg.src = platesImage;
            lunchDinnerImg.width = 400;
            lunchDinnerImg.alt = "Image of empty plates.";
            lunchDinnerDiv.appendChild(lunchDinnerImg);

            const lunchDinnerDesc2 = document.createElement("p");
            lunchDinnerDesc2.classList.add("section-description");
            lunchDinnerDesc2.textContent = "We had literally every single dish layed out for opening night, someone just ate all of it, even left the plates without a crumb. Who would do such a thing? I bet it was the rival restaurant that opened across the street: \"Oguristaurant Cap\" or something.";
            lunchDinnerDiv.appendChild(lunchDinnerDesc2);
        })(); // lunchDinnerDiv's children

        const dessertDiv = document.createElement("div");
        dessertDiv.classList.add("menu-section");
        dessertDiv.classList.add("dessert");
        menuDiv.appendChild(dessertDiv);
        (() => {
            const dessertH3 = document.createElement("h3");
            dessertH3.textContent = "Breakfast";
            dessertDiv.appendChild(dessertH3);

            const dessertDesc = document.createElement("p");
            dessertDesc.classList.add("section-description");
            dessertDesc.innerHTML = "We have faith your experience with us was so wonderful the only treat you need is our presence &lt;3.";
            dessertDiv.appendChild(dessertDesc);

            const dessertList = [
                {
                    name: "Our presence",
                    price: 50,
                },
            ];

            for (const dessertItem of dessertList) {
                const itemDiv = document.createElement("div");
                itemDiv.classList.add("menu-item");
                dessertDiv.appendChild(itemDiv);

                const name = document.createElement("p");
                name.classList.add("name");
                name.textContent = dessertItem.name;
                itemDiv.appendChild(name);

                const price = document.createElement("p");
                price.classList.add("price");
                price.textContent = dessertItem.price;
                itemDiv.appendChild(price);
            }
        })(); // breakfastDiv's children

    })(); // menuDiv's children
        
}
export default loadPage;