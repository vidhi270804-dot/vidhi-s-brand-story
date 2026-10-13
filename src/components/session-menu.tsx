import { useState } from 'react';
import { ArrowLeft, ArrowRight, ChevronDown, MessageSquare, Layers, CircleHelp, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { sessions } from '@/lib/sessions';

type SessionView = 'feedback' | 'flashcards' | 'quiz';

export function SessionMenu() {
  const [selection, setSelection] = useState<{ id: string; view: SessionView } | null>(null);
  const [cardIndex, setCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const session = sessions.find(item => item.id === selection?.id);
  const card = session?.cards[cardIndex];
  function openSession(id: string, view: SessionView) {
    setSelection({ id, view }); setCardIndex(0); setFlipped(false); setAnswers({}); setSubmitted(false);
  }
  const complete = session?.quiz.every((_, index) => answers[index] !== undefined) ?? false;
  const score = session?.quiz.filter((question, index) => answers[index] === question.correct).length ?? 0;
  return <>
    <DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" className="session-menu-trigger">Sessions <ChevronDown/></Button></DropdownMenuTrigger><DropdownMenuContent align="end" sideOffset={10} className="session-dropdown">
      {sessions.map(item => <div key={item.id}><DropdownMenuLabel><span className="session-menu-title">{item.title}</span><span className="session-menu-date">{item.date}</span></DropdownMenuLabel><DropdownMenuSeparator/><DropdownMenuItem onSelect={() => openSession(item.id, 'feedback')}><MessageSquare/>Feedback</DropdownMenuItem><DropdownMenuItem onSelect={() => openSession(item.id, 'flashcards')}><Layers/>Flashcards</DropdownMenuItem><DropdownMenuItem onSelect={() => openSession(item.id, 'quiz')}><CircleHelp/>Quiz</DropdownMenuItem></div>)}
    </DropdownMenuContent></DropdownMenu>
    <Dialog open={Boolean(session)} onOpenChange={open => { if (!open) setSelection(null); }}><DialogContent className="session-dialog">
      {session && <><p className="eyebrow">Learning journal</p><DialogTitle>{session.title}</DialogTitle><DialogDescription>{session.date} · With {session.facilitators.join(', ')}</DialogDescription>
        <Tabs value={selection?.view ?? 'feedback'} onValueChange={view => setSelection({id:session.id, view:view as SessionView})}>
          <TabsList className="session-tabs" aria-label="Session materials"><TabsTrigger value="feedback">Feedback</TabsTrigger><TabsTrigger value="flashcards">Flashcards</TabsTrigger><TabsTrigger value="quiz">Quiz</TabsTrigger></TabsList>
          <TabsContent value="feedback" className="session-panel"><h3>My reflection</h3><p className="session-reflection">{session.feedback}</p><div className="session-takeaway"><h4>My key takeaway</h4><p>Not having a Claude subscription didn’t stop me from getting started with Lovable.</p></div></TabsContent>
          <TabsContent value="flashcards" className="session-panel">{card && <><div className="session-progress"><span>Session recap</span><span>{cardIndex + 1} / {session.cards.length}</span></div><Button variant="outline" className="session-flashcard" onClick={() => setFlipped(!flipped)} aria-label={flipped ? 'Show question' : 'Reveal answer'}><span className="eyebrow">{flipped ? 'Answer' : 'Question'}</span><span>{flipped ? card.answer : card.question}</span><span className="session-flip-label"><RotateCcw size={14}/>{flipped ? 'Show question' : 'Reveal answer'}</span></Button><div className="session-card-controls"><Button variant="outline" size="icon" aria-label="Previous flashcard" disabled={cardIndex === 0} onClick={() => {setCardIndex(cardIndex - 1);setFlipped(false);}}><ArrowLeft/></Button><Button variant="outline" size="icon" aria-label="Next flashcard" disabled={cardIndex === session.cards.length - 1} onClick={() => {setCardIndex(cardIndex + 1);setFlipped(false);}}><ArrowRight/></Button></div></>}</TabsContent>
          <TabsContent value="quiz" className="session-panel"><div className="session-progress"><span>Session recap quiz</span><span>{session.quiz.length} questions</span></div><form onSubmit={event => {event.preventDefault();if(complete) setSubmitted(true);}}>{session.quiz.map((question,index) => <fieldset className="session-question" key={question.question}><legend>{index + 1}. {question.question}</legend>{question.options.map((option, optionIndex) => <label className="session-option" key={option}><input type="radio" name={`question-${index}`} value={optionIndex} checked={answers[index] === optionIndex} disabled={submitted} onChange={() => setAnswers({...answers,[index]:optionIndex})}/><span>{option}</span></label>)}{submitted && <p className={answers[index] === question.correct ? 'session-answer-correct' : 'session-answer-review'}>{answers[index] === question.correct ? 'Correct. ' : 'Not quite. '}{question.explanation}</p>}</fieldset>)}{submitted ? <div className="session-result" role="status"><strong>{score} / {session.quiz.length} correct</strong><Button variant="editorialOutline" type="button" onClick={() => {setAnswers({});setSubmitted(false);}}><RotateCcw/>Try again</Button></div> : <Button variant="editorial" type="submit" disabled={!complete}>Check answers <ArrowRight/></Button>}</form></TabsContent>
        </Tabs>
      </>}
    </DialogContent></Dialog>
  </>;
}