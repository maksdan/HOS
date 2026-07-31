import type { MomentNode } from "../types";

/** Antiquity through 1899: from an argument to a measurement. */
export const earlyNodes: MomentNode[] = [
  {
    id: "democritus",
    title: "Cutting until you can't",
    year: -440,
    displayYear: "c. 440 BCE",
    people: ["Leucippus", "Democritus"],
    place: "Abdera",
    kind: "idea",
    track: "philosophy",
    summary:
      "A thought experiment, not a measurement: keep halving matter and something must stop the halving.",
    question:
      "If you cut a piece of cheese in half, and again, and again — does it go on forever?",
    expected:
      "The Eleatics had argued that change and division are illusions, and that reality is one continuous unchanging whole.",
    found:
      "Democritus reasoned that infinite division is absurd: at some point you reach átomos, 'uncuttable'. Everything is these particles plus the void between them, differing only in shape, arrangement and position.",
    meaning:
      "The atom begins as a philosophical necessity rather than an observation. Nothing in it could be tested for the next twenty-two centuries — which is exactly why it stayed an opinion rather than becoming knowledge.",
    quote: {
      text: "By convention sweet, by convention bitter; in reality atoms and void.",
      by: "Democritus, fragment 9",
    },
    sources: [
      { label: "Atomism (SEP)", url: "https://plato.stanford.edu/entries/atomism-ancient/" },
    ],
    tags: ["atomism", "void"],
  },
  {
    id: "aristotle-continuum",
    title: "Four elements, no void",
    year: -350,
    displayYear: "c. 350 BCE",
    people: ["Aristotle"],
    place: "Athens",
    kind: "idea",
    track: "philosophy",
    summary:
      "The rival account that won, and held the field for roughly two thousand years.",
    question: "What is matter made of, and can empty space exist?",
    expected:
      "Atomists said particles and void; Aristotle wanted a physics where motion, change and quality were primary.",
    found:
      "Aristotle argued matter is continuous, built from earth, water, air and fire mixed in proportion, and that a true void is impossible — nature abhors it. Substances change by changing quality, not by rearranging particles.",
    meaning:
      "This is the graph's most useful reminder that being early is not the same as being right, and that the losing idea can be the better-argued one. Aristotle's framework was richer, more predictive about everyday motion, and wrong at the root.",
    sources: [
      { label: "Aristotle's Physics (SEP)", url: "https://plato.stanford.edu/entries/aristotle-natphil/" },
    ],
    tags: ["elements", "continuum"],
  },
  {
    id: "lucretius",
    title: "The poem that carried the idea",
    year: -55,
    displayYear: "c. 55 BCE",
    people: ["Lucretius"],
    place: "Rome",
    kind: "idea",
    track: "philosophy",
    summary:
      "De rerum natura preserves atomism in verse — and includes a startling observation about dust in a sunbeam.",
    question: "How do you keep an unpopular idea alive for a thousand years?",
    expected:
      "Atomism was associated with Epicurean philosophy and widely dismissed as godless; most of its texts were lost.",
    found:
      "Lucretius set the whole system down as a six-book poem. In Book II he points to motes dancing in a shaft of light and argues they are being knocked about by invisible bodies below the limit of sight.",
    meaning:
      "A single surviving manuscript, rediscovered in 1417, put atomism back in front of European readers. The dust-mote passage is also the first written hint of what would eventually become Brownian motion — an argument that turned into evidence only in 1908.",
    sources: [{ label: "De rerum natura", url: "https://en.wikipedia.org/wiki/De_rerum_natura" }],
    tags: ["transmission", "brownian"],
  },
  {
    id: "boyle",
    title: "Springiness of the air",
    year: 1662,
    people: ["Robert Boyle", "Robert Hooke"],
    place: "Oxford",
    kind: "experiment",
    track: "matter",
    summary:
      "A J-shaped tube of mercury shows pressure and volume trade off exactly — and that air can be compressed at all.",
    question: "Does trapped air behave like a spring, and by what rule?",
    expected:
      "On the Aristotelian view air is a continuous element and there is no void for it to be squeezed into.",
    found:
      "Pouring mercury into the long arm of a sealed J-tube, Boyle found the trapped air's volume fell in exact inverse proportion to the pressure on it. He also showed a bell in a evacuated jar goes silent while a feather still falls.",
    surprise:
      "Air could be squashed into a fraction of its volume and spring back perfectly. Something had to be giving way — which meant something in there was mostly empty.",
    meaning:
      "Boyle argued for 'corpuscles' as a working chemical hypothesis rather than a metaphysical one, and pointedly separated chemistry from alchemy. The law is also the first quantitative handle anyone had on the microscopic structure of a gas.",
    sources: [{ label: "Boyle's law", url: "https://en.wikipedia.org/wiki/Boyle%27s_law" }],
    tags: ["gas", "corpuscles"],
  },
  {
    id: "bernoulli",
    title: "Pressure as a hail of impacts",
    year: 1738,
    people: ["Daniel Bernoulli"],
    place: "Basel",
    kind: "theory",
    track: "matter",
    summary:
      "Hydrodynamica derives Boyle's law by assuming a gas is a swarm of tiny particles drumming on the walls.",
    question: "What if a gas is literally a crowd of moving particles?",
    expected:
      "Gas pressure was usually explained by mutually repelling static particles, an idea Newton had lent weight to.",
    found:
      "Bernoulli showed that if particles fly freely and bounce off the container, the pressure they collectively exert varies inversely with volume — Boyle's law falls out — and rises with the vigour of their motion, which he identified with heat.",
    meaning:
      "The correct kinetic theory, published a century before anyone would take it seriously. It sat nearly unread until Clausius and Maxwell rebuilt it in the 1850s — a reminder that a right answer arriving without a supporting network of evidence tends to be ignored.",
    sources: [{ label: "Kinetic theory of gases", url: "https://en.wikipedia.org/wiki/Kinetic_theory_of_gases" }],
    tags: ["kinetic-theory", "heat"],
  },
  {
    id: "lavoisier",
    title: "Weighing everything, including the air",
    year: 1774,
    people: ["Antoine Lavoisier", "Marie-Anne Paulze Lavoisier"],
    place: "Paris",
    kind: "experiment",
    track: "matter",
    summary:
      "Sealed vessels and a good balance kill phlogiston and establish conservation of mass.",
    question:
      "Why does a metal get *heavier* when it burns, if burning releases something?",
    expected:
      "Phlogiston theory said combustion released a substance, so burnt residue should weigh less.",
    found:
      "Working in sealed vessels and weighing the gas as well as the solid, Lavoisier showed the mass gained by the calx equals the mass lost by the air. Nothing was released; something was absorbed. He named it oxygen.",
    surprise:
      "The anomaly had been known for decades and explained away by giving phlogiston negative weight. Insisting the balance be obeyed exactly was the whole move.",
    meaning:
      "Chemistry becomes quantitative. Once mass is strictly conserved, reactions start to look like rearrangements of conserved things — and 'element' becomes an operational category: a substance you cannot break down further.",
    sources: [{ label: "Lavoisier", url: "https://en.wikipedia.org/wiki/Antoine_Lavoisier" }],
    tags: ["conservation", "oxygen"],
  },
  {
    id: "proust",
    title: "Definite proportions",
    year: 1797,
    displayYear: "1794–1804",
    people: ["Joseph Proust"],
    place: "Madrid",
    kind: "experiment",
    track: "matter",
    summary:
      "A compound always contains the same elements in the same fixed ratio by mass, no matter how it was made.",
    question:
      "Is the composition of a compound fixed, or can it vary continuously like an alloy?",
    expected:
      "Berthollet argued composition varied with the conditions of preparation — a natural view if matter is continuous.",
    found:
      "Proust showed that copper carbonate made in the lab and dug from the ground have identical ratios, and that where composition seems to vary you actually have two distinct compounds mixed.",
    meaning:
      "Fixed ratios are hard to explain with continuous matter and trivial to explain with counting. This is the first result that makes atoms an economical hypothesis instead of a philosophical one.",
    sources: [{ label: "Law of definite proportions", url: "https://en.wikipedia.org/wiki/Law_of_definite_proportions" }],
    tags: ["stoichiometry"],
  },
  {
    id: "dalton",
    title: "Small whole numbers",
    year: 1803,
    people: ["John Dalton"],
    place: "Manchester",
    kind: "synthesis",
    track: "matter",
    summary:
      "Multiple proportions: when two elements form more than one compound, the ratios are ratios of small integers.",
    question:
      "Why do the same two elements combine in several fixed ratios rather than any ratio?",
    expected:
      "Definite proportions were known but unexplained; nothing said the several ratios should be simply related.",
    found:
      "For a fixed mass of nitrogen, the oxygen in the various oxides stands in ratios of 1 : 2 : 4. Dalton concluded each element consists of identical particles with a characteristic weight, and compounds are fixed small clusters of them.",
    surprise:
      "Small integers turning up in messy wet chemistry. Integers are the fingerprint of counting discrete objects, and nothing continuous produces them for free.",
    meaning:
      "The atom stops being philosophy and starts being bookkeeping — Dalton published a table of relative atomic weights. It is now a theory with numbers attached, and therefore something that can be wrong in detectable ways.",
    quote: {
      text: "Thou knows it is the weights that matter.",
      by: "attributed to Dalton",
    },
    sources: [{ label: "Law of multiple proportions", url: "https://en.wikipedia.org/wiki/Law_of_multiple_proportions" }],
    tags: ["atomic-weights", "integers"],
  },
  {
    id: "avogadro",
    title: "Equal volumes, equal numbers",
    year: 1811,
    people: ["Amedeo Avogadro"],
    place: "Turin",
    kind: "theory",
    track: "matter",
    summary:
      "A hypothesis that fixes Dalton's broken weights — and is then ignored for half a century.",
    question:
      "Why do gases combine in simple whole-number *volume* ratios, and why does two volumes of hydrogen plus one of oxygen give two volumes of steam rather than one?",
    expected:
      "Dalton assumed elements were single atoms and that water was HO, which made his atomic weights inconsistent.",
    found:
      "Avogadro proposed that equal volumes of any gas at the same temperature and pressure hold equal numbers of particles, and that elemental gases can be diatomic molecules that split during reaction. Both puzzles dissolve at once.",
    meaning:
      "The idea was disregarded until Cannizzaro pressed it at the 1860 Karlsruhe Congress, after which atomic weights finally became consistent. Fifty years of chemical confusion traceable to one unaccepted hypothesis.",
    sources: [{ label: "Avogadro's law", url: "https://en.wikipedia.org/wiki/Avogadro%27s_law" }],
    tags: ["molecules", "karlsruhe"],
  },
  {
    id: "brown",
    title: "The jittering pollen",
    year: 1827,
    people: ["Robert Brown"],
    place: "London",
    kind: "observation",
    track: "matter",
    summary:
      "Grains suspended in water jiggle endlessly under the microscope, and no one can say why for eighty years.",
    question:
      "Is the twitching of particles from pollen grains a sign that they are alive?",
    expected:
      "Brown initially suspected he was seeing the vital motion of living matter.",
    found:
      "He repeated the observation with soot, powdered glass, and a fragment of the Sphinx — anything finely ground jittered the same way. Nothing biological was involved.",
    surprise:
      "A perpetual motion nobody could switch off. It did not fade, it did not depend on light or vibration, and it had no visible cause.",
    meaning:
      "A first-rate anomaly that sat unexplained for a lifetime. Its resolution in 1905–08 would be the thing that finally convinced the holdouts that molecules are real objects rather than an accounting convenience.",
    sources: [{ label: "Brownian motion", url: "https://en.wikipedia.org/wiki/Brownian_motion" }],
    tags: ["anomaly", "molecules"],
  },
  {
    id: "faraday-electrolysis",
    title: "Electricity comes in portions",
    year: 1834,
    people: ["Michael Faraday"],
    place: "London",
    kind: "experiment",
    track: "rays",
    summary:
      "The mass deposited in electrolysis is strictly proportional to the charge passed — and per atom, the charge is always a multiple of one amount.",
    question: "How much electricity does it take to deposit a given amount of a metal?",
    expected:
      "Electricity was widely treated as a continuous fluid, so no particular quantity should be special.",
    found:
      "Faraday found deposition follows exact proportionality, and that chemically equivalent amounts of different elements always require the same quantity of charge — or a small integer multiple of it.",
    surprise:
      "Small integers again, now in electricity. The same signature that had exposed atoms of matter was showing up in the fluid supposedly flowing through them.",
    meaning:
      "Implies a natural unit of charge attached to each atom. Stoney named that unit the 'electron' in 1891, decades before anyone caught one.",
    sources: [{ label: "Faraday's laws of electrolysis", url: "https://en.wikipedia.org/wiki/Faraday%27s_laws_of_electrolysis" }],
    tags: ["charge", "integers"],
  },
  {
    id: "spectroscopy",
    title: "Every element has a barcode",
    year: 1859,
    people: ["Gustav Kirchhoff", "Robert Bunsen"],
    place: "Heidelberg",
    kind: "instrument",
    track: "rays",
    summary:
      "Heated elements emit light at a fixed set of sharp wavelengths, unique to each element.",
    question: "Why do different salts colour a flame differently?",
    expected:
      "Flame colours were a known analytical trick, but were assumed to be a smeared property of the substance.",
    found:
      "Through a prism, each element's light resolves into a set of razor-sharp lines at reproducible wavelengths, identical whether the sample is in a Heidelberg lab or the atmosphere of the Sun. Kirchhoff matched dark solar lines to laboratory bright lines.",
    surprise:
      "Atoms do not glow across a smooth range. They glow at a handful of exact frequencies and nowhere in between — a fact with no mechanical explanation whatsoever for the next fifty-four years.",
    meaning:
      "Spectroscopy becomes the single most productive instrument in the story: it discovers helium in the Sun before it is found on Earth, and it supplies the precise numbers that Bohr's atom will eventually have to reproduce.",
    sources: [{ label: "Spectroscopy", url: "https://en.wikipedia.org/wiki/History_of_spectroscopy" }],
    tags: ["spectral-lines", "instrument"],
  },
  {
    id: "mendeleev",
    title: "Gaps in the table",
    year: 1869,
    people: ["Dmitri Mendeleev"],
    place: "Saint Petersburg",
    kind: "synthesis",
    track: "matter",
    summary:
      "Arranging elements by weight makes properties repeat — and the pattern is trusted enough to leave holes.",
    question: "Is there an order behind the sixty-odd known elements?",
    expected:
      "Several people had noticed partial regularities; most treated exceptions as fatal.",
    found:
      "Mendeleev laid the elements out by increasing atomic weight in rows that put chemically similar elements in columns. To keep the columns clean he left blank cells for undiscovered elements — and predicted the weight, density and chemistry of each.",
    surprise:
      "Gallium (1875), scandium (1879) and germanium (1886) turned up matching his predictions closely. He also had to swap a few pairs out of weight order to preserve chemistry, an unexplained cheat.",
    meaning:
      "Periodicity is loud evidence that atoms have internal structure — something inside them must be repeating. The cheat is a clue too: the true ordering principle turned out to be nuclear charge, which Moseley pinned down in 1913.",
    sources: [{ label: "Periodic table history", url: "https://en.wikipedia.org/wiki/History_of_the_periodic_table" }],
    tags: ["periodicity", "prediction"],
  },
  {
    id: "balmer",
    title: "A schoolteacher's formula",
    year: 1885,
    people: ["Johann Balmer"],
    place: "Basel",
    kind: "synthesis",
    track: "rays",
    summary:
      "Hydrogen's four visible lines fit one small equation built from whole numbers.",
    question: "Is there any arithmetic behind the positions of hydrogen's spectral lines?",
    expected:
      "The line positions looked arbitrary; most physicists expected them to depend on complicated internal vibrations.",
    found:
      "Balmer, a sixty-year-old mathematics teacher, found the four visible wavelengths are given by 364.5 nm × n²/(n²−4) for n = 3, 4, 5, 6 — accurate to a part in a thousand. Rydberg generalised it in 1888 to cover other series and elements.",
    surprise:
      "Whole numbers, a third time. An exact numerical law with absolutely no physical mechanism behind it.",
    meaning:
      "A precise, unexplained target sitting in the literature for twenty-eight years. When Bohr derived it from quantised orbits in 1913 the agreement was the thing that forced people to take his impossible atom seriously.",
    sources: [{ label: "Balmer series", url: "https://en.wikipedia.org/wiki/Balmer_series" }],
    tags: ["spectral-lines", "integers"],
  },
  {
    id: "crookes-tube",
    title: "Rays in an emptied tube",
    year: 1876,
    people: ["William Crookes", "Johann Hittorf", "Heinrich Geissler"],
    place: "London",
    kind: "instrument",
    track: "rays",
    summary:
      "Better vacuum pumps make a glowing beam appear inside sealed glass — nobody knows what it is.",
    question: "What happens if you push current through a nearly empty tube?",
    expected:
      "Gas discharge was a curiosity; the glow was assumed to be a property of the residual gas.",
    found:
      "A beam travels in straight lines from the cathode, casts sharp shadows, turns a paddle wheel, and bends in a magnetic field. German physicists thought it was a wave in the aether; British ones thought it was particles.",
    meaning:
      "The instrument matters more than any single result. Mercury pumps good enough to make cathode rays visible are the direct cause of X-rays, the electron, and radioactivity — three discoveries inside three years, all downstream of a vacuum improvement.",
    sources: [{ label: "Crookes tube", url: "https://en.wikipedia.org/wiki/Crookes_tube" }],
    tags: ["instrument", "vacuum"],
  },
  {
    id: "roentgen",
    title: "A glow across the room",
    year: 1895,
    people: ["Wilhelm Röntgen"],
    place: "Würzburg",
    kind: "experiment",
    track: "rays",
    summary:
      "A screen fluoresces metres away from a covered cathode-ray tube. Something is passing through the cardboard.",
    question:
      "Röntgen was checking whether cathode rays could escape the glass wall of the tube.",
    expected:
      "Cathode rays are absorbed within a few centimetres of air, so a shrouded tube should do nothing at a distance.",
    found:
      "With the tube wrapped in black card in a dark room, a barium platinocyanide screen a metre away glowed. The rays passed through wood, aluminium and flesh, but not bone or lead. Within weeks he had photographed his wife's hand.",
    surprise:
      "Complete. Röntgen worked alone in secret for seven weeks because he half-suspected he was deceiving himself, and called them X-rays because he had no idea what they were.",
    meaning:
      "An accidental byproduct of an unrelated investigation becomes a medical technology within months and, in Moseley's hands, the tool that puts the periodic table on a physical footing. First Nobel Prize in Physics, 1901.",
    sources: [{ label: "X-ray discovery", url: "https://en.wikipedia.org/wiki/X-ray" }],
    tags: ["accident", "x-rays"],
  },
  {
    id: "becquerel",
    title: "The cloudy week in Paris",
    year: 1896,
    people: ["Henri Becquerel"],
    place: "Paris",
    kind: "experiment",
    track: "rays",
    summary:
      "Uranium salts fog a photographic plate that was never exposed to sunlight.",
    question:
      "Do phosphorescent substances, charged up by sunlight, emit X-rays as they glow?",
    expected:
      "Becquerel expected no sunlight, no phosphorescence, therefore no rays — a clean negative control.",
    found:
      "Paris clouded over. He put wrapped plates and uranium salts in a drawer for several days and developed them anyway, expecting faint outlines. The images were intense. The uranium was emitting continuously, needing nothing from outside.",
    surprise:
      "This is the story's cleanest case of a failed experiment being more informative than a successful one. The control condition produced the discovery.",
    meaning:
      "Energy pouring out of matter indefinitely with no visible source violated conservation as understood at the time. Something inside the atom had a reservoir — and atoms were supposed to have no inside.",
    sources: [{ label: "Discovery of radioactivity", url: "https://en.wikipedia.org/wiki/Discovery_of_radioactivity" }],
    tags: ["accident", "radioactivity"],
  },
  {
    id: "thomson-electron",
    title: "Lighter than the lightest atom",
    year: 1897,
    people: ["J. J. Thomson"],
    place: "Cavendish Laboratory, Cambridge",
    kind: "experiment",
    track: "rays",
    summary:
      "Cathode rays deflect in electric and magnetic fields, giving a charge-to-mass ratio about 1800× too large.",
    question: "Are cathode rays waves in the aether, or particles — and if particles, what?",
    expected:
      "If they were charged atoms, the charge-to-mass ratio should be comparable to that of a hydrogen ion.",
    found:
      "By balancing electric and magnetic deflection Thomson measured e/m and got a value roughly 1800 times larger than hydrogen's. Crucially, the value was identical no matter which gas filled the tube or which metal formed the cathode.",
    surprise:
      "A particle far smaller than an atom, and the *same* particle from every element. The indivisible had a component, and it was universal.",
    meaning:
      "The first subatomic particle. It immediately forces a structural question: atoms are neutral, so whatever else is in there must carry a compensating positive charge — and Thomson's own 1904 'plum pudding' answer would last exactly seven years.",
    quote: {
      text: "Could anything at first sight seem more impractical than a body which is so small that its mass is an insignificant fraction of the mass of an atom?",
      by: "J. J. Thomson",
    },
    sources: [{ label: "Discovery of the electron", url: "https://en.wikipedia.org/wiki/Electron#Discovery" }],
    tags: ["electron", "subatomic"],
  },
  {
    id: "curies",
    title: "Radioactivity is a property of the atom",
    year: 1898,
    people: ["Marie Curie", "Pierre Curie"],
    place: "Paris",
    kind: "experiment",
    track: "rays",
    summary:
      "Pitchblende is far more active than its uranium content allows, so Curie chases the excess through tonnes of ore.",
    question:
      "Marie Curie used an electrometer to measure activity quantitatively — does it depend on chemical form?",
    expected:
      "If radioactivity were a chemical or molecular effect, compounds should differ from the pure element.",
    found:
      "Activity depended only on the amount of uranium present, in any compound. That made it an *atomic* property. But pitchblende was several times more active than its uranium could explain — so something more active was hiding in it. Processing tonnes of ore yielded polonium and radium.",
    surprise:
      "The discrepancy was small enough to dismiss as measurement error. Taking it seriously was the discovery.",
    meaning:
      "Establishes radioactivity as something atoms *do*, not something substances have, and hands Rutherford an intense alpha source. Radium's steady heat output also becomes the central puzzle in the energy-conservation problem.",
    sources: [{ label: "Marie Curie", url: "https://en.wikipedia.org/wiki/Marie_Curie" }],
    tags: ["radium", "polonium"],
  },
  {
    id: "alpha-beta-gamma",
    title: "Sorting the radiation",
    year: 1899,
    displayYear: "1899–1903",
    people: ["Ernest Rutherford", "Paul Villard"],
    place: "Montreal",
    kind: "experiment",
    track: "rays",
    summary:
      "The emissions split into three kinds by penetrating power, and alpha turns out to be a helium nucleus.",
    question: "Is 'radioactivity' one thing?",
    expected: "It was initially treated as a single Becquerel-ray phenomenon.",
    found:
      "Rutherford separated alpha (stopped by paper, positive, heavy) from beta (stopped by aluminium, negative, electrons); Villard found gamma (barely stopped by lead, uncharged). In 1908 Rutherford trapped alphas in an evacuated tube and spectroscopically identified the gas as helium.",
    meaning:
      "Radioactivity becomes an experimental toolkit rather than a mystery. A naturally occurring beam of fast, massive, charged particles is exactly what you need to probe the inside of an atom — and nothing else could produce one until the 1930s.",
    sources: [{ label: "Alpha particle", url: "https://en.wikipedia.org/wiki/Alpha_particle" }],
    tags: ["alpha", "toolkit"],
  },
];
