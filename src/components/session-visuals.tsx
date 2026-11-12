import { useState } from 'react';
import { ArrowDown } from 'lucide-react';

const flow = [
  { title: 'Pick your tool', text: 'Claude Pro or Lovable — Lovable works without a Claude subscription.' },
  { title: 'Just start', text: 'Don’t ponder the perfect idea. Any prompt, any website.' },
  { title: 'Build & refine', text: 'Describe what you want, look at the result, and keep prompting.' },
  { title: 'Export', text: 'Take the design to Claude Code, or export from Lovable to GitHub.' },
  { title: 'Connect & go live', text: 'Connect GitHub to Vercel to deploy and make the site public.' },
];

export function VibeCodingFlow() {
  return <div className="session-visual">
    <h3>How we go about vibe coding</h3>
    <ol className="flow">
      {flow.map((step, i) => <li key={step.title}>
        <div className="flow-step"><span className="flow-num">{i + 1}</span><div><strong>{step.title}</strong><p>{step.text}</p></div></div>
        {i < flow.length - 1 && <ArrowDown className="flow-arrow" aria-hidden />}
      </li>)}
    </ol>
  </div>;
}

const roles = [
  { name: 'Researcher', text: 'A research workspace with its own context gathers insights about the audience and market.' },
  { name: 'Strategist', text: 'A strategy workspace challenges the findings and shapes the direction.' },
  { name: 'Creative', text: 'A creative workflow builds ideas and copy on top of the strategy.' },
  { name: 'Reviewer', text: 'A reviewer questions assumptions before anything moves forward.' },
  { name: 'Human', text: 'You bring judgement, verification and accountability — roles alone don’t create expertise.' },
];

export function AiTeamExplorer() {
  const [active, setActive] = useState(0);
  const role = roles[active] ?? roles[0]!;
  return <div className="session-visual">
    <h3>Build your AI marketing team</h3>
    <p className="team-hint">Tap each role to see what it does in the workflow.</p>
    <div className="team-roles" role="tablist">
      {roles.map((r, i) => <button key={r.name} role="tab" aria-selected={i === active} className={i === active ? 'team-role is-active' : 'team-role'} onClick={() => setActive(i)}>{i + 1}. {r.name}</button>)}
    </div>
    <div className="team-detail" role="tabpanel"><strong>{role.name}</strong><p>{role.text}</p></div>
    <div className="team-nav">
      <button className="team-role" disabled={active === 0} onClick={() => setActive(active - 1)}>← Back</button>
      <span>{active + 1} / {roles.length}</span>
      <button className="team-role" disabled={active === roles.length - 1} onClick={() => setActive(active + 1)}>Next →</button>
    </div>
  </div>;
}
