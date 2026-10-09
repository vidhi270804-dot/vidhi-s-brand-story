import { createFileRoute } from '@tanstack/react-router';
import { ArrowDown, ArrowUpRight, Download, MapPin, Music2, BookOpen, Coffee, Compass, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BrandWork } from '@/components/brand-work';
import moodboard from '@/assets/strategy-workspace.jpg';
import resume from '@/assets/resume.asset.json';

export const Route = createFileRoute('/')({
  head: () => ({meta:[
    {title:'Vidhi Somani — Branding, Marketing & a Little Curiosity'},
    {name:'description',content:'Explore Vidhi Somani’s brand marketing and PR work, collaborations across India, education at ESSEC, published research, and life beyond work.'},
    {property:'og:title',content:'Vidhi Somani — Branding, Marketing & a Little Curiosity'},
    {property:'og:description',content:'Brand stories, meaningful connections, and the work and world of Vidhi Somani.'},
    {property:'og:type',content:'website'},
    {name:'twitter:card',content:'summary_large_image'},
  ]}), component:Index,
});

const experience = [
 {company:'Titli Brand Consultancy',date:'Aug 2025 — May 2026',role:'Marketing Associate',description:'Social media planning, copywriting, client coordination, team management, shoots, events, and website development.'},
 {company:'Voctalent Club · St. Francis',date:'2022 — 2025',role:'President · Vice President · Best Manager Portfolio',description:'Led club activities and helped bring Recroi, the International Management Fest, and the Indhradhanush trunk show to life.'},
 {company:'Nine Square Avenue',date:'Apr — Jun 2024',role:'Business Operations Intern',description:'Supported website development, lead generation, and operations at an event and marketing firm in Hyderabad.'},
 {company:'Caratlane',date:'Apr — Jun 2023',role:'Sales & Inventory Intern',description:'Hands-on experience in sales, customer relationships, inventory, jewellery classifications, and diamond grading.'},
];
const education = [
 {company:'ESSEC Business School',date:'2026 — 2027',role:'MSc Marketing Management & Digital',description:'Developing my perspective at the intersection of marketing, management, and digital.'},
 {company:'St. Francis College for Women',date:'2022 — 2025',role:'Bachelor of Vocation',description:'Retail Management & Information Technology'},
 {company:'Nasr Girls School',date:'2020 — 2022',role:'Commerce with Math',description:''},
 {company:'Delhi Public School',date:'2009 — 2020',role:'School education',description:''},
];
const interests = [
 {icon:Music2,title:'A rhythm of my own',text:'Dance and lawn tennis were a big part of my childhood — creativity on one side, a competitive spirit on the other.'},
 {icon:BookOpen,title:'One more chapter',text:'Reading, collecting new perspectives, and always having something to be curious about.'},
 {icon:Coffee,title:'Coffee, with a side of discovery',text:'Café hopping, exploring new places, and finding little moments worth remembering.'},
];

function Index() {
 return <>
  <header className="site-header page-width"><a href="#" className="wordmark" aria-label="Vidhi Somani home">vidhi<span>.</span></a><nav className="nav-links" aria-label="Main navigation"><a href="#work" className="desktop-link">My work</a><a href="#about" className="desktop-link">About me</a><a href="#journey" className="desktop-link">My journey</a><Button variant="editorialOutline" asChild><a href="#contact">Let’s connect <ArrowUpRight/></a></Button></nav></header>
  <main>
   <section className="hero page-width"><p className="eyebrow">Branding · Marketing · Public relations</p><h1>Vidhi <em>Somani</em><span className="text-primary">.</span></h1><p className="hero-description">A curious mind. A creative heart.<br/>Building brand stories and connections that mean something.</p><div className="hero-actions"><Button variant="editorial" asChild><a href="#work">Explore my work <ArrowDown/></a></Button><Button variant="editorialOutline" asChild><a href={resume.url} target="_blank" rel="noreferrer" download="Vidhi-Somani-Resume.pdf">My résumé <Download/></a></Button></div><div className="hero-photo"><img src={moodboard} width={1536} height={1024} alt="Illustrative professional workspace with brand strategy boards, a laptop, and planning materials" fetchPriority="high"/><span className="photo-label">A little glimpse into my creative world</span></div><div className="hero-bottom"><span><MapPin size={12}/>Based in Singapore · Connected to India</span><span>Strategy meets a little soul <Compass size={12}/></span></div></section>
   <BrandWork/>
   <section id="about" className="section subtle-band"><div className="page-width about-grid"><div><p className="eyebrow">02 / The person</p><h2>More than a résumé.<br/><em>A little more me.</em></h2><p className="about-copy">Hi, I’m Vidhi — a branding and marketing enthusiast who enjoys bringing ideas, people, and brands together. My experience has taken me from retail floors and event operations to social calendars and brand collaborations.</p><p className="about-copy">I’m a team player with a problem-solving mindset, a love for creative work, and an interest in the way people connect with brands. Currently, my journey continues at ESSEC Business School in Singapore.</p><Button variant="editorialOutline" asChild className="mt-6"><a href="https://www.linkedin.com/in/vidhi-somani-202776210/" target="_blank" rel="noreferrer">Find me on LinkedIn <ArrowUpRight/></a></Button></div><div className="personal-notes"><h3>Outside the workday…</h3>{interests.map(item=><div className="interest-row" key={item.title}><item.icon/><div><h4>{item.title}</h4><p>{item.text}</p></div></div>)}</div></div></section>
   <section id="journey" className="section page-width"><div className="section-heading"><div><p className="eyebrow">03 / The journey</p><h2>Learning. Doing.<br/><em>Growing, always.</em></h2></div><p>Every role, classroom, and new experience has added a different piece to the way I think and work.</p></div><div className="timeline-grid">{[{title:'Where I’ve worked',items:experience},{title:'Where I’ve learned',items:education}].map(column=><div key={column.title}><h3 className="column-title">{column.title}</h3>{column.items.map(item=><article className="timeline-entry" key={item.company}><div className="timeline-meta"><span>{item.date}</span></div><h3>{item.company}</h3><div className="role">{item.role}</div>{item.description&&<p>{item.description}</p>}</article>)}</div>)}</div><article className="research"><FileText size={30}/><div><div className="eyebrow">Published research · July 2025</div><h3>A Study on the Stock Market Participation in India & Applications Preferred by Select Metropolitan Investors</h3><p>My undergraduate research, published in the International Journal of Innovative Research in Technology, Volume 12, Issue 2.</p></div><Button variant="editorialOutline" asChild><a href="https://ijirt.org/publishedpaper/IJIRT182252_PAPER.pdf" target="_blank" rel="noreferrer">Read the paper <ArrowUpRight/></a></Button></article></section>
   <section id="contact" className="contact-section"><div className="page-width"><p className="eyebrow">04 / Say hello</p><h2>Great things start<br/>with a <em>conversation.</em></h2><p>A brand idea, an opportunity, or just a good coffee recommendation?</p><a className="contact-email" href="mailto:somani.vidhi27@gmail.com">somani.vidhi27@gmail.com <ArrowUpRight size={21}/></a></div></section>
  </main>
  <footer className="footer page-width"><a href="#" className="wordmark">vidhi<span>.</span></a><small>© {new Date().getFullYear()} Vidhi Somani. A work in progress, just like me.</small><div className="footer-links"><a href="https://www.linkedin.com/in/vidhi-somani-202776210/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={resume.url} target="_blank" rel="noreferrer">Résumé ↗</a><a href="#">Back to top ↑</a></div></footer>
 </>;
}
