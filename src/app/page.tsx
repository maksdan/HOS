import { atomSubject } from "@/data/atom";
import { validate } from "@/lib/graph";
import { Explorer } from "@/components/Explorer";

export default function Home() {
  if (process.env.NODE_ENV !== "production") {
    const problems = validate(atomSubject);
    if (problems.length) {
      console.warn(`[HOS] data integrity:\n  ${problems.join("\n  ")}`);
    }
  }

  return <Explorer subject={atomSubject} />;
}
