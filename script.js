/*Consegna:
Dato un array di oggetti letterali con: - url dell’immagine - titolo - descrizione
Creare un carosello come nella foto allegata. [vi ripasso quella completa di thumbnails ma quelle rimangono Bonus]
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sinistra.*/



// Dichiarazione dell'array di oggetti letterali con le informazioni delle immagini
var images = [
    {
        url: "img/01.webp",
        title: "Marvel's Spider-Man Remastered",
        description: "Scopri l'elettrizzante storia completa con Marvel's Spider-Man: Miles Morales Ultimate Edition. Questo imperdibile bundle include un codice promozionale** per Marvel's Spider-Man Remastered, che offre l'acclamata avventura originale e i tre capitoli scaricabili della serie Marvel's Spider-Man: La città che non dorme mai, rimasterizzati e migliorati per console PS5. "
     },
    { 
        url: "img/02.webp", 
        title: "Ratchet & Clank", 
        description: "Ratchet è un meccanico di razza Lombax proveniente dal pianeta Veldin, nella galassia di Solana. Mentre è intento a costruire un'astronave, sul pianeta Quartu un piccolo robot da combattimento difettato, Clank, riesce a sfuggire dal suo impianto di produzione." 
    },
    { 
        url: "img/03.webp", 
        title: "fortnite", 
        description: "Fortnite è un videogioco sparatutto online in terza persona del 2017, sviluppato da People Can Fly e pubblicato da Epic Games per console e PC. Il gioco presenta tre modalità distinte che condividono lo stesso motore grafico: Salva il mondo, Modalità creativa e Battaglia reale." 
    },
    { 
        url: "img/04.webp", 
        title: "Cat Simulator", 
        description: "Proprio come suggerisce il titolo, Cat Simulator: Kitty Craft è un gioco di simulazione di gatti in cui è possibile scegliere tra diverse razze di gattini! Vestirai i panni di un gatto che vive in una grande casa, ma che si sente troppo costretto..." 
    },
    {  
        url: "img/05.webp", 
        title: "avengers", 
        description: "Marvel's Avengers vanta una storia di taglio cinematografico, affiancata dall'adrenalinica azione che ha reso famosa Crystal dynamics. Grazie a regolari aggiornamenti di contenuti, il gioco ti permetterà di affrontare un epico viaggio che si dipanerà nel corso di diversi anni. Questo è il futuro degli Avengers." 
    }
];

// Numero totale di immagini nell'array
var totalImages = images.length;

// Indice corrente dell'immagine visualizzata
var currentIndex = 0;

// Funzione per inizializzare il carosello
function initializeCarousel() {
    // Ottieni l'elemento div che conterrà le immagini
    var imageContainer = document.getElementById("img_slider");

    // Cicla attraverso ogni immagine nell'array
    for (var i = 0; i < totalImages; i++) {
        // Crea un elemento div per ogni immagine
        var imageDiv = document.createElement("div");
        imageDiv.classList.add("img-container");

        // Crea un elemento immagine
        var imageElement = document.createElement("img");
        imageElement.src = images[i].url;
        imageElement.alt = images[i].title;

        // Crea un elemento titolo (h2) e assegna il testo del titolo dall'array
        var titleElement = document.createElement("h2");
        titleElement.textContent = images[i].title;

        // Crea un elemento descrizione (p) e assegna il testo della descrizione dall'array
        var descriptionElement = document.createElement("p");
        descriptionElement.textContent = images[i].description;

        // Aggiungi l'immagine, il titolo e la descrizione al div dell'immagine
        imageDiv.appendChild(imageElement);
        imageDiv.appendChild(titleElement);
        imageDiv.appendChild(descriptionElement);

        // Aggiungi il div dell'immagine al container delle immagini
        imageContainer.appendChild(imageDiv);
    }

    // Visualizza l'immagine iniziale
    showCurrentImage();
}

// Funzione per visualizzare l'immagine corrente
function showCurrentImage() {
    // Nascondi tutte le immagini
    hideAllImages();

    // Mostra solo l'immagine corrente
    document.querySelector("#img_slider .img-container:nth-child(" + (currentIndex + 1) + ")").style.display = "block";
}

// Funzione per nascondere tutte le immagini
function hideAllImages() {
    for (var i = 0; i < totalImages; i++) {
        document.querySelector("#img_slider .img-container:nth-child(" + (i + 1) + ")").style.display = "none";
    }
}

// Funzione per avanzare all'immagine successiva
function showNextImage() {
    // Incrementa l'indice corrente, se raggiunge il limite, torna alla prima immagine
    currentIndex = (currentIndex + 1) % totalImages;

    // Visualizza l'immagine aggiornata
    showCurrentImage();
}

// Funzione per tornare all'immagine precedente
function showPreviousImage() {
    // Decrementa l'indice corrente, se è negativo, torna all'ultima immagine
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;

    // Visualizza l'immagine aggiornata
    showCurrentImage();
}

// Inizializza il carosello quando la pagina è completamente caricata
window.onload = function () {
    initializeCarousel();
};