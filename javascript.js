const servicesData = [
    {
        title: "Κούρεμα απλό",
        price: "€10",
        description: "Κλασικά ή μοντέρνα στυλ για το ιδανικό κούρεμα.",
        logo: "Images/icon1.svg"  // Παράδειγμα λογότυπου
    },
    {
        title: "Κούρεμα με λούσιμο",
        price: "€12",
        description: "Κούρεμα με αναζωογονητικό λούσιμο για φρεσκάδα.",
        logo: "Images/icon1.svg"  // Παράδειγμα λογότυπου
    },
    {
        title: "Κούρεμα με τριμάρισμα",
        price: "€12",
        description: "Ιδανικό κούρεμα με ακριβές τριμάρισμα για τέλειο αποτέλεσμα.",
        logo: "Images/icon1.svg"  // Παράδειγμα λογότυπου
    },
    {
        title: "Τριμάρισμα",
        price: "€5",
        description: "Ακριβές τριμάρισμα για καθαρές γραμμές και ιδανική εμφάνιση.",
        logo: "Images/icon2.svg"  // Παράδειγμα λογότυπου
    },
    {
        title: "Περιποίηση Γενειάδας",
        price: "€5",
        description: "Διαμόρφωση και φροντίδα για την τέλεια γενειάδα.",
        logo: "Images/icon4.svg"  // Παράδειγμα λογότυπου
    }
];

function loadServices() {
    const container = document.getElementById("services-container");

    if (!container) {
        console.warn("⚠️ Δεν βρέθηκε το services-container στο DOM.");
        return;
    }

    servicesData.forEach(service => {
        const serviceElement = document.createElement("div");
        serviceElement.classList.add("col-md-6");

        serviceElement.innerHTML = `
            <div class="service-card">
                <img src="${service.logo}" alt="${service.title}" class="service-logo">
                <div>
                    <h4 class="service-title">${service.title}</h4>
                    <p class="service-price">${service.price}</p>
                    <p class="service-description">${service.description}</p>
                </div>
            </div>
        `;

        container.appendChild(serviceElement);
    });
}

// Καλέστε τη συνάρτηση όταν το DOM είναι έτοιμο
document.addEventListener("DOMContentLoaded", loadServices);

// Άνοιγμα του modal και εμφάνιση της μεγέθυνης εικόνας
function openModal(imgElement) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");
  
    modal.style.display = "flex";
    modalImg.src = imgElement.src;
    captionText.innerHTML = imgElement.alt; // Εμφανίζει την περιγραφή της εικόνας
  }
  
  // Κλείσιμο του modal όταν κάνεις κλικ στο γκριζαρισμένο σημείο ή στο κουμπί κλεισίματος
  function closeModal(event) {
    // Αν το event προήλθε από το background του modal (δηλαδή το γκριζαρισμένο σημείο)
    if (event.target === document.getElementById("imageModal") || event.target.classList.contains("close")) {
      var modal = document.getElementById("imageModal");
      modal.style.display = "none";
    }
  }
  