import { Check, Slash, X } from "@/components/icons";

interface ProsConsRisksProps {
  pros: string[];
  cons: string[];
  risks: string[];
}

export function ProsConsRisks({ pros, cons, risks }: ProsConsRisksProps) {
  return (
    <div className="proscons">
      <div className="pc" data-k="pros">
        <div className="pc-head">
          <Check size={11} /> Pros
        </div>
        <ul>
          {pros.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>
      <div className="pc" data-k="cons">
        <div className="pc-head">
          <Slash size={11} /> Cons
        </div>
        <ul>
          {cons.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>
      <div className="pc" data-k="risks">
        <div className="pc-head">
          <X size={11} /> Risks
        </div>
        <ul>
          {risks.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
