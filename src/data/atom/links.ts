import type { Link } from "../types";

/**
 * The edges are the point of the whole exercise. Each one is a claim that the
 * later moment could not have happened, or would not have been believed,
 * without the earlier one.
 */
export const atomLinks: Link[] = [
  // — Antiquity —
  {
    from: "democritus",
    to: "aristotle-continuum",
    kind: "motivated",
    note: "Aristotle's continuum physics was written in explicit opposition to the atomists.",
  },
  {
    from: "democritus",
    to: "lucretius",
    kind: "enabled",
    note: "Lucretius set the Epicurean version of Democritus's system down in verse, which is why it survived.",
  },
  {
    from: "lucretius",
    to: "boyle",
    kind: "motivated",
    note: "The 1417 rediscovery of De rerum natura put corpuscular matter back in front of European natural philosophers.",
  },
  {
    from: "aristotle-continuum",
    to: "boyle",
    kind: "contradicted",
    note: "Compressible air is hard to reconcile with a plenum that admits no void.",
  },
  {
    from: "lucretius",
    to: "brown",
    kind: "predicted",
    note: "Book II describes dust in a sunbeam as evidence of invisible bodies in motion — the argument Perrin eventually made quantitative.",
  },

  // — Chemistry becomes quantitative —
  {
    from: "boyle",
    to: "bernoulli",
    kind: "explained",
    note: "Bernoulli derived Boyle's inverse relation by treating a gas as freely flying particles.",
  },
  {
    from: "boyle",
    to: "lavoisier",
    kind: "enabled",
    note: "Boyle's insistence on gases as weighable substances is what let Lavoisier put the air on a balance.",
  },
  {
    from: "lavoisier",
    to: "proust",
    kind: "enabled",
    note: "Conservation of mass made precise composition ratios meaningful to measure.",
  },
  {
    from: "lavoisier",
    to: "dalton",
    kind: "enabled",
    note: "Without strict mass conservation, relative atomic weights are not a well-posed quantity.",
  },
  {
    from: "proust",
    to: "dalton",
    kind: "motivated",
    note: "Fixed proportions demanded an explanation; multiple proportions supplied the decisive clue.",
  },
  {
    from: "dalton",
    to: "avogadro",
    kind: "refined",
    note: "Avogadro fixed Dalton's inconsistent weights by allowing elemental gases to be diatomic.",
  },
  {
    from: "avogadro",
    to: "mendeleev",
    kind: "enabled",
    note: "Consistent atomic weights after Karlsruhe (1860) are what made ordering the elements possible at all.",
  },
  {
    from: "dalton",
    to: "mendeleev",
    kind: "enabled",
    note: "The periodic table is an arrangement by atomic weight — Dalton's quantity.",
  },
  {
    from: "bernoulli",
    to: "einstein-brownian",
    kind: "enabled",
    note: "Kinetic theory supplied the statistical machinery Einstein applied to a suspended grain.",
  },

  // — Electricity and rays —
  {
    from: "faraday-electrolysis",
    to: "thomson-electron",
    kind: "predicted",
    note: "Faraday's integer charge ratios implied a natural unit of electricity, named the electron before one was found.",
  },
  {
    from: "faraday-electrolysis",
    to: "millikan",
    kind: "motivated",
    note: "Millikan set out to test whether the unit of charge implied by electrolysis was real or a statistical average.",
  },
  {
    from: "crookes-tube",
    to: "roentgen",
    kind: "enabled",
    note: "X-rays were found by accident while operating a cathode-ray tube.",
  },
  {
    from: "crookes-tube",
    to: "thomson-electron",
    kind: "enabled",
    note: "Better vacuum made the beam clean enough to deflect electrostatically and measure.",
  },
  {
    from: "roentgen",
    to: "becquerel",
    kind: "motivated",
    note: "Becquerel was testing whether phosphorescent substances emit the newly announced X-rays.",
  },
  {
    from: "becquerel",
    to: "curies",
    kind: "motivated",
    note: "Marie Curie took uranium rays as a thesis topic nobody else wanted.",
  },
  {
    from: "curies",
    to: "alpha-beta-gamma",
    kind: "enabled",
    note: "Concentrated radium gave Rutherford a source intense enough to sort the radiation by penetrating power.",
  },
  {
    from: "alpha-beta-gamma",
    to: "geiger-marsden",
    kind: "enabled",
    note: "A collimated beam of fast, heavy, charged alphas was the only available probe of atomic interiors.",
  },
  {
    from: "alpha-beta-gamma",
    to: "transmutation",
    kind: "enabled",
    note: "Separating the emissions is what let decay be tracked as one element becoming another.",
  },
  {
    from: "curies",
    to: "transmutation",
    kind: "motivated",
    note: "Radium's undiminishing output demanded an account of where the energy came from.",
  },
  {
    from: "thomson-electron",
    to: "millikan",
    kind: "enabled",
    note: "Thomson's e/m plus Millikan's e gives the electron's mass.",
  },
  {
    from: "thomson-electron",
    to: "geiger-marsden",
    kind: "motivated",
    note: "Thomson's plum-pudding model was the thing the gold foil experiment was expected to confirm.",
  },
  {
    from: "geiger-marsden",
    to: "thomson-electron",
    kind: "contradicted",
    note: "Backscattering is impossible if positive charge is spread through the whole atom.",
  },

  // — The quantum arrives —
  {
    from: "spectroscopy",
    to: "balmer",
    kind: "enabled",
    note: "Balmer needed precise measured wavelengths before he could find a formula for them.",
  },
  {
    from: "spectroscopy",
    to: "planck",
    kind: "motivated",
    note: "The blackbody problem grew directly out of precision radiation measurement in the 1890s.",
  },
  {
    from: "planck",
    to: "einstein-photoelectric",
    kind: "enabled",
    note: "Einstein took Planck's quantised exchange and applied it to light itself.",
  },
  {
    from: "einstein-brownian",
    to: "perrin",
    kind: "predicted",
    note: "Einstein derived a displacement law with a measurable coefficient; Perrin measured it.",
  },
  {
    from: "brown",
    to: "einstein-brownian",
    kind: "motivated",
    note: "An eighty-year-old unexplained jitter, finally given a mechanism.",
  },
  {
    from: "brown",
    to: "perrin",
    kind: "explained",
    note: "Perrin's measurements settled that the jitter is molecular bombardment.",
  },
  {
    from: "perrin",
    to: "millikan",
    kind: "enabled",
    note: "An independent Avogadro number let charge measurements be cross-checked against chemistry.",
  },
  {
    from: "geiger-marsden",
    to: "bohr",
    kind: "motivated",
    note: "A nuclear atom is classically unstable; Bohr's postulates exist to stop it collapsing.",
  },
  {
    from: "planck",
    to: "bohr",
    kind: "enabled",
    note: "Bohr quantised angular momentum in units of ħ — Planck's constant, reused.",
  },
  {
    from: "balmer",
    to: "bohr",
    kind: "motivated",
    note: "Balmer's formula was the target; reproducing it exactly is what made Bohr's model credible.",
  },
  {
    from: "bohr",
    to: "balmer",
    kind: "explained",
    note: "Twenty-eight years after it was written down, the formula got a derivation.",
  },
  {
    from: "thomson-electron",
    to: "bohr",
    kind: "enabled",
    note: "You cannot build an orbiting-electron model without an electron of known mass and charge.",
  },
  {
    from: "bohr",
    to: "franck-hertz",
    kind: "predicted",
    note: "Discrete levels imply collisions can only transfer discrete energies — which is what the current dips show.",
  },
  {
    from: "roentgen",
    to: "moseley",
    kind: "enabled",
    note: "Moseley's method is X-ray spectroscopy, element by element.",
  },
  {
    from: "bohr",
    to: "moseley",
    kind: "enabled",
    note: "Moseley read his linear √f relation as a direct measure of nuclear charge using Bohr's level scheme.",
  },
  {
    from: "moseley",
    to: "mendeleev",
    kind: "refined",
    note: "Atomic number replaces atomic weight as the ordering principle, and the leftover inversions vanish.",
  },
  {
    from: "geiger-marsden",
    to: "moseley",
    kind: "enabled",
    note: "Nuclear charge is only a meaningful quantity once there is a nucleus to carry it.",
  },

  // — Quantum mechanics proper —
  {
    from: "einstein-photoelectric",
    to: "compton",
    kind: "predicted",
    note: "If light comes in quanta, those quanta should carry momentum and recoil off electrons.",
  },
  {
    from: "compton",
    to: "de-broglie",
    kind: "motivated",
    note: "Once waves were demonstrably particles, the reverse symmetry became the obvious thing to try.",
  },
  {
    from: "bohr",
    to: "de-broglie",
    kind: "motivated",
    note: "De Broglie's wavelength turns Bohr's arbitrary quantisation rule into a standing-wave condition.",
  },
  {
    from: "bohr",
    to: "matrix-mechanics",
    kind: "contradicted",
    note: "The Bohr–Sommerfeld programme failed on helium and on line intensities, forcing a rebuild from scratch.",
  },
  {
    from: "stern-gerlach",
    to: "pauli-exclusion",
    kind: "motivated",
    note: "Two spots, not three, exposed a two-valued property that Pauli's fourth quantum number formalised.",
  },
  {
    from: "bohr",
    to: "stern-gerlach",
    kind: "predicted",
    note: "Space quantisation was a Bohr–Sommerfeld prediction Stern expected to disprove.",
  },
  {
    from: "pauli-exclusion",
    to: "mendeleev",
    kind: "explained",
    note: "Shell capacities of 2, 8, 18, 32 — and therefore the shape of the periodic table — follow from exclusion.",
  },
  {
    from: "de-broglie",
    to: "schrodinger",
    kind: "enabled",
    note: "Schrödinger set out to find the wave equation whose solutions are de Broglie's matter waves.",
  },
  {
    from: "de-broglie",
    to: "davisson-germer",
    kind: "predicted",
    note: "λ = h/p fixes the diffraction angles that the recrystallised nickel target produced.",
  },
  {
    from: "matrix-mechanics",
    to: "schrodinger",
    kind: "refined",
    note: "Two formalisms, proved equivalent in 1926 — wave mechanics simply proved easier to calculate with.",
  },
  {
    from: "matrix-mechanics",
    to: "uncertainty",
    kind: "enabled",
    note: "Uncertainty is the physical reading of xp ≠ px, which fell out of the matrix algebra first.",
  },
  {
    from: "schrodinger",
    to: "bohr",
    kind: "explained",
    note: "Bohr's energy levels reappear as eigenvalues, so the postulates become consequences.",
  },
  {
    from: "schrodinger",
    to: "dirac",
    kind: "motivated",
    note: "Dirac was looking for the relativistic replacement for a manifestly non-relativistic equation.",
  },
  {
    from: "dirac",
    to: "positron",
    kind: "predicted",
    note: "Negative-energy solutions, read literally, predicted a positively charged electron four years before one was photographed.",
  },
  {
    from: "schrodinger",
    to: "pauli-exclusion",
    kind: "enabled",
    note: "Exclusion becomes a statement about antisymmetric many-particle wavefunctions.",
  },

  // — Into the nucleus —
  {
    from: "geiger-marsden",
    to: "rutherford-proton",
    kind: "enabled",
    note: "Same apparatus, same alphas, now aimed at breaking a nucleus rather than mapping one.",
  },
  {
    from: "rutherford-proton",
    to: "chadwick",
    kind: "motivated",
    note: "Protons alone cannot account for nuclear mass, so Rutherford proposed a neutral partner in 1920.",
  },
  {
    from: "schrodinger",
    to: "cockcroft-walton",
    kind: "enabled",
    note: "Gamow's tunnelling calculation showed sub-barrier protons could still transmute lithium — the machine was built to that spec.",
  },
  {
    from: "cockcroft-walton",
    to: "chadwick",
    kind: "enabled",
    note: "Accelerator and detector technique at the Cavendish underwrote the neutron measurements.",
  },
  {
    from: "chadwick",
    to: "fission",
    kind: "enabled",
    note: "Uncharged neutrons feel no Coulomb barrier, which makes them the ideal projectile for heavy nuclei.",
  },
  {
    from: "transmutation",
    to: "rutherford-proton",
    kind: "motivated",
    note: "If nature transmutes elements spontaneously, the obvious next question is whether it can be done deliberately.",
  },
  {
    from: "transmutation",
    to: "pauli-neutrino",
    kind: "motivated",
    note: "Beta decay's continuous energy spectrum is the anomaly the neutrino was invented to remove.",
  },
  {
    from: "pauli-neutrino",
    to: "neutrino-detected",
    kind: "predicted",
    note: "Twenty-six years between the postulate and the delayed-coincidence signal at Savannah River.",
  },
  {
    from: "fission",
    to: "chicago-pile",
    kind: "enabled",
    note: "Secondary neutrons per fission is the number that decides whether a chain reaction is possible.",
  },
  {
    from: "chadwick",
    to: "chicago-pile",
    kind: "enabled",
    note: "The chain reaction is a neutron economy; without neutrons there is nothing to sustain.",
  },
  {
    from: "moseley",
    to: "fission",
    kind: "enabled",
    note: "Identifying barium as Z = 56 in a Z = 92 target is what made the result impossible to explain away.",
  },

  // — Precision and the deeper layer —
  {
    from: "dirac",
    to: "lamb-shift",
    kind: "predicted",
    note: "Dirac's equation predicted exactly zero splitting — which is what made a 1058 MHz gap so informative.",
  },
  {
    from: "lamb-shift",
    to: "dirac",
    kind: "contradicted",
    note: "A measured splitting where the theory demanded none forced the construction of renormalised QED.",
  },
  {
    from: "geiger-marsden",
    to: "slac-dis",
    kind: "motivated",
    note: "Fire something small and fast at something and see what bounces back — the same experiment, one level down.",
  },
  {
    from: "quarks",
    to: "slac-dis",
    kind: "predicted",
    note: "Point-like fractionally charged constituents were a bookkeeping device until scattering found them.",
  },
  {
    from: "slac-dis",
    to: "quarks",
    kind: "explained",
    note: "Scaling and the parton picture turned Gell-Mann's mathematical device into physical objects.",
  },
  {
    from: "mendeleev",
    to: "quarks",
    kind: "motivated",
    note: "The Eightfold Way is Mendeleev's method reapplied: find the pattern, leave gaps, predict what fills them.",
  },
  {
    from: "quarks",
    to: "november-revolution",
    kind: "predicted",
    note: "Charm was proposed in 1970 to suppress a missing decay; the J/ψ is a charm–anticharm bound state.",
  },
  {
    from: "cockcroft-walton",
    to: "november-revolution",
    kind: "enabled",
    note: "Everything after 1932 in this track runs on accelerators.",
  },
  {
    from: "pauli-neutrino",
    to: "w-z-bosons",
    kind: "motivated",
    note: "Fermi's beta-decay theory needed a force carrier; finding it closed a fifty-three-year chain.",
  },
  {
    from: "november-revolution",
    to: "w-z-bosons",
    kind: "enabled",
    note: "The Standard Model's electroweak sector became worth betting a collider on once charm confirmed it.",
  },
  {
    from: "w-z-bosons",
    to: "higgs",
    kind: "motivated",
    note: "Massive force carriers require a mechanism that gives them mass without breaking the theory.",
  },
  {
    from: "neutrino-detected",
    to: "higgs",
    kind: "enabled",
    note: "Each confirmed prediction raised confidence enough to fund the next, larger search.",
  },

  // — Back out to the atom itself —
  {
    from: "davisson-germer",
    to: "stm",
    kind: "enabled",
    note: "Electron wave behaviour and tunnelling are the physics the microscope's tip actually runs on.",
  },
  {
    from: "schrodinger",
    to: "stm",
    kind: "enabled",
    note: "Tunnelling current varying exponentially with gap is a direct consequence of the wave equation.",
  },
  {
    from: "democritus",
    to: "stm",
    kind: "motivated",
    note: "The uncuttable, finally imaged — and then picked up and rearranged one at a time.",
  },
  {
    from: "schrodinger",
    to: "orbital-imaging",
    kind: "predicted",
    note: "The nodal structure on the detector is the textbook |ψ|², photographed.",
  },
  {
    from: "balmer",
    to: "orbital-imaging",
    kind: "motivated",
    note: "Hydrogen's lines started the chase in 1885; hydrogen's orbitals are what the camera finally caught.",
  },
  {
    from: "einstein-photoelectric",
    to: "orbital-imaging",
    kind: "enabled",
    note: "Photoionisation microscopy works by ejecting the electron with a photon of precisely tuned energy.",
  },
  {
    from: "stern-gerlach",
    to: "uncertainty",
    kind: "motivated",
    note: "A beam that splits in two became the standard thought-laboratory for what measurement does.",
  },
];
