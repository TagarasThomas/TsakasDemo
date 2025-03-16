const servicesData = [
    {
        title: "Κούρεμα",
        price: "€10",
        description: "Από κλασικά έως μοντέρνα στυλ, θα βρούμε το κατάλληλο για εσάς!",
        logo: "https://tagarasthomas.github.io/TsakasDemo/Images/icon1.svg"  // Παράδειγμα λογότυπου
    },
    {
        title: "Ξύρισμα",
        price: "€10",
        description: "Παραδοσιακό ξύρισμα με ξυράφι για απόλυτη άνεση και ακρίβεια.",
        logo: "https://tagarasthomas.github.io/TsakasDemo/Images/icon3.svg"  // Παράδειγμα λογότυπου
    },
    {
        title: "Περιποίηση Γενειάδας",
        price: "€5",
        description: "Φροντίδα και διαμόρφωση για την τέλεια γενειάδα σας.",
        logo: "https://tagarasthomas.github.io/TsakasDemo/Images/icon2.svg"  // Παράδειγμα λογότυπου
    },
    {
        title: "Σαπούνι για γενειάδα",
        price: "€5",
        description: "Αναζωογονητικό σαπούνι για απαλή και υγιή γενειάδα.",
        logo: "https://tagarasthomas.github.io/TsakasDemo/Images/icon4.svg"  // Παράδειγμα λογότυπου
    }
];

function loadServices() {
    const container = document.getElementById("services-container");

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
