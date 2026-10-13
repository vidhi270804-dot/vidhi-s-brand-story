import { useState } from 'react';
import { ChevronDown, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { sessions } from '@/lib/sessions';

export function SessionMenu() {
  const [openId, setOpenId] = useState<string | null>(null);
  const session = sessions.find(item => item.id === openId);
  return <>
    <DropdownMenu>
      <DropdownMenuTrigger asChild><Button variant="ghost" className="session-menu-trigger">Sessions <ChevronDown/></Button></DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={10} className="session-dropdown">
        {sessions.map(item => <div key={item.id}>
          <DropdownMenuLabel><span className="session-menu-title">{item.title}</span><span className="session-menu-date">{item.date}</span></DropdownMenuLabel>
          <DropdownMenuSeparator/>
          <DropdownMenuItem onSelect={() => setOpenId(item.id)}><MessageSquare/>My reflection</DropdownMenuItem>
        </div>)}
      </DropdownMenuContent>
    </DropdownMenu>
    <Dialog open={Boolean(session)} onOpenChange={open => { if (!open) setOpenId(null); }}>
      <DialogContent className="session-dialog">
        {session && <>
          <p className="eyebrow">Learning journal</p>
          <DialogTitle>{session.title}</DialogTitle>
          <DialogDescription>{session.date} · With {session.facilitators.join(', ')}</DialogDescription>
          <div className="session-panel">
            <h3>My reflection</h3>
            {session.reflection.map((paragraph, index) => <p className="session-reflection" key={index}>{paragraph}</p>)}
            <div className="session-tools">
              <span className="session-tools-label">What we needed</span>
              <ul>{session.tools.map(tool => <li key={tool}>{tool}</li>)}</ul>
            </div>
            <div className="session-takeaway"><h4>My key takeaway</h4><p>{session.takeaway}</p></div>
            <div className="session-next"><h4>What’s next</h4><p>{session.nextStep}</p></div>
          </div>
        </>}
      </DialogContent>
    </Dialog>
  </>;
}
