import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import textile from '@/assets/textile-editorial.jpg';
import fashion from '@/assets/fashion-editorial.jpg';

const brands = [
  {name:'Chokhana', sub:'The Weave', full:'Chokhana – The Weave'},
  {name:'Aanchal Vijaywargi', sub:'', full:'Aanchal Vijaywargi'},
  {name:'Urban Life', sub:'', full:'Urban Life'},
  {name:'Rhaani', sub:'Official', full:'Rhaani Official'},
  {name:'Ayoki', sub:'', full:'Ayoki'},
  {name:'Purple Patch', sub:'', full:'Purple Patch'},
];

export function BrandWork() {
  const [selected, setSelected] = useState<string | null>(null);
  return <section id="work" className="section page-width">
    <div className="section-heading"><div><p className="eyebrow">01 / The work</p><h2>Good brands.<br/><em>Meaningful connections.</em></h2></div><p>From a brand’s social presence to the people who bring its story to life — a little strategy, a lot of intention.</p></div>
    <div className="work-grid">
      <article className="work-item"><div className="work-image"><img src={textile} width={1024} height={1280} loading="lazy" alt="Illustrative editorial still life of woven textiles; not a client campaign"/></div><div className="work-caption"><div><h3>Brand marketing</h3><p>Social media · Content · Brand storytelling</p></div><ArrowUpRight size={21}/></div><p className="work-summary">Social media calendars, copywriting, client coordination, shoots, on-ground events, and website development through my work at Titli Brand Consultancy.</p></article>
      <article className="work-item"><div className="work-image"><img src={fashion} width={1024} height={1280} loading="lazy" alt="Illustrative editorial fashion still life; not a client campaign"/></div><div className="work-caption"><div><h3>PR & collaborations</h3><p>Sourcing · Barter · Collaborations</p></div><ArrowUpRight size={21}/></div><p className="work-summary">Working on sourcing, barter opportunities, and collaborations for brands across India — connecting brands with people and possibilities.</p></article>
    </div>
    <p className="imagery-note">Editorial imagery is illustrative, not client campaign photography.</p>
    <div className="brands-heading"><span>Brands I’ve worked with</span><span>Marketing & public relations</span></div>
    <div className="brands-grid">{brands.map(brand=><Button key={brand.full} variant="ghost" className="brand-button" onClick={()=>setSelected(brand.full)} aria-label={`View ${brand.full} work`}>{brand.name}{brand.sub && <small>{brand.sub}</small>}</Button>)}</div>
    <Dialog open={selected !== null} onOpenChange={open=>{if(!open) setSelected(null);}}><DialogContent className="brand-dialog"><p className="eyebrow">Brand experience</p><DialogTitle>{selected}</DialogTitle><DialogDescription>A brand I’ve worked with in marketing and public relations.</DialogDescription><p className="dialog-note">My broader experience spans social media planning, copywriting, client coordination, sourcing, barter, and collaborations across India.</p><Button variant="editorial" asChild><a href={`mailto:somani.vidhi27@gmail.com?subject=${encodeURIComponent(`Let’s talk about ${selected ?? 'your brand work'}`)}`}>Let’s talk about the work <ArrowUpRight/></a></Button></DialogContent></Dialog>
  </section>;
}