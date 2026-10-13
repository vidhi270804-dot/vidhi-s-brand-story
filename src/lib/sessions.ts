export type Session = {
  id: string;
  title: string;
  date: string;
  facilitators: string[];
  tools: string[];
  reflection: string[];
  takeaway: string;
  nextStep: string;
};

export const sessions: Session[] = [{
  id: 'vibe-coding-1',
  title: 'Vibe Coding · Session 1',
  date: '9 October 2026',
  facilitators: ['Nirvan', 'Rishabh', 'Yibo'],
  tools: ['Claude Pro or Lovable', 'GitHub', 'Vercel'],
  reflection: [
    'We began with the tools. The facilitators showed us that all we need to start is Claude Pro or Lovable, along with GitHub and Vercel. I don’t have a Claude subscription, so Lovable was the path that made sense for me — and they made it clear that it is enough to get started.',
    'What stayed with me most was the advice to simply begin. Rather than pondering over what a good idea for the website is, we were told to start working on it and see where it takes us. They were very clear that giving it a shot matters far more than having the perfect idea first.',
    'They also said we can build anything — the prompt can be anything, the website can be anything. That took a great deal of the pressure out of it for me.',
    'We were shown how to carry the work forward too: export the design into Claude Code, which then helps you build the website, or, if you are using Lovable, export it to GitHub and connect it from there.',
    'I have never vibe coded before, and they did not make it look like a difficult thing to do. They made it easy, simple, and easy to understand. This session has given me a very good understanding of how to build a website.',
    'The one place I am still facing a little trouble is deploying the website or making it public. I’ve gotten in touch with one of the mentors and he mentioned he’d be glad to help me with it.',
    'All in all, a very productive session.',
  ],
  takeaway: 'Just give it a shot — you can build anything.',
  nextStep: 'Learn how to deploy the website and make it public, with help from a mentor.',
}];
