class PeriodicTable {
    constructor(elements) {
      this.elements = elements;
    }
  
    getElementBySymbol(symbol) {
      return this.elements.find(el => el.symbol === symbol) || null;
    }
  
    getElementByName(name) {
      return this.elements.find(el => el.name.toLowerCase() === name.toLowerCase()) || null;
    }
  
    getElementsByClass(elementClass) {
      return this.elements.filter(el => el.class === elementClass);
    }
  
    getElementsByYearRange(startYear, endYear) {
      return this.elements.filter(el => typeof el.year === 'number' && el.year >= startYear && el.year <= endYear);
    }
  
    getLightestElement() {
      return this.elements.reduce((lightest, el) => (el.mass < lightest.mass ? el : lightest));
    }
  }
document.addEventListener("DOMContentLoaded", () => {
    const elements = [
        
        { symbol: "H", name: "Hydrogen", number: 1, mass: 1.008, class: "non-metal", details: "Lightest element, used in fuel cells.", inventor: "Henry Cavendish", year: 1766  },
        { symbol: "He", name: "Helium", number: 2, mass: 4.0026, class: "noble-gas", details: "Used in balloons and cooling superconductors.", inventor: "Pierre Janssen & Joseph Norman Lockyer", year: 1868 },
        { symbol: "Li", name: "Lithium", number: 3, mass: 6.94, class: "alkali-metal", details: "Used in batteries and medicine.", inventor: "Johann August Arfvedson", year: 1817 },
        { symbol: "Be", name: "Beryllium", number: 4, mass: 9.0122, class: "alkaline-earth-metal", details: "Used in aerospace materials.", inventor: "Louis-Nicolas Vauquelin", year: 1798 },
        { symbol: "B", name: "Boron", number: 5, mass: 10.81, class: "metalloid", details: "Used in detergents and glass.", inventor: "Joseph Louis Gay-Lussac & Louis-Jacques Thénard", year: 1808 },
        { symbol: "C", name: "Carbon", number: 6, mass: 12.011, class: "non-metal", details: "Essential for life, used in steel production.", inventor: "Ancient discovery", year: "Prehistoric" },
        { symbol: "N", name: "Nitrogen", number: 7, mass: 14.007, class: "non-metal", details: "Makes up 78% of Earth's atmosphere.", inventor: "Daniel Rutherford", year: 1772 },
        { symbol: "O", name: "Oxygen", number: 8, mass: 15.999, class: "non-metal", details: "Essential for respiration.", inventor: "Joseph Priestley & Carl Wilhelm Scheele", year: 1774 },
        { symbol: "F", name: "Fluorine", number: 9, mass: 18.998, class: "halogen", details: "Highly reactive and used in toothpaste.", inventor: "Henri Moissan", year: 1886 },
        { symbol: "Ne", name: "Neon", number: 10, mass: 20.180, class: "noble-gas", details: "Used in neon signs.", inventor: "Morris W. Travers & William Ramsay", year: 1898 },
        { symbol: "Na", name: "Sodium", number: 11, mass: 22.990, class: "alkali-metal", details: "Commonly found in salt.", inventor: "Humphry Davy", year: 1807 },
        { symbol: "Mg", name: "Magnesium", number: 12, mass: 24.305, class: "alkaline-earth-metal", details: "Used in airplanes and fireworks.", inventor: "Joseph Black", year: 1755 },
        { symbol: "Al", name: "Aluminum", number: 13, mass: 26.982, class: "post-transition-metal", details: "Lightweight metal used in packaging.", inventor: "Hans Christian Ørsted", year: 1825 },
        { symbol: "Si", name: "Silicon", number: 14, mass: 28.085, class: "metalloid", details: "Used in computer chips.", inventor: "Jöns Jakob Berzelius", year: 1824 },
        { symbol: "P", name: "Phosphorus", number: 15, mass: 30.974, class: "non-metal", details: "Used in fertilizers.", inventor: "Hennig Brand", year: 1669 },
        { symbol: "S", name: "Sulfur", number: 16, mass: 32.06, class: "non-metal", details: "Used in sulfuric acid.", inventor: "Ancient discovery", year: "Prehistoric" },
        { symbol: "Cl", name: "Chlorine", number: 17, mass: 35.45, class: "halogen", details: "Used in disinfectants.", inventor: "Carl Wilhelm Scheele", year: 1774 },
        { symbol: "Ar", name: "Argon", number: 18, mass: 39.948, class: "noble-gas", details: "Used in light bulbs.", inventor: "Lord Rayleigh & William Ramsay", year: 1894 },
        { symbol: "K", name: "Potassium", number: 19, mass: 39.098, class: "alkali-metal", details: "Essential for life.", inventor: "Humphry Davy", year: 1807 },
        { symbol: "Ca", name: "Calcium", number: 20, mass: 40.078, class: "alkaline-earth-metal", details: "Found in bones and teeth.", inventor: "Humphry Davy", year: 1808 },
        { symbol: "Sc", name: "Scandium", number: 21, mass: 44.956, class: "transition-metal", details: "Used in aerospace materials.", inventor: "Lars Fredrik Nilson", year: 1879 },
        { symbol: "Ti", name: "Titanium", number: 22, mass: 47.867, class: "transition-metal", details: "Strong and lightweight.", inventor: "William Gregor", year: 1791 },
        { symbol: "V", name: "Vanadium", number: 23, mass: 50.941, class: "transition-metal", details: "Used in steel alloys.", inventor: "Andrés Manuel del Río", year: 1801 },
        { symbol: "Cr", name: "Chromium", number: 24, mass: 52.03, class: "transition-metal", details: "Used in stainless steel.", inventor: "Louis Nicolas Vauquelin", year: 1797 },
        { symbol: "Mn", name: "Manganese", number: 25, mass: 54.938, class: "transition-metal", details: "Used in steel production.", inventor: "Johann Gottlieb Gahn", year: 1774 },
        { symbol: "Fe", name: "Iron", number: 26, mass: 55.845, class: "transition-metal", details: "Essential for blood.", inventor: "Ancient discovery", year: "Prehistoric" },
        { symbol: "Co", name: "Cobalt", number: 27, mass: 58.933, class: "transition-metal", details: "Used in batteries and magnets.", inventor: "Georg Brandt", year: 1735 },
        { symbol: "Ni", name: "Nickel", number: 28, mass: 58.693, class: "transition-metal", details: "Used in coins and batteries.", inventor: "Axel Fredrik Cronstedt", year: 1751 },
        { symbol: "Cu", name: "Copper", number: 29, mass: 63.546, class: "transition-metal", details: "Used in electrical wiring.", inventor: "Ancient discovery", year: "Prehistoric" },
        { symbol: "Zn", name: "Zinc", number: 30, mass: 65.38, class: "transition-metal", details: "Used in galvanization.", inventor: "Andreas Sigismund Marggraf", year: 1746 },
        { symbol: "Ga", name: "Gallium", number: 31, mass: 69.723, class: "post-transition-metal", details: "Used in electronics.", inventor: "Paul-Émile Lecoq de Boisbaudran", year: 1875 },
        { symbol: "Ge", name: "Germanium", number: 32, mass: 72.63, class: "metalloid", details: "Used in semiconductors.", inventor: "Clemens Winkler", year: 1886 },
        { symbol: "As", name: "Arsenic", number: 33, mass: 74.922, class: "metalloid", details: "Used in pesticides.", inventor: "Ancient discovery", year: "Prehistoric" },
        { symbol: "Se", name: "Selenium", number: 34, mass: 78.971, class: "non-metal", details: "Used in electronics.", inventor: "Jöns Jakob Berzelius", year: 1817 },
        { symbol: "Br", name: "Bromine", number: 35, mass: 79.904, class: "halogen", details: "Used in flame retardants.", inventor: "Antoine-Jérôme Balard", year: 1826 },
        { symbol: "Kr", name: "Krypton", number: 36, mass: 83.798, class: "noble-gas", details: "Used in light bulbs.", inventor: "William Ramsay & Morris W. Travers", year: 1898 },
        { symbol: "Rb", name: "Rubidium", number: 37, mass: 85.468, class: "alkali-metal", details: "Used in research.", inventor: "Robert Bunsen & Gustav Kirchhoff", year: 1861 },
        { symbol: "Sr", name: "Strontium", number: 38, mass: 87.62, class: "alkaline-earth-metal", details: "Used in fireworks.", inventor: "William Cruickshank", year: 1808 },
        { symbol: "Y", name: "Yttrium", number: 39, mass: 88.906, class: "transition-metal", details: "Used in phosphors.", inventor: "Johan Gadolin", year: 1794 },
        { symbol: "Zr", name: "Zirconium", number: 40, mass: 91.224, class: "transition-metal", details: "Used in nuclear reactors.", inventor: "Martin Heinrich Klaproth", year: 1789 },
        { symbol: "Nb", name: "Niobium", number: 41, mass: 92.906, class: "transition-metal", details: "Used in steel production.", inventor: "Charles de La Bastie", year: 1801 },
        { symbol: "Mo", name: "Molybdenum", number: 42, mass: 95.95, class: "transition-metal", details: "Used in steel alloys to enhance strength and corrosion resistance.", inventor: "Carl Wilhelm Scheele", year: 1778 },
        { symbol: "Tc", name: "Technetium", number: 43, mass: 98, class: "transition-metal", details: "First element to be artificially produced, used in medical imaging.", inventor: "Carlo Perrier and Emilio Segrè", year: 1937 },
        { symbol: "Ru", name: "Ruthenium", number: 44, mass: 101.07, class: "transition-metal", details: "Used in electronics, fuel cells, and as a catalyst.", inventor: "Karl Ernst Claus", year: 1844 },
        { symbol: "Rh", name: "Rhodium", number: 45, mass: 102.905, class: "transition-metal", details: "Used in catalytic converters and jewelry, known for its high reflectivity.", inventor: "William Hyde Wollaston", year: 1803 },
        { symbol: "Pd", name: "Palladium", number: 46, mass: 106.42, class: "transition-metal", details: "Used in catalytic converters, jewelry, and hydrogen storage.", inventor: "William Hyde Wollaston", year: 1803 },
        { symbol: "Ag", name: "Silver", number: 47, mass: 107.868, class: "transition-metal", details: "Widely used in jewelry, coins, and electronics due to its conductivity.", inventor: "Ancient civilizations", year: "Unknown" },
        { symbol: "Cd", name: "Cadmium", number: 48, mass: 112.414, class: "transition-metal", details: "Used in batteries, pigments, and as a corrosion-resistant coating.", inventor: "Karl Samuel Leberecht Hermann", year: 1817 },
        { symbol: "In", name: "Indium", number: 49, mass: 114.818, class: "post-transition-metal", details: "Used in electronics, semiconductors, and touchscreens.", inventor: "Ferdinand Reich and Theodor Richter", year: 1863 },
        { symbol: "Sn", name: "Tin", number: 50, mass: 118.71, class: "post-transition-metal", details: "Used in soldering, coatings, and in the production of alloys.", inventor: "Ancient civilizations", year: "Unknown" },
        { symbol: "Sb", name: "Antimony", number: 51, mass: 121.76, class: "metalloid", details: "Used in flame retardants.", inventor: "Known since ancient times", year: "Prehistoric" },
        { symbol: "Te", name: "Tellurium", number: 52, mass: 127.60, class: "metalloid", details: "Used in electronics and solar panels.", inventor: "Martin Heinrich Klaproth", year: 1782 },
        { symbol: "I", name: "Iodine", number: 53, mass: 126.904, class: "halogen", details: "Used in medicine and disinfectants.", inventor: "Bernard Courtois", year: 1811 },
        { symbol: "Xe", name: "Xenon", number: 54, mass: 131.293, class: "noble-gas", details: "Used in lamps and anesthesia.", inventor: "William Ramsay & Morris W. Travers", year: 1898 },
        { symbol: "Cs", name: "Cesium", number: 55, mass: 132.905, class: "alkali-metal", details: "Used in atomic clocks.", inventor: "Robert Bunsen & Gustav Kirchhoff", year: 1860 },
        { symbol: "Ba", name: "Barium", number: 56, mass: 137.327, class: "alkaline-earth-metal", details: "Used in X-ray imaging.", inventor: "Carl Gustav Mosander", year: 1808 },
        { symbol: "La", name: "Lanthanum", number: 57, mass: 138.905, class: "lanthanide", details: "Used in optics and catalysts.", inventor: "Carl Gustaf Mosander", year: 1839 },
        { symbol: "Ce", name: "Cerium", number: 58, mass: 140.116, class: "lanthanide", details: "Used in catalysts and polishing agents.", inventor: "Martin Heinrich Klaproth", year: 1803 },
        { symbol: "Pr", name: "Praseodymium", number: 59, mass: 140.907, class: "lanthanide", details: "Used in high-strength magnets.", inventor: "Carl Auer von Welsbach", year: 1885 },
        { symbol: "Nd", name: "Neodymium", number: 60, mass: 144.242, class: "lanthanide", details: "Used in powerful magnets.", inventor: "Carl Auer von Welsbach", year: 1885 },
        { symbol: "Pm", name: "Promethium", number: 61, mass: 145, class: "lanthanide", details: "Used in nuclear batteries.", inventor: "Lyman J. Briggs & others", year: 1945 },
        { symbol: "Sm", name: "Samarium", number: 62, mass: 150.36, class: "lanthanide", details: "Used in magnets.", inventor: "Paul Émile Lecoq de Boisbaudran", year: 1879 },
        { symbol: "Eu", name: "Europium", number: 63, mass: 151.964, class: "lanthanide", details: "Used in phosphors for TV screens.", inventor: "Eugène-Anatole Demarçay", year: 1896 },
        { symbol: "Gd", name: "Gadolinium", number: 64, mass: 157.25, class: "lanthanide", details: "Used in MRI contrast agents.", inventor: "John Curie & others", year: 1880 },
        { symbol: "Tb", name: "Terbium", number: 65, mass: 158.925, class: "lanthanide", details: "Used in phosphors for lighting.", inventor: "Carl Auer von Welsbach", year: 1843 },
        { symbol: "Dy", name: "Dysprosium", number: 66, mass: 162.5, class: "lanthanide", details: "Used in magnets.", inventor: "Lothar Meyer", year: 1886 },
        { symbol: "Ho", name: "Holmium", number: 67, mass: 164.930, class: "lanthanide", details: "Used in lasers.", inventor: "Per Teodor Cleve", year: 1878 },
        { symbol: "Er", name: "Erbium", number: 68, mass: 167.259, class: "lanthanide", details: "Used in lasers and fiber optics.", inventor: "Carl Auer von Welsbach", year: 1843 },
        { symbol: "Tm", name: "Thulium", number: 69, mass: 168.934, class: "lanthanide", details: "Used in medical imaging.", inventor: "Per Teodor Cleve", year: 1879 },
        { symbol: "Yb", name: "Ytterbium", number: 70, mass: 173.04, class: "lanthanide", details: "Used in fiber optics and laser sources.", inventor: "Jean Charles Galissard de Marignac", year: 1878 },
        { symbol: "Lu", name: "Lutetium", number: 71, mass: 174.966, class: "lanthanide", details: "Used in cancer treatment.", inventor: "Carl Auer von Welsbach", year: 1907 },
        { symbol: "Hf", name: "Hafnium", number: 72, mass: 178.49, class: "transition-metal", details: "Used in nuclear reactors.", inventor: "George Charles de Hevesy & Dirk Coster", year: 1923 },
        { symbol: "Ta", name: "Tantalum", number: 73, mass: 180.947, class: "transition-metal", details: "Used in electronics and aerospace.", inventor: "William Crookes", year: 1802 },
        { symbol: "W", name: "Tungsten", number: 74, mass: 183.84, class: "transition-metal", details: "Used in light bulb filaments.", inventor: "Carl Wilhelm Scheele", year: 1781 },
        { symbol: "Re", name: "Rhenium", number: 75, mass: 186.207, class: "transition-metal", details: "Used in jet engines.", inventor: "Ida Noddack, Otto Berg, and Walter Noddack", year: 1925 },
        { symbol: "Os", name: "Osmium", number: 76, mass: 190.23, class: "transition-metal", details: "Used in fountain pen nibs.", inventor: "Smithson Tennant", year: 1803 },
        { symbol: "Ir", name: "Iridium", number: 77, mass: 192.217, class: "transition-metal", details: "Used in high-temperature equipment.", inventor: "Smithson Tennant", year: 1803 },
        { symbol: "Pt", name: "Platinum", number: 78, mass: 195.084, class: "transition-metal", details: "Used in jewelry and catalytic converters.", inventor: "Antonio de Ulloa", year: 1748 },
        { symbol: "Au", name: "Gold", number: 79, mass: 196.967, class: "transition-metal", details: "Used in jewelry and currency.", inventor: "Ancient discovery", year: "Prehistoric" },
        { symbol: "Hg", name: "Mercury", number: 80, mass: 200.592, class: "transition-metal", details: "Used in thermometers.", inventor: "Known to ancient civilizations", year: "Prehistoric" },
        { symbol: "Tl", name: "Thallium", number: 81, mass: 204.38, class: "post-transition-metal", details: "Used in semiconductors.", inventor: "William Crookes", year: 1861 },
        { symbol: "Pb", name: "Lead", number: 82, mass: 207.2, class: "post-transition-metal", details: "Used in batteries and shielding.", inventor: "Ancient discovery", year: "Prehistoric" },
        { symbol: "Bi", name: "Bismuth", number: 83, mass: 208.980, class: "post-transition-metal", details: "Used in cosmetics and pharmaceuticals.", inventor: "Known to ancient civilizations", year: "Prehistoric" },
        { symbol: "Po", name: "Polonium", number: 84, mass: 209, class: "metalloid", details: "Used in nuclear applications.", inventor: "Marie Curie & Pierre Curie", year: 1898 },
        { symbol: "At", name: "Astatine", number: 85, mass: 210, class: "halogen", details: "Used in cancer treatment.", inventor: "Dale R. Corson, Kenneth Ross MacKenzie, and Emilio Segrè", year: 1940 },
        { symbol: "Rn", name: "Radon", number: 86, mass: 222, class: "noble-gas", details: "Used in cancer treatment.", inventor: "Frederick Dorn", year: 1899 },
        { symbol: "Fr", name: "Francium", number: 87, mass: 223, class: "alkali-metal", details: "Extremely rare and radioactive.", inventor: "Marguerite Perey", year: 1939 },
        { symbol: "Ra", name: "Radium", number: 88, mass: 226, class: "alkaline-earth-metal", details: "Used in luminous paint.", inventor: "Marie Curie & Pierre Curie", year: 1898 },
        { symbol: "Ac", name: "Actinium", number: 89, mass: 227, class: "actinide", details: "Used in radiation therapy.", inventor: "Frederick Oskar Giesel", year: 1899 },
        { symbol: "Th", name: "Thorium", number: 90, mass: 232.037, class: "actinide", details: "Used in nuclear reactors.", inventor: "Jöns Jakob Berzelius", year: 1828 },
        { symbol: "Pa", name: "Protactinium", number: 91, mass: 231.035, class: "actinide", details: "Used in nuclear research.", inventor: "Otto Hahn & Lise Meitner", year: 1899 },
        { symbol: "U", name: "Uranium", number: 92, mass: 238.029, class: "actinide", details: "Used in nuclear reactors.", inventor: "Martin Heinrich Klaproth", year: 1789 },
        { symbol: "Np", name: "Neptunium", number: 93, mass: 237, class: "actinide", details: "Used in nuclear reactors.", inventor: "Glenn T. Seaborg & others", year: 1940 },
        { symbol: "Pu", name: "Plutonium", number: 94, mass: 244, class: "actinide", details: "Used in nuclear weapons.", inventor: "Glenn T. Seaborg & others", year: 1940 },
        { symbol: "Am", name: "Americium", number: 95, mass: 243, class: "actinide", details: "Used in smoke detectors.", inventor: "Glenn T. Seaborg & others", year: 1944 },
        { symbol: "Cm", name: "Curium", number: 96, mass: 247, class: "actinide", details: "Used in nuclear research.", inventor: "Marie Curie & Irène Joliot-Curie", year: 1944 },
        { symbol: "Bk", name: "Berkelium", number: 97, mass: 247, class: "actinide", details: "Used in nuclear research.", inventor: "Glenn T. Seaborg & others", year: 1949 },
        { symbol: "Cf", name: "Californium", number: 98, mass: 251, class: "actinide", details: "Used in nuclear reactors.", inventor: "Glenn T. Seaborg & others", year: 1950 },
        { symbol: "Es", name: "Einsteinium", number: 99, mass: 252, class: "actinide", details: "Used in nuclear research.", inventor: "Albert Ghiorso & others", year: 1952 },
        { symbol: "Fm", name: "Fermium", number: 100, mass: 257, class: "actinide", details: "Used in nuclear research.", inventor: "Albert Ghiorso & others", year: 1952 },
        { symbol: "Md", name: "Mendelevium", number: 101, mass: 258, class: "actinide", details: "Named after Dmitri Mendeleev, used in scientific research.", inventor: "Albert Ghiorso", year: 1955 },
        { symbol: "No", name: "Nobelium", number: 102, mass: 259, class: "actinide", details: "Named after Alfred Nobel, used in research and experiments.", inventor: "Albert Ghiorso", year: 1958 },
        { symbol: "Lr", name: "Lawrencium", number: 103, mass: 262, class: "actinide", details: "Named after Ernest O. Lawrence, used in scientific research.", inventor: "Albert Ghiorso", year: 1961 },
        { symbol: "Rf", name: "Rutherfordium", number: 104, mass: 267, class: "transition-metal", details: "Named after Ernest Rutherford, used in research.", inventor: "Joint Institute for Nuclear Research", year: 1964 },
        { symbol: "Db", name: "Dubnium", number: 105, mass: 270, class: "transition-metal", details: "Named after Dubna, Russia, used in scientific research.", inventor: "Joint Institute for Nuclear Research", year: 1970 },
        { symbol: "Sg", name: "Seaborgium", number: 106, mass: 271, class: "transition-metal", details: "Named after Glenn T. Seaborg, used in scientific research.", inventor: "Lawrence Berkeley National Laboratory", year: 1974 },
        { symbol: "Bh", name: "Bohrium", number: 107, mass: 270, class: "transition-metal", details: "Named after Niels Bohr, used in scientific research.", inventor: "Gesellschaft für Schwerionenforschung", year: 1981 },
        { symbol: "Hs", name: "Hassium", number: 108, mass: 277, class: "transition-metal", details: "Named after the German state of Hesse, used in scientific research.", inventor: "Gesellschaft für Schwerionenforschung", year: 1984 },
        { symbol: "Mt", name: "Meitnerium", number: 109, mass: 278, class: "transition-metal", details: "Named after Lise Meitner, used in scientific research.", inventor: "Gesellschaft für Schwerionenforschung", year: 1982 },
        { symbol: "Ds", name: "Darmstadtium", number: 110, mass: 281, class: "transition-metal", details: "Named after Darmstadt, Germany, used in scientific research.", inventor: "Gesellschaft für Schwerionenforschung", year: 1994 },
        { symbol: "Rg", name: "Roentgenium", number: 111, mass: 280, class: "transition-metal", details: "Named after Wilhelm Röntgen, used in scientific research.", inventor: "Gesellschaft für Schwerionenforschung", year: 1994 },
        { symbol: "Cn", name: "Copernicium", number: 112, mass: 285, class: "transition-metal", details: "Named after Nicolaus Copernicus, used in scientific research.", inventor: "Gesellschaft für Schwerionenforschung", year: 2009 },
        { symbol: "Nh", name: "Nihonium", number: 113, mass: 284, class: "post-transition-metal", details: "Named after Japan, used in scientific research.", inventor: "RIKEN", year: 2004 },
        { symbol: "Fl", name: "Flerovium", number: 114, mass: 289, class: "post-transition-metal", details: "Named after Flerov Laboratory of Nuclear Reactions, used in scientific research.", inventor: "Joint Institute for Nuclear Research", year: 1999 },
        { symbol: "Mc", name: "Moscovium", number: 115, mass: 288, class: "post-transition-metal", details: "Named after Moscow, used in scientific research.", inventor: "Joint Institute for Nuclear Research", year: 2004 },
        { symbol: "Lv", name: "Livermorium", number: 116, mass: 293, class: "post-transition-metal", details: "Named after Lawrence Livermore National Laboratory, used in scientific research.", inventor: "Lawrence Livermore National Laboratory", year: 2000 },
        { symbol: "Td", name: "Tennessine", number: 117, mass: 294, class: "halogen", details: "Named after Tennessee, used in scientific research.", inventor: "Joint Institute for Nuclear Research", year: 2010 },
        { symbol: "Og", name: "Oganesson", number: 118, mass: 294, class: "noble-gas", details: "Named after Yuri Oganessian, used in scientific research.", inventor: "Joint Institute for Nuclear Research", year: 2002 }
    
    

    ];

    const table = document.getElementById("table");
    const modal = document.getElementById("modal");
    const elementName = document.getElementById("elementName");
    const elementDetails = document.getElementById("elementDetails");

    elements.forEach(element => {
        const div = document.createElement("div");
        div.classList.add("element", element.category);
        div.innerHTML = `<strong>${element.symbol}</strong><br>${element.number}`;
        div.addEventListener("click", () => openModal(element));
        table.appendChild(div);
    });

    function openModal(element) {
        if (!element) return; // Prevent accidental modal triggers
        elementName.textContent = `${element.name} (${element.symbol})`;
        elementDetails.innerHTML = `
            <strong>Atomic Number:</strong> ${element.number} <br>
            <strong>Atomic Mass:</strong> ${element.mass} <br>
            <strong>Category:</strong> ${element.class} <br>
            <strong>Details:</strong> ${element.details} <br>
            <strong>Inventor:</strong> ${element.inventor} <br>
            <strong>Discovery Year:</strong> ${element.year}
        `;
        modal.style.display = "flex";
    }

    window.closeModal = function () {
        modal.style.display = "none";
    };
});

