const cityDistricts = {
    manila: ["Binondo", "Ermita", "Intramuros", "Malate", "Paco", "Pandacan", 
    "Port Area", "Quiapo", "Sampaloc", "San Andres", "San Miguel", "San Nicolas", 
    "Sta. Ana", "Sta. Cruz", "Sta. Mesa", "Tondo"],
    las_piñas : ["District 1", "District 2"],
    mandaluyong: ["District 1", "District 2"],
    makati: ["District 1", "District 2"],
    marikina: ["District 1", "District 2"]
};

const districtBarangays = {
    manila: {
        "Binondo": ["Barangay 288", "Barangay 289", "Barangay 290", "Barangay 291", 
        "Barangay 292", "Barangay 293", "Barangay 294", "Barangay 295", "Barangay 296", 
        "Barangay 297", "Barangay 298"],

        "Ermita": ["Barangay 659", "Barangay 659-A", "Barangay 660", "Barangay 660-A", 
        "Barangay 661", "Barangay 663", "Barangay 663-A", "Barangay 664", "Barangay 666", 
        "Barangay 667", "Barangay 668", "Barangay 669", "Barangay 670"],

        "Malate": ["Barangay 688 - 695", "Barangay 696 - 699", 
        "Barangay 700 - 706", "Barangay 707 - 721", "Barangay 722 - 730", "Barangay 731 - 744"],

        "Intramuros": ["Barangay 654", "Barangay 655", "Barangay 656", 
        "Barangay 657", "Barangay 658"],

        "Paco": ["Barangay 662 - 664-A", "Barangay 671 - 676", "Barangay 677 - 685", 
        "Barangay 686 and 687", "Barangay 809 - 820", "Barangay 821 - 828", "Barangay 829 - 832"],

        "Pandacan": ["Barangay 833 - 840", "Barangay 841 - 848", "Barangay 849 - 859", 
        "Barangay 860 - 865", "Barangay 867 - 872"],

        "Port Area": ["Barangay 649", "", "Barangay 650", "Barangay 651", 
        "Barangay 652", "Barangay 653"],

        "Quiapo": ["Barangay 306", "Barangay 307", "Barangay 308", 
        "Barangay 309", "Barangay 383", "Barangay 384", "Barangay 385", "Barangay 386", "Barangay 387",
        "Barangay 388", "Barangay 389", "Barangay 390", "Barangay 391", "Barangay 392", "Barangay 393",
        "Barangay 394"],

        "Sampaloc": ["Barangay 395 - 404", "Barangay 405 - 416", "Barangay 417 - 428", 
        "Barangay 429 - 449", "Barangay 450 - 461", "Barangay 462 - 471", "Barangay 472 - 481", "Barangay 482 - 491", 
        "Barangay 492 - 501", "Barangay 502 - 511", "Barangay 512 -520", "Barangay 521 - 531", 
        "Barangay 532 - 541", "Barangay 542 - 554", "Barangay 555 - 568", "Barangay 569 - 580", 
        "Barangay 581 - 586"],

        "San Andres": ["Barangay 745 - 754", "Barangay 755 - 762", "Barangay 763 - 769", 
        "Barangay 770 - 775", "Barangay 776 - 783", "Barangay 784 - 793", "Barangay 794 - 807", 
        "Barangay 808 and 818-A"],

        "San Miguel": ["Barangay 637", "Barangay 638", "Barangay 639", "Barangay 640", "Barangay 641", 
        "Barangay 642", "Barangay 643", "Barangay 644", "Barangay 645", "Barangay 646", "Barangay 647", 
        "Barangay 648", ],

        "San Nicolas": ["Barangay 268", "Barangay 269", "Barangay 270", "Barangay 271", "Barangay 272", 
        "Barangay 273", "Barangay 274", "Barangay 275", "Barangay 276", "Barangay 281", "Barangay 282", 
        "Barangay 283", "Barangay 284", "Barangay 285", "Barangay 286"],

        "Sta. Ana": ["Barangay 866", "Barangay 873 - 880", "Barangay 881 - 886", "Barangay 887 - 891", 
        "Barangay 892 - 897", "Barangay 898 - 905"],

        "Sta. Cruz": ["Barangay 297 - 305", "Barangay 310 - 314", "Barangay 315 - 325", 
        "Barangay 326 - 335", "Barangay 336 - 343", "Barangay 344 - 352", "Barangay 353 - 362", 
        "Barangay 363 - 372", "Barangay 373 - 382"],

        "Sta. Mesa": ["Barangay 587 - 593", "Barangay 594 - 601", "Barangay 602 - 613", 
        "Barangay 607 - 618", "Barangay 619 - 625", "Barangay 626 - 630", "Barangay 631 - 636"],

        "Tondo": ["Barangay 1 - 9", "Barangay 11 - 20", "Barangay 25 and 26","Barangay 28 - 32", 
        "Barangay 33 - 39", "Barangay 41 - 47", "Barangay 48 - 55", "Barangay 56 - 61", "Barangay 62 - 75", 
        "Barangay 76 - 90", "Barangay 91 - 106", "Barangay 107 - 112", "Barangay 116 - 123", 
        "Barangay 124 - 128", "Barangay 129 - 134", "Barangay 135 - 146", "Barangay 147 - 151", 
        "Barangay 152 - 165", "Barangay 166 - 176", "Barangay 177 - 186", "Barangay 187 - 197", 
        "Barangay 198 - 205", "Barangay 206 - 212", "Barangay 213 - 220", "Barangay 221 - 233", 
        "Barangay 234 - 248", "Barangay 249 - 259", "Barangay 260 - 267"]
    },
    las_piñas: {
        "District 1": ["CAA-B.F. International", "Daniel Fajardo (Poblacion)", "Elias Aldana", 
        "Ilaya", "Manuyo Uno", "Manuyo Dos", "Pamplona Uno", "Pamplona Tres", "Pulanglupa Uno", "Zapote"],

        "District 2": ["Almanza Uno", "Almanza Dos", "Pamplona Dos", 
        "Pilar Village", "Talon Uno", "Talon Dos", "Talon Tres", "Talon Cuatro", "Talon Singko"]
    },
    mandaluyong: {
        "District 1" : ["Addition Hills", "Bagong Silang", "Burol", "Daang Bakal", "Hagdan Bato Itaas", 
        "Hagdan Bato Libis", "Harapin Ang Bukas", "Highway Hills", "Mauway", "New Zañiga", 
        "Pag-Asa", "Pleasant Hills", "Poblacion", "Wack-Wack Greenhills"],

        "District 2" : ["Barangka Drive", "Barangka Ibaba", "Barangka Ilaya", "Barangka Itaas", 
        "Buayang Bato", "Hulo", "Mabini-J. Rizal", "Malamig", "Namayan", "Old Zañiga", "Plainview", 
        "San Jose", "Vergara"]
    },
    makati: {
        "District 1": ["Bangkal", "Bel-Air", "Carmona", "Dasmariñas", "Forbes Park", "Kasilawan", 
        "La Paz", "Magallanes", "Olympia", "Palanan", "Pio del Pilar", "Poblacion", "San Antonio", 
        "San Isidro", "San Lorenzo", "Santa Cruz", "Singkamas", "Tejeros", "Urdaneta", "Valenzuela"],

        "District 2": ["Cembo", "Comembo", "East Rembo", "Guadalupe Nuevo", "Guadalupe Viejo", 
        "Pembo", "Pinagkaisahan", "Pitogo", "Post Proper Northside", "Post Proper Southside", 
        "Rizal", "South Cembo", "West Rembo"]

    },
    marikina: {
        "District 1": ["Barangka", "Tañong", "Jesus dela Peña", "Industrial Valley Complex", 
        "Kalumpang", "San Roque", "Sta. Elena", "Sto. Niño", "Malanday"],

        "District 2": ["Concepcion I", "Concepcion II", "Nangka", "Parang", "Marikina Heights", 
        "Fortune", "Tumana"]
    }
};

function populateDistricts() {
    const citySelect = document.getElementById('city');
    const districtSelect = document.getElementById('district');
    const selectedCity = citySelect.value;

    districtSelect.innerHTML = '<option value="">Select District</option>';
    if (selectedCity) {
        const districts = cityDistricts[selectedCity];
        districts.forEach(district => {
            const option = document.createElement('option');
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
        districtSelect.disabled = false;
    } else {
        districtSelect.disabled = true;
    }
    populateBarangays();
}

function populateBarangays() {
    const citySelect = document.getElementById('city');
    const districtSelect = document.getElementById('district');
    const barangaySelect = document.getElementById('barangay');
    const selectedCity = citySelect.value;
    const selectedDistrict = districtSelect.value;

    barangaySelect.innerHTML = '<option value="">Select Barangay</option>';
    if (selectedCity && selectedDistrict) {
        const barangays = districtBarangays[selectedCity][selectedDistrict];
        barangays.forEach(barangay => {
            const option = document.createElement('option');
            option.value = barangay;
            option.textContent = barangay;
            barangaySelect.appendChild(option);
        });
        barangaySelect.disabled = false;
    } else {
        barangaySelect.disabled = true;
    }
}