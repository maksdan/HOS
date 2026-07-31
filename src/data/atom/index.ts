import type { Subject, Track } from "../types";
import { earlyNodes } from "./nodes-early";
import { modernNodes } from "./nodes-modern";
import { atomLinks } from "./links";

const tracks: Track[] = [
  {
    id: "philosophy",
    label: "Argument",
    blurb: "Claims about matter made before anyone could test them.",
    color: "#94a3b8",
  },
  {
    id: "matter",
    label: "Stuff & Chemistry",
    blurb: "Weighing, mixing, counting — how atoms became bookkeeping.",
    color: "#f0b429",
  },
  {
    id: "rays",
    label: "Rays & Charge",
    blurb: "Discharge tubes, radioactivity, and the first thing found inside an atom.",
    color: "#c084fc",
  },
  {
    id: "quantum",
    label: "The Quantum",
    blurb: "Why the atom is stable, and why classical physics could not say.",
    color: "#38bdf8",
  },
  {
    id: "nucleus",
    label: "The Nucleus",
    blurb: "The core: found by accident, opened deliberately, and split.",
    color: "#fb7185",
  },
  {
    id: "deeper",
    label: "Deeper Layers",
    blurb: "The bottom drops out again — quarks, neutrinos, and the Standard Model.",
    color: "#34d399",
  },
];

export const atomSubject: Subject = {
  id: "atom",
  title: "The Story of the Atom",
  tagline: "From an argument in Abdera to a photograph of a wavefunction.",
  intro:
    "Twenty-four centuries, fifty-five moments, and one question that kept getting harder. This is not a timeline — it is a dependency graph. Follow the edges to see which experiment a theory was helpless without, and which results arrived as a complete shock to the people who produced them.",
  tracks,
  nodes: [...earlyNodes, ...modernNodes],
  links: atomLinks,
  tour: [
    {
      nodeId: "democritus",
      beat: "Start with an argument nobody could test. It is right, roughly, and useless for two thousand years — because being right is not the same as knowing.",
    },
    {
      nodeId: "lavoisier",
      beat: "The idea only becomes knowledge when someone insists the balance be obeyed exactly. Note that the anomaly was known for decades and explained away.",
    },
    {
      nodeId: "dalton",
      beat: "Small whole numbers turn up in wet chemistry. Integers are the fingerprint of counting, and nothing continuous produces them for free.",
    },
    {
      nodeId: "spectroscopy",
      beat: "A new instrument arrives and immediately generates a puzzle nobody can touch for fifty-four years: atoms glow at exact frequencies and nowhere in between.",
    },
    {
      nodeId: "becquerel",
      beat: "A cloudy week in Paris. The control condition produced the discovery — the cleanest case here of a failed experiment beating a successful one.",
    },
    {
      nodeId: "thomson-electron",
      beat: "The indivisible turns out to have a part, and the same part comes out of every element.",
    },
    {
      nodeId: "geiger-marsden",
      beat: "The busywork task assigned to an undergraduate. The result was not off by a factor — it was off by orders of magnitude, in a direction thought physically impossible.",
    },
    {
      nodeId: "bohr",
      beat: "Now watch a theory being assembled out of four earlier results. Remove any one of them and Bohr cannot write his paper.",
    },
    {
      nodeId: "davisson-germer",
      beat: "A bottle of liquid air breaks. The accident confirms the strangest prediction of the decade, and J. J. Thomson's son proves electrons are waves.",
    },
    {
      nodeId: "dirac",
      beat: "The arrow reverses. Mathematics predicts a kind of matter nobody has seen, and four years later it shows up on a photographic plate.",
    },
    {
      nodeId: "fission",
      beat: "A result its own discoverers refused to state out loud, because theory said it was impossible.",
    },
    {
      nodeId: "slac-dis",
      beat: "Rutherford's experiment, run again at a thousand times the energy, gives the same shape of answer one level down.",
    },
    {
      nodeId: "higgs",
      beat: "And the awkward present: the theory is complete, everything matches, and the anomalies that drove all of the above are in short supply.",
    },
  ],
};

export const subjects: Subject[] = [atomSubject];
