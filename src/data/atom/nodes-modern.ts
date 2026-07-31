import type { MomentNode } from "../types";

/** 1900 to the present: the atom acquires an inside, then loses its bottom. */
export const modernNodes: MomentNode[] = [
  {
    id: "planck",
    title: "An act of desperation",
    year: 1900,
    people: ["Max Planck"],
    place: "Berlin",
    kind: "theory",
    track: "quantum",
    summary:
      "To fit the glow of a hot cavity, Planck has to assume energy is exchanged in indivisible packets.",
    question:
      "What is the spectrum of light inside a heated cavity — a problem set by German lamp-filament industry standards work?",
    expected:
      "Classical thermodynamics gave a formula that worked at long wavelengths and diverged to infinite energy at short ones.",
    found:
      "Planck first guessed an interpolating formula that fit the data perfectly, then spent two months deriving it. The derivation only worked if energy came in units of hf, with h a new constant of nature. He regarded this as a mathematical trick to be removed later.",
    surprise:
      "The trick refused to be removed. Planck spent years trying to recover a continuous derivation and failed.",
    meaning:
      "Called it 'an act of desperation' — the phrase is honest. A discreteness introduced for bookkeeping turns out to be a fact about the world, and h becomes the constant that sets the scale of everything atomic.",
    quote: {
      text: "It was an act of desperation. A theoretical interpretation had to be found at any price, however high that might be.",
      by: "Max Planck",
    },
    sources: [{ label: "Planck's law", url: "https://en.wikipedia.org/wiki/Planck%27s_law" }],
    tags: ["quantum", "h"],
  },
  {
    id: "transmutation",
    title: "Atoms turn into other atoms",
    year: 1902,
    people: ["Ernest Rutherford", "Frederick Soddy"],
    place: "Montreal",
    kind: "theory",
    track: "nucleus",
    summary:
      "Radioactive decay is one element spontaneously becoming another, on a statistical schedule.",
    question:
      "Why does thorium's 'emanation' lose activity on a fixed exponential schedule?",
    expected:
      "Elements were, by definition, immutable. Transmutation was the discredited ambition of alchemy.",
    found:
      "Rutherford and Soddy showed the activity halves in a characteristic time for each species, and that the parent is chemically converting into a chemically distinct daughter. Soddy reportedly blurted 'Rutherford, this is transmutation!' — Rutherford snapped back not to call it that.",
    surprise:
      "Also: individual decays are unpredictable while the aggregate is exactly regular. Physics had no precedent for a law that is statistical all the way down.",
    meaning:
      "The element is no longer the bottom of chemistry. Combined with the energy released, this makes the atom's interior an energetic, changeable place — and the isotope concept (Soddy, 1913) follows from explaining why chemically identical species can have different weights and half-lives.",
    quote: {
      text: "For Mike's sake, Soddy, don't call it transmutation. They'll have our heads off as alchemists.",
      by: "Ernest Rutherford",
    },
    sources: [{ label: "Radioactive decay", url: "https://en.wikipedia.org/wiki/Radioactive_decay" }],
    tags: ["transmutation", "half-life"],
  },
  {
    id: "einstein-brownian",
    title: "Making the jitter quantitative",
    year: 1905,
    people: ["Albert Einstein", "Marian Smoluchowski"],
    place: "Bern",
    kind: "theory",
    track: "matter",
    summary:
      "If molecules are real, a suspended grain must wander a specific, calculable distance in a given time.",
    question:
      "Can the existence of molecules be made to imply something measurable under a microscope?",
    expected:
      "Ostwald, Mach and the energeticists held that atoms were a useful fiction with no observational consequences.",
    found:
      "Einstein derived that the mean squared displacement of a suspended particle grows linearly with time, with a coefficient fixed by temperature, viscosity, particle size and Avogadro's number. Notably, he was not trying to explain Brown's observation — he predicted the effect from statistical mechanics and only then connected it.",
    meaning:
      "Turns an eighty-year-old curiosity into a measuring instrument. The theory made a number checkable, which is what a 'useful fiction' can never survive.",
    sources: [{ label: "Einstein's 1905 papers", url: "https://en.wikipedia.org/wiki/Annus_Mirabilis_papers" }],
    tags: ["statistical-mechanics", "brownian"],
  },
  {
    id: "einstein-photoelectric",
    title: "Light in lumps",
    year: 1905,
    people: ["Albert Einstein"],
    place: "Bern",
    kind: "theory",
    track: "quantum",
    summary:
      "The photoelectric effect makes sense only if light itself arrives as quanta, not merely if it is emitted that way.",
    question:
      "Why does the energy of ejected electrons depend on the light's *colour* and not its brightness?",
    expected:
      "In wave optics, a dim beam should eject slow electrons after a delay while a bright one ejects fast electrons immediately. Neither is observed.",
    found:
      "Einstein proposed that light is composed of quanta of energy hf. Then brightness sets *how many* electrons come out and frequency sets *how fast*, with a sharp threshold below which nothing happens at all — exactly what Lenard had seen.",
    surprise:
      "This went further than Planck was willing to go. Planck had quantised the exchange of energy; Einstein quantised light itself, reviving a corpuscular theory a century after Young's interference had apparently buried it.",
    meaning:
      "The wave–particle problem is now unavoidable and central. This is the work cited in Einstein's 1921 Nobel — not relativity — and Millikan spent a decade trying to disprove it before confirming it precisely in 1916.",
    sources: [{ label: "Photoelectric effect", url: "https://en.wikipedia.org/wiki/Photoelectric_effect" }],
    tags: ["photon", "wave-particle"],
  },
  {
    id: "perrin",
    title: "Counting molecules",
    year: 1908,
    people: ["Jean Perrin"],
    place: "Paris",
    kind: "experiment",
    track: "matter",
    summary:
      "Painstaking measurement of suspended gamboge grains yields Avogadro's number — and it agrees with values from utterly unrelated methods.",
    question: "Does Einstein's predicted displacement law actually hold, and what number does it give?",
    expected:
      "A serious possibility that the numbers would not agree, which would have left atoms as an unverified convention.",
    found:
      "Perrin prepared uniform grains, tracked their positions at fixed intervals, and extracted N ≈ 6.5–7 × 10²³. The same constant obtained from radioactivity, blackbody radiation, and the blue of the sky agreed to within a few percent.",
    surprise:
      "The convergence was the argument. Ostwald publicly abandoned his opposition to atomism in 1909; Mach never did.",
    meaning:
      "The point at which atoms stop being a hypothesis. Multiple independent routes to the same number is the strongest kind of evidence physics has, and it arrived — fittingly — three centuries after Democritus and one year before the atom was found to be mostly empty.",
    sources: [{ label: "Jean Perrin", url: "https://en.wikipedia.org/wiki/Jean_Baptiste_Perrin" }],
    tags: ["avogadro", "consilience"],
  },
  {
    id: "millikan",
    title: "The oil drop",
    year: 1909,
    displayYear: "1909–13",
    people: ["Robert Millikan", "Harvey Fletcher"],
    place: "Chicago",
    kind: "experiment",
    track: "rays",
    summary:
      "Charges on tiny suspended oil droplets are always integer multiples of one elementary amount.",
    question: "Is charge genuinely quantised, and what is the electron's charge?",
    expected:
      "Some argued the apparent unit of charge was only a statistical average over a continuous distribution.",
    found:
      "Balancing gravity against an electric field on individual droplets, Millikan found every droplet carried a charge that was an exact small multiple of e ≈ 1.6 × 10⁻¹⁹ C. Combined with Thomson's e/m, the electron's mass follows.",
    meaning:
      "Closes the loop opened by Faraday in 1834. The electron now has both a mass and a charge, which is what any model of the atom will have to build with. (Millikan's notebooks show he excluded some runs, and his stated uncertainty was optimistic — an early case study in how selection creeps into careful work.)",
    sources: [{ label: "Oil drop experiment", url: "https://en.wikipedia.org/wiki/Oil_drop_experiment" }],
    tags: ["charge", "quantisation"],
  },
  {
    id: "geiger-marsden",
    title: "The shell that came back",
    year: 1909,
    displayYear: "1909–11",
    people: ["Hans Geiger", "Ernest Marsden", "Ernest Rutherford"],
    place: "Manchester",
    kind: "experiment",
    track: "nucleus",
    summary:
      "Alpha particles fired at gold foil mostly pass straight through — but roughly one in eight thousand bounces back.",
    question:
      "Rutherford set Marsden, an undergraduate, a busywork task: check whether *any* alphas scatter at large angles.",
    expected:
      "On Thomson's plum-pudding model, positive charge is smeared through the whole atom, so the deflecting fields are feeble. Calculated maximum deflection: a fraction of a degree. Backscattering should be flatly impossible.",
    found:
      "Some alphas came back toward the source. Rutherford spent eighteen months on the geometry before concluding in 1911 that the atom's positive charge and nearly all its mass sit in a core smaller than the atom by a factor of about 10⁵ — leaving the atom essentially empty.",
    surprise:
      "The canonical surprise of the whole subject. The result was not a refinement of expectation; it was off by orders of magnitude in a direction thought physically unavailable.",
    meaning:
      "The nucleus exists, and matter is overwhelmingly vacancy. It also creates an immediate crisis: an electron orbiting a nucleus is an accelerating charge, so classical electrodynamics says it must radiate and spiral in within about 10⁻¹¹ seconds. Rutherford's atom cannot exist. Something has to give, and what gives is classical physics.",
    quote: {
      text: "It was as if you had fired a 15-inch shell at a piece of tissue paper and it came back and hit you.",
      by: "Ernest Rutherford",
    },
    sources: [{ label: "Geiger–Marsden experiments", url: "https://en.wikipedia.org/wiki/Geiger%E2%80%93Marsden_experiments" }],
    tags: ["nucleus", "surprise", "scattering"],
  },
  {
    id: "bohr",
    title: "Orbits that are simply not allowed",
    year: 1913,
    people: ["Niels Bohr"],
    place: "Manchester / Copenhagen",
    kind: "theory",
    track: "quantum",
    summary:
      "Bohr forbids the electron from radiating except when jumping between a discrete set of orbits — and Balmer's formula falls out exactly.",
    question:
      "Why doesn't Rutherford's atom collapse, and why does hydrogen emit only certain wavelengths?",
    expected:
      "Classical electrodynamics demands continuous radiation and rapid collapse. Both are flatly contradicted by the existence of stable matter.",
    found:
      "Bohr postulated — without justification — that angular momentum comes in units of ħ, that electrons in those orbits do not radiate, and that light is emitted only in transitions between them, with hf equal to the energy difference. The resulting line formula reproduced Balmer's, and the Rydberg constant came out in terms of e, m and h to within a fraction of a percent.",
    surprise:
      "A theory assembled from assumptions its author admitted were unjustifiable predicted a thirty-year-old empirical formula to four significant figures.",
    meaning:
      "The clearest example in the graph of theory requiring prior results: Bohr's atom is unbuildable without Rutherford's nucleus (1911), Planck's constant (1900), Thomson's electron (1897) and Balmer's numbers (1885). It is also transparently provisional — it cannot do helium — and its failures set the agenda for the next twelve years.",
    sources: [{ label: "Bohr model", url: "https://en.wikipedia.org/wiki/Bohr_model" }],
    tags: ["quantisation", "spectra"],
  },
  {
    id: "moseley",
    title: "The number that actually orders the elements",
    year: 1913,
    people: ["Henry Moseley"],
    place: "Manchester / Oxford",
    kind: "experiment",
    track: "nucleus",
    summary:
      "X-ray line frequencies scale with the square of an integer that increases by exactly one from element to element.",
    question:
      "Is there a physical quantity behind an element's position in the periodic table?",
    expected:
      "Ordering was by atomic weight, with several embarrassing inversions Mendeleev had made by hand.",
    found:
      "Bombarding elements in sequence, Moseley found √f is linear in an integer Z. Z is the nuclear charge — the count of protons. The inversions vanish, the number of elements between hydrogen and uranium is fixed at 92, and exactly four gaps remain to be filled.",
    surprise:
      "The periodic table had been sorted by the wrong variable for forty-four years, and got almost everything right anyway.",
    meaning:
      "Chemistry gets an integer foundation, and the table becomes a statement about nuclei rather than about weights. Moseley was killed at Gallipoli in 1915, aged 27; the British government subsequently stopped assigning scientists to combat.",
    sources: [{ label: "Moseley's law", url: "https://en.wikipedia.org/wiki/Moseley%27s_law" }],
    tags: ["atomic-number", "x-rays"],
  },
  {
    id: "franck-hertz",
    title: "Electrons that refuse to give up energy",
    year: 1914,
    people: ["James Franck", "Gustav Hertz"],
    place: "Berlin",
    kind: "experiment",
    track: "quantum",
    summary:
      "Electrons passing through mercury vapour lose energy only in fixed 4.9 eV chunks.",
    question:
      "How do electrons transfer energy to atoms in a collision?",
    expected:
      "Classically, a collision can transfer any fraction of the incoming energy, so current should vary smoothly with accelerating voltage.",
    found:
      "The current showed sharp periodic dips at 4.9 V intervals. Below that energy, collisions were perfectly elastic — the atom simply would not accept the energy. At 4.9 eV it accepted exactly that much and the vapour emitted 254 nm light, matching hf = 4.9 eV.",
    meaning:
      "Direct, non-spectroscopic confirmation of discrete energy levels. Spectra could conceivably have been an artefact of how light is emitted; this shows the *levels themselves* are real, independently of light. Franck and Hertz initially interpreted 4.9 V as an ionisation energy and had to be corrected by Bohr.",
    sources: [{ label: "Franck–Hertz experiment", url: "https://en.wikipedia.org/wiki/Franck%E2%80%93Hertz_experiment" }],
    tags: ["energy-levels", "confirmation"],
  },
  {
    id: "rutherford-proton",
    title: "Knocking hydrogen out of nitrogen",
    year: 1919,
    people: ["Ernest Rutherford"],
    place: "Manchester",
    kind: "experiment",
    track: "nucleus",
    summary:
      "Alpha particles fired into nitrogen produce hydrogen nuclei — the first artificial transmutation.",
    question:
      "Rutherford was chasing an anomaly: alphas in air produced long-range scintillations that dry nitrogen also produced.",
    expected:
      "The stray signal was assumed to come from hydrogen contamination in the gas.",
    found:
      "After eliminating contamination, the effect persisted in pure nitrogen. Alphas were breaking nitrogen nuclei and ejecting hydrogen nuclei. Rutherford named the ejected particle the proton and identified it as a universal nuclear constituent.",
    meaning:
      "Nuclei are composite and can be deliberately altered. But a problem is now glaring: helium's charge is 2 and its mass is 4, so the nucleus cannot be protons alone. The favoured patch — protons plus trapped electrons — would survive until 1932 and be wrong.",
    sources: [{ label: "Proton", url: "https://en.wikipedia.org/wiki/Proton#Discovery" }],
    tags: ["proton", "transmutation"],
  },
  {
    id: "stern-gerlach",
    title: "Two spots, not a smear",
    year: 1922,
    people: ["Otto Stern", "Walther Gerlach"],
    place: "Frankfurt",
    kind: "experiment",
    track: "quantum",
    summary:
      "A beam of silver atoms through an inhomogeneous magnetic field splits into exactly two, not a continuous band.",
    question: "Are the orientations of atomic magnetic moments quantised, or continuous?",
    expected:
      "Classically a random distribution of orientations gives a smeared-out band. Stern designed the experiment expecting to refute space quantisation.",
    found:
      "Two sharp spots. (The developing image only became visible because Gerlach's cheap cigars made the plate sulphurous enough to darken — Stern's salary would not stretch to better ones.) The splitting was also into two rather than the odd number Bohr–Sommerfeld theory allowed.",
    surprise:
      "Doubly surprising: quantisation was real, *and* the number of states was wrong for orbital angular momentum. The resolution — electron spin — arrived three years later from Uhlenbeck and Goudsmit.",
    meaning:
      "Quantisation is a property of matter itself, visible in a beam of atoms with no light involved. The experiment also became the standard laboratory for thinking about measurement in quantum mechanics.",
    sources: [{ label: "Stern–Gerlach experiment", url: "https://en.wikipedia.org/wiki/Stern%E2%80%93Gerlach_experiment" }],
    tags: ["spin", "quantisation"],
  },
  {
    id: "compton",
    title: "X-rays that recoil",
    year: 1923,
    people: ["Arthur Compton"],
    place: "St. Louis",
    kind: "experiment",
    track: "quantum",
    summary:
      "X-rays scattered off electrons come back with longer wavelength, shifted by exactly the amount a billiard-ball collision predicts.",
    question: "What happens to X-ray wavelength on scattering from matter?",
    expected:
      "A classical wave shakes an electron and is re-radiated at the same frequency. Wavelength should not change.",
    found:
      "The scattered wavelength increased with scattering angle, matching the formula for an elastic collision between the electron and a particle carrying momentum h/λ.",
    meaning:
      "The photoelectric effect showed light delivers energy in quanta; this shows quanta carry *momentum* and collide like objects. After Compton, resisting the photon became untenable — and the puzzle sharpens, since these same objects diffract.",
    sources: [{ label: "Compton scattering", url: "https://en.wikipedia.org/wiki/Compton_scattering" }],
    tags: ["photon", "momentum"],
  },
  {
    id: "de-broglie",
    title: "If waves are particles, are particles waves?",
    year: 1924,
    people: ["Louis de Broglie"],
    place: "Paris",
    kind: "theory",
    track: "quantum",
    summary:
      "A doctoral thesis proposes that every particle has a wavelength h/p — including electrons.",
    question:
      "Light was a wave and turned out to also be a particle. Why should the symmetry not run the other way?",
    expected:
      "Nothing in physics suggested matter had a wavelength; the proposal was speculative enough that de Broglie's examiners were unsure whether to pass it.",
    found:
      "Assigning λ = h/p to an electron makes Bohr's arbitrary quantisation rule intelligible: allowed orbits are exactly those whose circumference fits a whole number of electron wavelengths. Einstein, asked to review the thesis, endorsed it.",
    meaning:
      "Converts Bohr's unexplained postulate into a standing-wave condition, and hands Schrödinger the starting point for wave mechanics. Confirmed experimentally three years later — by accident.",
    sources: [{ label: "Matter waves", url: "https://en.wikipedia.org/wiki/Matter_wave" }],
    tags: ["wave-particle", "hypothesis"],
  },
  {
    id: "pauli-exclusion",
    title: "No two alike",
    year: 1925,
    people: ["Wolfgang Pauli"],
    place: "Hamburg",
    kind: "theory",
    track: "quantum",
    summary:
      "No two electrons share the same set of quantum numbers — which is why the periodic table has the shape it does.",
    question:
      "Why don't all the electrons in an atom simply fall into the lowest orbit?",
    expected:
      "Nothing forbade it. Shell filling numbers 2, 8, 18, 32 were empirical and unexplained.",
    found:
      "Pauli found that requiring every electron to occupy a distinct state, with a fourth two-valued quantum number added, generates exactly those shell capacities. Uhlenbeck and Goudsmit identified the fourth number as spin later that year.",
    meaning:
      "Chemistry becomes a corollary of quantum mechanics. Exclusion is also what makes matter take up space — it is the reason your hand does not pass through the table, and later the reason white dwarfs and neutron stars resist collapse.",
    sources: [{ label: "Pauli exclusion principle", url: "https://en.wikipedia.org/wiki/Pauli_exclusion_principle" }],
    tags: ["exclusion", "periodic-table"],
  },
  {
    id: "matrix-mechanics",
    title: "Only what you can measure",
    year: 1925,
    people: ["Werner Heisenberg", "Max Born", "Pascual Jordan"],
    place: "Helgoland / Göttingen",
    kind: "theory",
    track: "quantum",
    summary:
      "Heisenberg drops orbits entirely and builds a mechanics out of observable transition intensities — which turn out to be matrices that don't commute.",
    question:
      "How do you do atomic physics without picturing an electron's path, given that nobody can observe one?",
    expected:
      "Everyone was trying to patch Bohr's orbits. The Bohr–Sommerfeld programme had stalled badly on helium.",
    found:
      "Recovering from hay fever on Helgoland, Heisenberg wrote a scheme using only measurable quantities. Born recognised the arrays as matrices; the resulting algebra had xp ≠ px. That non-commutation, initially alarming, is the mathematical seed of the uncertainty principle.",
    meaning:
      "The first complete quantum mechanics, and a methodological turn: build theories from observables, not from pictures. The picture-free austerity is exactly what made it unpopular — until Schrödinger offered an alternative that looked friendlier and proved equivalent.",
    sources: [{ label: "Matrix mechanics", url: "https://en.wikipedia.org/wiki/Matrix_mechanics" }],
    tags: ["quantum-mechanics", "observables"],
  },
  {
    id: "schrodinger",
    title: "A wave equation for matter",
    year: 1926,
    people: ["Erwin Schrödinger", "Max Born"],
    place: "Zurich",
    kind: "theory",
    track: "quantum",
    summary:
      "Schrödinger turns de Broglie's waves into a differential equation whose allowed solutions are the energy levels — and Born says the wave is a probability.",
    question: "If electrons are waves, what equation do they obey?",
    expected:
      "Schrödinger hoped for a return to continuous classical intuition, with quantisation emerging naturally as the modes of a vibrating system rather than as a postulate.",
    found:
      "Solving his equation for hydrogen gave Bohr's energy levels as eigenvalues — quantisation arises the way the notes of a violin string do, from boundary conditions. Then Born interpreted |ψ|² as a probability density, and Schrödinger hated it for the rest of his life.",
    surprise:
      "Schrödinger got the classical-looking mathematics he wanted and, with it, the least classical physics imaginable. He later remarked that if all this damned quantum jumping was here to stay, he was sorry he'd ever had anything to do with it.",
    meaning:
      "The equation still used today for essentially everything in chemistry and condensed matter. Schrödinger proved it equivalent to matrix mechanics the same year — two utterly dissimilar formalisms describing one structure.",
    sources: [{ label: "Schrödinger equation", url: "https://en.wikipedia.org/wiki/Schr%C3%B6dinger_equation" }],
    tags: ["wave-mechanics", "born-rule"],
  },
  {
    id: "davisson-germer",
    title: "The tube that exploded",
    year: 1927,
    people: ["Clinton Davisson", "Lester Germer", "George Paget Thomson"],
    place: "Bell Labs, New York",
    kind: "experiment",
    track: "quantum",
    summary:
      "A laboratory accident recrystallises a nickel target, and electrons start diffracting like light.",
    question:
      "Davisson and Germer were studying electron scattering off nickel for Bell's vacuum-tube work — nothing to do with de Broglie.",
    expected:
      "Scattering off a polycrystalline surface gives a smooth angular distribution.",
    found:
      "A liquid-air bottle broke and air oxidised the target. Baking it clean converted the many small crystals into a few large ones. When the experiment resumed, sharp peaks appeared at specific angles — a diffraction pattern, with spacing matching λ = h/p to a few percent. G. P. Thomson independently saw the same in transmission through thin films.",
    surprise:
      "Electrons — the very particles whose particle-ness Davisson's supervisor J. J. Thomson had established thirty years earlier — behaved as waves. Father and son won Nobels for opposite conclusions about the same object, and both were right.",
    meaning:
      "Wave–particle duality confirmed for matter. It also founds electron diffraction and, in time, electron microscopy: the wavelength of a fast electron is far shorter than visible light, which is what eventually lets us image atoms directly.",
    sources: [{ label: "Davisson–Germer experiment", url: "https://en.wikipedia.org/wiki/Davisson%E2%80%93Germer_experiment" }],
    tags: ["accident", "diffraction", "wave-particle"],
  },
  {
    id: "uncertainty",
    title: "A limit, not a clumsiness",
    year: 1927,
    people: ["Werner Heisenberg", "Niels Bohr"],
    place: "Copenhagen",
    kind: "theory",
    track: "quantum",
    summary:
      "Position and momentum cannot both be sharp: Δx Δp ≥ ħ/2, as a property of the world rather than of our apparatus.",
    question: "What does the non-commutation in matrix mechanics physically mean?",
    expected:
      "The natural reading was that measurement disturbs the system — a practical limitation that better instruments might narrow.",
    found:
      "The bound follows from the formalism itself, independent of any apparatus. A particle does not possess a sharp position and a sharp momentum simultaneously for a measurement to reveal.",
    meaning:
      "Closes off the classical picture for good and sets up the Bohr–Einstein debates. Einstein's objections, pressed for decades, ultimately produced the EPR paper — which turned into Bell's theorem and then into an experimental industry.",
    sources: [{ label: "Uncertainty principle", url: "https://en.wikipedia.org/wiki/Uncertainty_principle" }],
    tags: ["uncertainty", "interpretation"],
  },
  {
    id: "dirac",
    title: "The equation with negative energies",
    year: 1928,
    people: ["Paul Dirac"],
    place: "Cambridge",
    kind: "theory",
    track: "quantum",
    summary:
      "Making the electron's equation compatible with relativity produces spin for free — and a set of solutions with negative energy that nobody ordered.",
    question:
      "Schrödinger's equation is not relativistic. What is the correct equation for a fast electron?",
    expected:
      "A relativistic correction, with spin presumably needing to be inserted by hand as it had been since 1925.",
    found:
      "Dirac's first-order equation delivered spin-½ and the electron's magnetic moment automatically. It also had negative-energy solutions that could not be discarded. Dirac eventually proposed they were filled states, and that a hole in them would look like a positively charged electron.",
    surprise:
      "A mathematical embarrassment, taken literally, predicted an entire category of matter that no one had ever seen.",
    meaning:
      "Antimatter is predicted before it is observed — Anderson found the positron in cosmic rays in 1932. This is the graph's strongest instance of the arrow running from theory to experiment, and it establishes the pattern that dominates particle physics from then on.",
    quote: {
      text: "My equation was smarter than I was.",
      by: "attributed to Paul Dirac",
    },
    sources: [{ label: "Dirac equation", url: "https://en.wikipedia.org/wiki/Dirac_equation" }],
    tags: ["antimatter", "relativity", "prediction"],
  },
  {
    id: "positron",
    title: "A track curving the wrong way",
    year: 1932,
    people: ["Carl Anderson"],
    place: "Caltech",
    kind: "experiment",
    track: "deeper",
    summary:
      "A cosmic-ray cloud-chamber photograph shows a particle with the electron's mass and the opposite charge.",
    question: "What is in cosmic radiation?",
    expected:
      "Only electrons and protons were known. Anderson was not looking for Dirac's holes and was largely unaware of the prediction.",
    found:
      "A track curved the wrong way in the magnetic field but was far too light to be a proton. A lead plate across the chamber settled the direction of travel and therefore the sign of the charge.",
    meaning:
      "Dirac's prediction confirmed within four years by someone not trying to test it. Antimatter becomes an experimental fact, and the cloud chamber becomes the instrument that will go on to yield the muon, the pion and the strange particles.",
    sources: [{ label: "Positron", url: "https://en.wikipedia.org/wiki/Positron" }],
    tags: ["antimatter", "cosmic-rays"],
  },
  {
    id: "chadwick",
    title: "The neutral one",
    year: 1932,
    people: ["James Chadwick", "Irène Joliot-Curie", "Frédéric Joliot"],
    place: "Cavendish Laboratory, Cambridge",
    kind: "experiment",
    track: "nucleus",
    summary:
      "A penetrating uncharged radiation from beryllium knocks protons out of paraffin — it is a particle of roughly the proton's mass.",
    question:
      "What is the mysterious neutral radiation from alpha-bombarded beryllium?",
    expected:
      "The Joliot-Curies had reported it as high-energy gamma rays. Chadwick knew that gammas energetic enough to eject protons that fast would violate energy and momentum conservation by a wide margin.",
    found:
      "In a fortnight of near-continuous work Chadwick measured recoils from several target gases and showed the numbers only balanced for a neutral particle of about the proton's mass.",
    surprise:
      "The Joliot-Curies had the data and the wrong frame; Chadwick had been expecting a neutron for twelve years, since Rutherford proposed one in 1920. Preparation decided who saw it.",
    meaning:
      "The nucleus resolves into protons and neutrons, isotopes become obvious, and the proton–electron nucleus is finally dead. Neutrons, being uncharged, are also not repelled by nuclei — which makes them the ideal projectile and leads directly to fission within six years.",
    sources: [{ label: "Discovery of the neutron", url: "https://en.wikipedia.org/wiki/Neutron#Discovery" }],
    tags: ["neutron", "nucleus"],
  },
  {
    id: "cockcroft-walton",
    title: "Splitting the atom on purpose",
    year: 1932,
    people: ["John Cockcroft", "Ernest Walton"],
    place: "Cavendish Laboratory, Cambridge",
    kind: "instrument",
    track: "nucleus",
    summary:
      "The first accelerator-driven nuclear reaction: artificially sped protons break lithium into two alpha particles.",
    question:
      "Can a machine, rather than a lump of radium, supply particles energetic enough to alter a nucleus?",
    expected:
      "Classically, protons at 700 keV lack the energy to surmount lithium's Coulomb barrier. The experiment should have failed.",
    found:
      "It worked, because Gamow's quantum tunnelling calculation showed particles can pass through a barrier they cannot climb. Cockcroft designed the machine around that prediction — and the released energy matched Einstein's E = mc² directly.",
    meaning:
      "Physics stops depending on what nature happens to emit. Accelerators become the field's dominant instrument, running from this bench-top rig to the LHC, and every later particle discovery in this graph sits downstream of them.",
    sources: [{ label: "Cockcroft–Walton generator", url: "https://en.wikipedia.org/wiki/Cockcroft%E2%80%93Walton_generator" }],
    tags: ["accelerator", "tunnelling"],
  },
  {
    id: "pauli-neutrino",
    title: "A desperate remedy in a letter",
    year: 1930,
    people: ["Wolfgang Pauli"],
    place: "Zurich",
    kind: "theory",
    track: "deeper",
    summary:
      "To save energy conservation in beta decay, Pauli postulates an undetectable particle — and apologises for it.",
    question:
      "Why do electrons from beta decay emerge with a continuous spread of energies, when a two-body decay must give a single fixed value?",
    expected:
      "A sharp line. Bohr was prepared to abandon energy conservation in the nucleus to explain its absence.",
    found:
      "Pauli proposed in a letter to a conference he was skipping (he had a ball to attend) that a third, neutral, nearly massless particle carries off the balance. Fermi named it the neutrino and built the theory of beta decay around it in 1934.",
    surprise:
      "Pauli called it a terrible thing to have done, because he had predicted a particle he believed could never be detected. It took twenty-six years.",
    meaning:
      "A conservation law defended by inventing new physics rather than being abandoned — the same move that would later be made for the W boson, the Higgs, and dark matter. Sometimes it works.",
    quote: {
      text: "I have done a terrible thing, I have postulated a particle that cannot be detected.",
      by: "Wolfgang Pauli",
    },
    sources: [{ label: "Neutrino history", url: "https://en.wikipedia.org/wiki/Neutrino#History" }],
    tags: ["conservation", "prediction"],
  },
  {
    id: "fission",
    title: "The chemistry that made no sense",
    year: 1938,
    people: ["Otto Hahn", "Fritz Strassmann", "Lise Meitner", "Otto Frisch"],
    place: "Berlin / Kungälv",
    kind: "experiment",
    track: "nucleus",
    summary:
      "Neutron-bombarded uranium yields barium — an element of roughly half the mass — and it takes a physicist in exile to say why.",
    question:
      "What are the products when uranium absorbs a neutron? Everyone assumed heavier transuranic elements.",
    expected:
      "Nuclei chip off small fragments. Splitting nearly in half was not on anyone's list of possibilities.",
    found:
      "Hahn and Strassmann's radiochemistry kept identifying barium, Z = 56, from a target with Z = 92. Hahn wrote to Meitner — who had fled Nazi Germany that summer — that as chemists they were sure, and as nuclear physicists they could not bring themselves to say it. Walking in the snow near Kungälv over Christmas, Meitner and Frisch worked out the liquid-drop energetics and the ~200 MeV release.",
    surprise:
      "A result its own discoverers refused to state. The theoretical prohibition was strong enough that Fermi had produced fission in 1934 and misidentified it, and Noddack's 1934 suggestion that nuclei might split was ignored.",
    meaning:
      "Understood in January 1939, weaponised by 1945. It is the clearest case in the graph of a discovery whose consequences immediately escaped the discipline that produced it — and Meitner, excluded from the Nobel that went to Hahn alone, is the standard example of credit failing at the same moment.",
    sources: [{ label: "Nuclear fission discovery", url: "https://en.wikipedia.org/wiki/Discovery_of_nuclear_fission" }],
    tags: ["fission", "misinterpretation"],
  },
  {
    id: "chicago-pile",
    title: "Chain reaction under the bleachers",
    year: 1942,
    people: ["Enrico Fermi", "Leó Szilárd"],
    place: "University of Chicago",
    kind: "experiment",
    track: "nucleus",
    summary:
      "A stack of graphite and uranium in a squash court goes critical and sustains itself for 28 minutes.",
    question:
      "Does each fission release enough neutrons to trigger further fissions — and can the rate be controlled?",
    expected:
      "Szilárd had conceived of a chain reaction in 1933, before fission was known. Whether the numbers actually worked was unresolved.",
    found:
      "Chicago Pile-1 reached self-sustaining criticality on 2 December 1942, with control rods holding the multiplication factor at almost exactly one. There was no shielding and no containment; it was in a city.",
    meaning:
      "Democritus's uncuttable becomes an industry, and the atom's story permanently acquires a political dimension. Everything after this — reactors, weapons, arms control, non-proliferation — is downstream of one measurement of a neutron multiplication factor.",
    sources: [{ label: "Chicago Pile-1", url: "https://en.wikipedia.org/wiki/Chicago_Pile-1" }],
    tags: ["chain-reaction", "consequences"],
  },
  {
    id: "lamb-shift",
    title: "A gap Dirac's equation forbade",
    year: 1947,
    people: ["Willis Lamb", "Robert Retherford"],
    place: "Columbia University",
    kind: "experiment",
    track: "quantum",
    summary:
      "Two hydrogen levels that should be exactly degenerate differ by about 1000 MHz.",
    question:
      "Using wartime microwave technology, can the fine structure of hydrogen be measured directly instead of spectroscopically?",
    expected:
      "The Dirac equation says the 2S½ and 2P½ states have identical energy. Exactly zero splitting.",
    found:
      "A splitting of roughly 1058 MHz, measured to high precision. The vacuum is not empty: the electron interacts with fluctuating fields, shifting its energy.",
    surprise:
      "Not a large effect, but an unambiguous one against a prediction of exactly zero — the most informative kind of discrepancy.",
    meaning:
      "Announced at Shelter Island in June 1947, it triggered the construction of renormalised quantum electrodynamics by Feynman, Schwinger, Tomonaga and Dyson within two years. QED now agrees with the electron's magnetic moment to better than one part in 10¹², the most precisely tested prediction in science.",
    sources: [{ label: "Lamb shift", url: "https://en.wikipedia.org/wiki/Lamb_shift" }],
    tags: ["qed", "precision"],
  },
  {
    id: "neutrino-detected",
    title: "Catching the uncatchable",
    year: 1956,
    people: ["Clyde Cowan", "Frederick Reines"],
    place: "Savannah River, South Carolina",
    kind: "experiment",
    track: "deeper",
    summary:
      "A detector beside a nuclear reactor registers the coincidence signature of antineutrino capture.",
    question:
      "Can a particle with a cross-section of ~10⁻⁴⁴ cm² actually be detected?",
    expected:
      "Pauli had assumed not. The team's earlier plan had been to use a nuclear weapon test as the source.",
    found:
      "A reactor's enormous antineutrino flux, plus a delayed-coincidence trick — a positron annihilation followed microseconds later by neutron capture on cadmium — pulled the signal out. They telegrammed Pauli, who reportedly replied 'Everything comes to him who knows how to wait.'",
    meaning:
      "A particle invented in 1930 purely to balance an equation is confirmed twenty-six years later. Neutrinos go on to be the tool that reveals the Sun's interior and, through the solar neutrino problem, the first crack in the Standard Model.",
    sources: [{ label: "Cowan–Reines experiment", url: "https://en.wikipedia.org/wiki/Cowan%E2%80%93Reines_neutrino_experiment" }],
    tags: ["neutrino", "confirmation"],
  },
  {
    id: "quarks",
    title: "Threes and eights",
    year: 1964,
    people: ["Murray Gell-Mann", "George Zweig"],
    place: "Caltech / CERN",
    kind: "theory",
    track: "deeper",
    summary:
      "The hundred-odd 'elementary' particles fall into neat geometric patterns if they are built from three constituents with fractional charge.",
    question:
      "Why are there so many hadrons, and why do their properties fall into such regular multiplets?",
    expected:
      "Nobody expected fractional electric charge; it had never been observed and Millikan's result argued against it.",
    found:
      "Gell-Mann's Eightfold Way organised hadrons into patterns of 8 and 10 and predicted the Ω⁻, found in 1964 with the predicted mass. The underlying explanation required constituents of charge +2/3 and −1/3. Gell-Mann initially presented them as mathematical devices rather than objects.",
    meaning:
      "A repeat of Mendeleev's move — order first, mechanism later, with a gap-filling prediction as the proof. And a repeat of Dalton's signature: hidden discreteness revealed by patterns in integers.",
    sources: [{ label: "Quark model", url: "https://en.wikipedia.org/wiki/Quark_model" }],
    tags: ["quarks", "patterns"],
  },
  {
    id: "slac-dis",
    title: "Rutherford's experiment, again",
    year: 1968,
    people: ["Jerome Friedman", "Henry Kendall", "Richard Taylor", "James Bjorken", "Richard Feynman"],
    place: "SLAC, Stanford",
    kind: "experiment",
    track: "deeper",
    summary:
      "High-energy electrons fired at protons scatter at large angles far more often than a soft proton allows.",
    question:
      "Is the proton a diffuse blob of charge, or does it have structure inside?",
    expected:
      "Elastic scattering data had shown the proton to be an extended, soft object, so hard wide-angle scattering should be strongly suppressed.",
    found:
      "The deep inelastic rate barely fell with momentum transfer — the signature of point-like constituents inside. Bjorken's scaling and Feynman's 'parton' picture identified them, and the fractional charges eventually matched Gell-Mann's quarks.",
    surprise:
      "The same experiment as Geiger–Marsden, at a thousand times the energy, giving the same shape of answer one level down: mostly soft, with hard points inside.",
    meaning:
      "Quarks become physical rather than bookkeeping. It also explains why no one had ever seen a free one — confinement — and the structural rhyme with 1909 is the clearest statement the graph makes about how this field actually advances.",
    sources: [{ label: "Deep inelastic scattering", url: "https://en.wikipedia.org/wiki/Deep_inelastic_scattering" }],
    tags: ["quarks", "scattering", "rhyme"],
  },
  {
    id: "november-revolution",
    title: "Two labs, one particle, one week",
    year: 1974,
    people: ["Burton Richter", "Samuel Ting"],
    place: "SLAC / Brookhaven",
    kind: "experiment",
    track: "deeper",
    summary:
      "A resonance a thousand times narrower than expected turns up simultaneously on both American coasts.",
    question:
      "Both groups were surveying for structure in e⁺e⁻ annihilation and in proton collisions respectively.",
    expected:
      "Resonances at that mass are broad. A width this narrow means a decay suppressed by something unaccounted for.",
    found:
      "A sharp peak at 3.1 GeV, announced by both groups on 11 November 1974 and still carrying both names, J/ψ. It is a bound state of a fourth quark, charm, whose existence had been predicted in 1970 to explain a missing decay mode.",
    meaning:
      "The moment the quark model stopped being one option among several and became the Standard Model. The tau lepton in 1975 and bottom quark in 1977 followed, and the generational structure of matter came into view.",
    sources: [{ label: "November Revolution", url: "https://en.wikipedia.org/wiki/November_Revolution_(physics)" }],
    tags: ["charm", "standard-model"],
  },
  {
    id: "w-z-bosons",
    title: "Forces have particles too",
    year: 1983,
    people: ["Carlo Rubbia", "Simon van der Meer"],
    place: "CERN",
    kind: "experiment",
    track: "deeper",
    summary:
      "The carriers of the weak force are produced in a proton–antiproton collider at the masses electroweak theory demanded.",
    question:
      "Electroweak unification predicted heavy force carriers near 80 and 91 GeV. Do they exist?",
    expected:
      "The prediction was sharp and the theory was elegant, but no accelerator had reached that energy.",
    found:
      "Van der Meer's stochastic cooling made an antiproton beam dense enough to collide usefully; Rubbia's UA1 and UA2 found both particles at the predicted masses. Nobel awarded the following year — an unusually fast turnaround.",
    meaning:
      "Beta decay, the process that forced Pauli to invent the neutrino in 1930, is finally explained by an exchanged particle. The chain from an anomalous energy spectrum to a confirmed force carrier takes fifty-three years.",
    sources: [{ label: "W and Z bosons", url: "https://en.wikipedia.org/wiki/W_and_Z_bosons" }],
    tags: ["electroweak", "confirmation"],
  },
  {
    id: "stm",
    title: "Seeing individual atoms",
    year: 1981,
    people: ["Gerd Binnig", "Heinrich Rohrer"],
    place: "IBM Zurich",
    kind: "instrument",
    track: "matter",
    summary:
      "A needle sharpened to a single atom, held nanometres from a surface, maps individual atoms by tunnelling current.",
    question:
      "Can a surface be imaged atom by atom, rather than inferred from diffraction averages?",
    expected:
      "The uncertainty principle and thermal vibration were widely assumed to prohibit direct imaging at that scale.",
    found:
      "The tunnelling current between tip and surface varies exponentially with distance — a 0.1 nm change alters it by an order of magnitude. Scanning the tip renders individual atoms. By 1989 Eigler had spelled 'IBM' in 35 xenon atoms.",
    meaning:
      "Democritus's argument was that atoms must exist because division cannot go on forever. Twenty-four centuries later, they are pictures — and objects you can pick up and place. Quantum tunnelling, a consequence of the theory, becomes the instrument that shows you its own subject matter.",
    sources: [{ label: "Scanning tunnelling microscope", url: "https://en.wikipedia.org/wiki/Scanning_tunneling_microscope" }],
    tags: ["imaging", "tunnelling"],
  },
  {
    id: "orbital-imaging",
    title: "A photograph of a wavefunction",
    year: 2013,
    people: ["Aneta Stodolna", "Marc Vrakking"],
    place: "AMOLF, Amsterdam",
    kind: "experiment",
    track: "quantum",
    summary:
      "Photoionisation microscopy resolves the nodal structure of hydrogen's excited states directly on a detector.",
    question:
      "Can the nodal pattern of an atomic orbital be observed directly rather than inferred from spectra?",
    expected:
      "The wavefunction is usually treated as a computational object; Born's probability interpretation seemed to forbid seeing one.",
    found:
      "Electrons ejected from hydrogen in a carefully tuned static field project onto a detector in a pattern whose rings and nodes match the textbook |ψ|² for each state.",
    meaning:
      "Closes a loop opened in 1885: Balmer's numbers, Bohr's orbits, Schrödinger's equation, and finally an image of the thing itself. It is a picture of a probability distribution, not a particle's path — the distinction Born insisted on in 1926 survives intact.",
    sources: [{ label: "Photoionization microscopy", url: "https://en.wikipedia.org/wiki/Photoionization" }],
    tags: ["imaging", "wavefunction"],
  },
  {
    id: "higgs",
    title: "The last piece, and a wall",
    year: 2012,
    people: ["ATLAS and CMS collaborations", "Peter Higgs", "François Englert"],
    place: "CERN",
    kind: "experiment",
    track: "deeper",
    summary:
      "A 125 GeV boson completes the Standard Model — and nothing beyond it has turned up since.",
    question:
      "What gives the W and Z their mass without wrecking the symmetry of the theory?",
    expected:
      "The mechanism was proposed in 1964 and required a scalar particle of unpredicted mass — the last untested prediction of the Standard Model.",
    found:
      "Announced on 4 July 2012 by two independent detectors. Its properties have since matched Standard Model predictions with increasing precision, which is the awkward part.",
    meaning:
      "The Standard Model is now complete and, for the first time in this story, no experiment is clearly contradicting the reigning theory. The open problems — dark matter, neutrino masses, the muon g−2 tension, the proton radius puzzle, quantum gravity — sit outside it or at its edges. Historically, this graph is mostly a record of anomalies driving progress; the present chapter is unusual for the shortage of them.",
    sources: [{ label: "Higgs boson", url: "https://en.wikipedia.org/wiki/Higgs_boson" }],
    tags: ["standard-model", "open-questions"],
  },
];
