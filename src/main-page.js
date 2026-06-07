import restaurantImage from "../images/empty-restaurant.jpg";
export {loadPage};

const contentContainer = document.querySelector("#content");

const loadPage = function() {
    const quoteDiv = document.createElement("div");
    quoteDiv.classList.add("quote");
    contentContainer.appendChild(quoteDiv);

    const quote = document.createElement("blockquote");
    quote.textContent = "\"An unforgettable experience. The service is to die for. If I were being held at gunpoint and made to say good things for a quote I would say them but also mean them...\"";
    quoteDiv.appendChild(quote);

    const author = document.createElement("p");
    author.classList.add("author");
    author.textContent = "&mdash; A missing small-time food critic";
    quoteDiv.appendChild(author);



    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("description");
    contentContainer.appendChild(descriptionDiv);

    const descriptionTitle = document.createElement("h2");
    descriptionTitle.classList.add("title");
    descriptionDiv.appendChild(descriptionTitle);

    const descriptionImage = document.createElement("img");
    descriptionImage.classList.add("author");
    descriptionImage.src = restaurantImage;
    descriptionImage.height = 300;
    descriptionImage.alt = "Image of empty restaurant";
    descriptionDiv.appendChild(descriptionImage);

    const descriptionBody = document.createElement("div");
    descriptionBody.classList.add("body");
    descriptionDiv.appendChild(descriptionBody);

    const descriptionBodyP1 = document.createElement("p");
    descriptionBodyP1.textContent = "Zero cross the great divide into this wonderful restaurant run by John Masheenlaav herself. Don't worry, its not usually this busy :)";
    descriptionBody.appendChild(descriptionBodyP1);

    descriptionBody.appendChild(document.createElement("br"));

    const descriptionBodyP2 = document.createElement("p");
    descriptionBodyP2.textContent = "Free WiFi! Just make sure to check if there's someone hiding inside it, we have a blue haired problem...";
    descriptionBody.appendChild(descriptionBodyP2);
}
