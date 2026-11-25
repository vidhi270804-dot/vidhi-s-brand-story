import { useState } from 'react';
import { ChevronDown, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { sessions } from '@/lib/sessions';
import { VibeCodingFlow, AiTeamExplorer } from '@/components/session-visuals';

export function SessionMenu() {
  const [openId, setOpenId] = useState<string | null>(null);
  const session = sessions.find(item => item.id === openId);
  return <>
    <DropdownMenu>
      <DropdownMenuTrigger asChild><Button variant="ghost" className="session-menu-trigger">Digital Platforms <ChevronDown/></Button></DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={10} className="session-dropdown">
        {sessions.map(item => <div key={item.id}>
          <DropdownMenuLabel><span className="session-menu-title">{item.title}</span></DropdownMenuLabel>
          <DropdownMenuSeparator/>
          <DropdownMenuItem onSelect={() => setOpenId(item.id)}>
            <MessageSquare/>{item.reflection?.length ? 'My reflection' : 'Guest profile'}
          </DropdownMenuItem>
        </div>)}
      </DropdownMenuContent>
    </DropdownMenu>
    <Dialog open={Boolean(session)} onOpenChange={open => { if (!open) setOpenId(null); }}>
      <DialogContent className="session-dialog">
        {session && <>
          <p className="eyebrow">Learning journal</p>
          <DialogTitle>{session.title}</DialogTitle>
          {(session.facilitators?.length || session.topic) && <DialogDescription>
            {session.facilitators?.length ? `With ${session.facilitators.join(', ')}` : session.topic}
          </DialogDescription>}
          <div className="session-panel">
            {session.image && <figure className="session-guest">
              <img src={session.image.url} alt={session.image.alt}/>
              {session.guest && <figcaption className="session-guest-meta">
                <span className="session-guest-label">Guest</span>
                <span className="session-guest-name">{session.guest.name}</span>
                <span className="session-guest-role">
                  {session.guest.role}{session.guest.org ? `, ${session.guest.org}` : ''}
                </span>
              </figcaption>}
            </figure>}
            {Boolean(session.reflection?.length) && <>
              <h3>My reflection</h3>
              {session.reflection?.map((paragraph, index) => <p className="session-reflection" key={index}>{paragraph}</p>)}
            </>}
            {session.visual === 'flowchart' && <VibeCodingFlow/>}
            {session.visual === 'team' && <AiTeamExplorer/>}
            {Boolean(session.tools?.length) && <div className="session-tools">
              <span className="session-tools-label">What we needed</span>
              <ul>{session.tools?.map(tool => <li key={tool}>{tool}</li>)}</ul>
            </div>}
            {session.takeaway && <div className="session-takeaway"><h4>My key takeaway</h4><p>{session.takeaway}</p></div>}
            {session.nextStep && <div className="session-next"><h4>What’s next</h4><p>{session.nextStep}</p></div>}
            {session.note && <p className="session-note">{session.note}</p>}
          </div>
        </>}
      </DialogContent>
    </Dialog>
  </>;
}
