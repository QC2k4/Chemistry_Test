import './PeriodicTable.css'

function PeriodicTable() {
    const elements = [
  { atomicNumber: 1, symbol: "H", name: "Hydrogen", group: "nonmetal", column: 1, row: 1 },
  { atomicNumber: 2, symbol: "He", name: "Helium", group: "noble-gas", column: 18, row: 1 },
  { atomicNumber: 3, symbol: "Li", name: "Lithium", group: "alkali", column: 1, row: 2 },
  { atomicNumber: 4, symbol: "Be", name: "Beryllium", group: "alkaline-earth", column: 2, row: 2 },
  { atomicNumber: 5, symbol: "B", name: "Boron", group: "metalloid", column: 13, row: 2 },
  { atomicNumber: 6, symbol: "C", name: "Carbon", group: "nonmetal", column: 14, row: 2 },
  { atomicNumber: 7, symbol: "N", name: "Nitrogen", group: "nonmetal", column: 15, row: 2 },
  { atomicNumber: 8, symbol: "O", name: "Oxygen", group: "nonmetal", column: 16, row: 2 },
  { atomicNumber: 9, symbol: "F", name: "Fluorine", group: "nonmetal", column: 17, row: 2 },
  { atomicNumber: 10, symbol: "Ne", name: "Neon", group: "noble-gas", column: 18, row: 2 },
  { atomicNumber: 11, symbol: "Na", name: "Sodium", group: "alkali", column: 1, row: 3 },
  { atomicNumber: 12, symbol: "Mg", name: "Magnesium", group: "alkaline-earth", column: 2, row: 3 },
  { atomicNumber: 13, symbol: "Al", name: "Aluminium", group: "post-transition", column: 13, row: 3 },
  { atomicNumber: 14, symbol: "Si", name: "Silicon", group: "metalloid", column: 14, row: 3 },
  { atomicNumber: 15, symbol: "P", name: "Phosphorus", group: "nonmetal", column: 15, row: 3 },
  { atomicNumber: 16, symbol: "S", name: "Sulfur", group: "nonmetal", column: 16, row: 3 },
  { atomicNumber: 17, symbol: "Cl", name: "Chlorine", group: "nonmetal", column: 17, row: 3 },
  { atomicNumber: 18, symbol: "Ar", name: "Argon", group: "noble-gas", column: 18, row: 3 },
  { atomicNumber: 19, symbol: "K", name: "Potassium", group: "alkali", column: 1, row: 4 },
  { atomicNumber: 20, symbol: "Ca", name: "Calcium", group: "alkaline-earth", column: 2, row: 4 },
  { atomicNumber: 21, symbol: "Sc", name: "Scandium", group: "transition", column: 3, row: 4 },
  { atomicNumber: 22, symbol: "Ti", name: "Titanium", group: "transition", column: 4, row: 4 },
  { atomicNumber: 23, symbol: "V", name: "Vanadium", group: "transition", column: 5, row: 4 },
  { atomicNumber: 24, symbol: "Cr", name: "Chromium", group: "transition", column: 6, row: 4 },
  { atomicNumber: 25, symbol: "Mn", name: "Manganese", group: "transition", column: 7, row: 4 },
  { atomicNumber: 26, symbol: "Fe", name: "Iron", group: "transition", column: 8, row: 4 },
  { atomicNumber: 27, symbol: "Co", name: "Cobalt", group: "transition", column: 9, row: 4 },
  { atomicNumber: 28, symbol: "Ni", name: "Nickel", group: "transition", column: 10, row: 4 },
  { atomicNumber: 29, symbol: "Cu", name: "Copper", group: "transition", column: 11, row: 4 },
  { atomicNumber: 30, symbol: "Zn", name: "Zinc", group: "transition", column: 12, row: 4 },
  { atomicNumber: 31, symbol: "Ga", name: "Gallium", group: "post-transition", column: 13, row: 4 },
  { atomicNumber: 32, symbol: "Ge", name: "Germanium", group: "metalloid", column: 14, row: 4 },
  { atomicNumber: 33, symbol: "As", name: "Arsenic", group: "metalloid", column: 15, row: 4 },
  { atomicNumber: 34, symbol: "Se", name: "Selenium", group: "nonmetal", column: 16, row: 4 },
  { atomicNumber: 35, symbol: "Br", name: "Bromine", group: "nonmetal", column: 17, row: 4 },
  { atomicNumber: 36, symbol: "Kr", name: "Krypton", group: "noble-gas", column: 18, row: 4 },
  { atomicNumber: 37, symbol: "Rb", name: "Rubidium", group: "alkali", column: 1, row: 5 },
  { atomicNumber: 38, symbol: "Sr", name: "Strontium", group: "alkaline-earth", column: 2, row: 5 },
  { atomicNumber: 39, symbol: "Y", name: "Yttrium", group: "transition", column: 3, row: 5 },
  { atomicNumber: 40, symbol: "Zr", name: "Zirconium", group: "transition", column: 4, row: 5 },
  { atomicNumber: 41, symbol: "Nb", name: "Niobium", group: "transition", column: 5, row: 5 },
  { atomicNumber: 42, symbol: "Mo", name: "Molybdenum", group: "transition", column: 6, row: 5 },
  { atomicNumber: 43, symbol: "Tc", name: "Technetium", group: "transition", column: 7, row: 5 },
  { atomicNumber: 44, symbol: "Ru", name: "Ruthenium", group: "transition", column: 8, row: 5 },
  { atomicNumber: 45, symbol: "Rh", name: "Rhodium", group: "transition", column: 9, row: 5 },
  { atomicNumber: 46, symbol: "Pd", name: "Palladium", group: "transition", column: 10, row: 5 },
  { atomicNumber: 47, symbol: "Ag", name: "Silver", group: "transition", column: 11, row: 5 },
  { atomicNumber: 48, symbol: "Cd", name: "Cadmium", group: "transition", column: 12, row: 5 },
  { atomicNumber: 49, symbol: "In", name: "Indium", group: "post-transition", column: 13, row: 5 },
  { atomicNumber: 50, symbol: "Sn", name: "Tin", group: "post-transition", column: 14, row: 5 },
  { atomicNumber: 51, symbol: "Sb", name: "Antimony", group: "metalloid", column: 15, row: 5 },
  { atomicNumber: 52, symbol: "Te", name: "Tellurium", group: "metalloid", column: 16, row: 5 },
  { atomicNumber: 53, symbol: "I", name: "Iodine", group: "nonmetal", column: 17, row: 5 },
  { atomicNumber: 54, symbol: "Xe", name: "Xenon", group: "noble-gas", column: 18, row: 5 },
  { atomicNumber: 55, symbol: "Cs", name: "Cesium", group: "alkali", column: 1, row: 6 },
  { atomicNumber: 56, symbol: "Ba", name: "Barium", group: "alkaline-earth", column: 2, row: 6 },
  { atomicNumber: 57, symbol: "La", name: "Lanthanum", group: "lanthanide", column: 3, row: 6 },
  { atomicNumber: 58, symbol: "Ce", name: "Cerium", group: "lanthanide", column: 4, row: 8 },
  { atomicNumber: 59, symbol: "Pr", name: "Praseodymium", group: "lanthanide", column: 5, row: 8 },
  { atomicNumber: 60, symbol: "Nd", name: "Neodymium", group: "lanthanide", column: 6, row: 8 },
  { atomicNumber: 61, symbol: "Pm", name: "Promethium", group: "lanthanide", column: 7, row: 8 },
  { atomicNumber: 62, symbol: "Sm", name: "Samarium", group: "lanthanide", column: 8, row: 8 },
  { atomicNumber: 63, symbol: "Eu", name: "Europium", group: "lanthanide", column: 9, row: 8 },
  { atomicNumber: 64, symbol: "Gd", name: "Gadolinium", group: "lanthanide", column: 10, row: 8 },
  { atomicNumber: 65, symbol: "Tb", name: "Terbium", group: "lanthanide", column: 11, row: 8 },
  { atomicNumber: 66, symbol: "Dy", name: "Dysprosium", group: "lanthanide", column: 12, row: 8 },
  { atomicNumber: 67, symbol: "Ho", name: "Holmium", group: "lanthanide", column: 13, row: 8 },
  { atomicNumber: 68, symbol: "Er", name: "Erbium", group: "lanthanide", column: 14, row: 8 },
  { atomicNumber: 69, symbol: "Tm", name: "Thulium", group: "lanthanide", column: 15, row: 8 },
  { atomicNumber: 70, symbol: "Yb", name: "Ytterbium", group: "lanthanide", column: 16, row: 8 },
  { atomicNumber: 71, symbol: "Lu", name: "Lutetium", group: "lanthanide", column: 17, row: 8 },
  { atomicNumber: 72, symbol: "Hf", name: "Hafnium", group: "transition", column: 4, row: 6 },
  { atomicNumber: 73, symbol: "Ta", name: "Tantalum", group: "transition", column: 5, row: 6 },
  { atomicNumber: 74, symbol: "W", name: "Tungsten", group: "transition", column: 6, row: 6 },
  { atomicNumber: 75, symbol: "Re", name: "Rhenium", group: "transition", column: 7, row: 6 },
  { atomicNumber: 76, symbol: "Os", name: "Osmium", group: "transition", column: 8, row: 6 },
  { atomicNumber: 77, symbol: "Ir", name: "Iridium", group: "transition", column: 9, row: 6 },
  { atomicNumber: 78, symbol: "Pt", name: "Platinum", group: "transition", column: 10, row: 6 },
  { atomicNumber: 79, symbol: "Au", name: "Gold", group: "transition", column: 11, row: 6 },
  { atomicNumber: 80, symbol: "Hg", name: "Mercury", group: "transition", column: 12, row: 6 },
  { atomicNumber: 81, symbol: "Tl", name: "Thallium", group: "post-transition", column: 13, row: 6 },
  { atomicNumber: 82, symbol: "Pb", name: "Lead", group: "post-transition", column: 14, row: 6 },
  { atomicNumber: 83, symbol: "Bi", name: "Bismuth", group: "post-transition", column: 15, row: 6 },
  { atomicNumber: 84, symbol: "Po", name: "Polonium", group: "metalloid", column: 16, row: 6 },
  { atomicNumber: 85, symbol: "At", name: "Astatine", group: "nonmetal", column: 17, row: 6 },
  { atomicNumber: 86, symbol: "Rn", name: "Radon", group: "noble-gas", column: 18, row: 6 },
  { atomicNumber: 87, symbol: "Fr", name: "Francium", group: "alkali", column: 1, row: 7 },
  { atomicNumber: 88, symbol: "Ra", name: "Radium", group: "alkaline-earth", column: 2, row: 7 },
  { atomicNumber: 89, symbol: "Ac", name: "Actinium", group: "actinide", column: 3, row: 7 },
  { atomicNumber: 90, symbol: "Th", name: "Thorium", group: "actinide", column: 4, row: 9 },
  { atomicNumber: 91, symbol: "Pa", name: "Protactinium", group: "actinide", column: 5, row: 9 },
  { atomicNumber: 92, symbol: "U", name: "Uranium", group: "actinide", column: 6, row: 9 },
  { atomicNumber: 93, symbol: "Np", name: "Neptunium", group: "actinide", column: 7, row: 9 },
  { atomicNumber: 94, symbol: "Pu", name: "Plutonium", group: "actinide", column: 8, row: 9 },
  { atomicNumber: 95, symbol: "Am", name: "Americium", group: "actinide", column: 9, row: 9 },
  { atomicNumber: 96, symbol: "Cm", name: "Curium", group: "actinide", column: 10, row: 9 },
  { atomicNumber: 97, symbol: "Bk", name: "Berkelium", group: "actinide", column: 11, row: 9 },
  { atomicNumber: 98, symbol: "Cf", name: "Californium", group: "actinide", column: 12, row: 9 },
  { atomicNumber: 99, symbol: "Es", name: "Einsteinium", group: "actinide", column: 13, row: 9 },
  { atomicNumber: 100, symbol: "Fm", name: "Fermium", group: "actinide", column: 14, row: 9 },
  { atomicNumber: 101, symbol: "Md", name: "Mendelevium", group: "actinide", column: 15, row: 9 },
  { atomicNumber: 102, symbol: "No", name: "Nobelium", group: "actinide", column: 16, row: 9 },
  { atomicNumber: 103, symbol: "Lr", name: "Lawrencium", group: "actinide", column: 17, row: 9 },
  { atomicNumber: 104, symbol: "Rf", name: "Rutherfordium", group: "transition", column: 4, row: 7 },
  { atomicNumber: 105, symbol: "Db", name: "Dubnium", group: "transition", column: 5, row: 7 },
  { atomicNumber: 106, symbol: "Sg", name: "Seaborgium", group: "transition", column: 6, row: 7 },
  { atomicNumber: 107, symbol: "Bh", name: "Bohrium", group: "transition", column: 7, row: 7 },
  { atomicNumber: 108, symbol: "Hs", name: "Hassium", group: "transition", column: 8, row: 7 },
  { atomicNumber: 109, symbol: "Mt", name: "Meitnerium", group: "unknown", column: 9, row: 7 },
  { atomicNumber: 110, symbol: "Ds", name: "Darmstadtium", group: "unknown", column: 10, row: 7 },
  { atomicNumber: 111, symbol: "Rg", name: "Roentgenium", group: "unknown", column: 11, row: 7 },
  { atomicNumber: 112, symbol: "Cn", name: "Copernicium", group: "unknown", column: 12, row: 7 },
  { atomicNumber: 113, symbol: "Nh", name: "Nihonium", group: "unknown", column: 13, row: 7 },
  { atomicNumber: 114, symbol: "Fl", name: "Flerovium", group: "unknown", column: 14, row: 7 },
  { atomicNumber: 115, symbol: "Mc", name: "Moscovium", group: "unknown", column: 15, row: 7 },
  { atomicNumber: 116, symbol: "Lv", name: "Livermorium", group: "unknown", column: 16, row: 7 },
  { atomicNumber: 117, symbol: "Ts", name: "Tennessine", group: "unknown", column: 17, row: 7 },
  { atomicNumber: 118, symbol: "Og", name: "Oganesson", group: "unknown", column: 18, row: 7 }
];


    return (
        <>
            <h1 className='title'>Periodic Table</h1>
            <div className="periodic-table">
                {elements.map((element) => (
                    <div
                        key={element.atomicNumber}
                        className={`element group-${element.group}`}
                        style={{
                            gridColumn: element.column,
                            gridRow: element.row
                        }}
                        data-atomic-number={element.atomicNumber}
                    >
                        <div className="atomic-number">{element.atomicNumber}</div>
                        <div className="symbol">{element.symbol}</div>
                        <div className="name">{element.name}</div>
                    </div>
                ))}
            </div>

            <div className="group-notes">
                <ul>
                    <li><span className="legend-box group-alkali"></span> <b>Alkali Metals</b>: Very reactive, especially with water.</li>
                    <li><span className="legend-box group-alkaline-earth"></span> <b>Alkaline Earth Metals</b>: Reactive, but less than alkali metals.</li>
                    <li><span className="legend-box group-transition"></span> <b>Transition Metals</b>: Good conductors, form colored compounds.</li>
                    <li><span className="legend-box group-post-transition"></span> <b>Post-Transition Metals</b>: Softer metals, varied properties.</li>
                    <li><span className="legend-box group-metalloid"></span> <b>Metalloids</b>: Semiconductors, properties of metals and nonmetals.</li>
                    <li><span className="legend-box group-nonmetal"></span> <b>Nonmetals</b>: Poor conductors, brittle in solid form.</li>
                    <li><span className="legend-box group-noble-gas"></span> <b>Noble Gases</b>: Inert and stable under most conditions.</li>
                    <li><span className="legend-box group-lanthanide"></span> <b>Lanthanides</b>: Rare earth metals, used in electronics.</li>
                    <li><span className="legend-box group-actinide"></span> <b>Actinides</b>: Radioactive, mostly synthetic elements.</li>
                    <li><span className="legend-box group-unknown"></span> <b>Unknown</b>: Properties are not well defined.</li>
                </ul>
            </div>

        </>
    )
}

export default PeriodicTable;