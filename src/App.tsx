/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { questions } from './data';
import { 
  BookOpen, 
  ChevronRight, 
  ChevronLeft, 
  Lightbulb, 
  GraduationCap, 
  BrainCircuit, 
  CheckCircle2, 
  XCircle,
  RotateCcw,
  Gamepad2,
  List
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'quiz' | 'study'>('quiz');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLogic, setShowLogic] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const currentQuestion = questions[currentIndex];
  const openEndedQuestions = questions.filter(q => q.type === 'open-ended');

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowLogic(false);
      setSelectedOption(null);
    } else {
      setCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowLogic(false);
      setSelectedOption(null);
    }
  };

  const handleOptionSelect = (option: string) => {
    if (showLogic) return; // Prevent changing after revealing
    setSelectedOption(option);
    setShowLogic(true);
    if (option === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setShowLogic(false);
    setSelectedOption(null);
    setScore(0);
    setCompleted(false);
  };

  if (completed && activeTab === 'quiz') {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full text-center border border-slate-100"
        >
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
            <CheckCircle2 size={40} />
          </div>
          <h1 className="text-3xl font-bold text-slate-800 mb-2">U krye!</h1>
          <p className="text-slate-500 mb-6">Përfundove të gjitha pyetjet e arkitekturës.</p>
          
          <div className="bg-slate-50 rounded-2xl p-6 mb-8">
            <div className="text-sm text-slate-400 uppercase tracking-wider font-semibold mb-1">Rezultati yt</div>
            <div className="text-5xl font-black text-slate-800">{Math.round((score / questions.length) * 100)}%</div>
            <div className="text-slate-500 mt-1">{score} nga {questions.length} pyetje saktë</div>
          </div>

          <button 
            onClick={resetQuiz}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2"
          >
            <RotateCcw size={20} />
            Provo përsëri
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-12">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 px-4 py-4 md:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-xl text-white shadow-lg shadow-indigo-100">
              <GraduationCap size={24} />
            </div>
            <div>
              <h1 className="text-lg font-bold leading-none">Guida e Studimit</h1>
              <p className="text-xs text-slate-400 font-medium tracking-wide flex items-center gap-1">
                <BrainCircuit size={12} /> ARKITEKTURA E KOMPJUTERËVE
              </p>
            </div>
          </div>
          <div className="text-sm font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
            {activeTab === 'quiz' ? `Pyetja ${currentIndex + 1} / ${questions.length}` : `${openEndedQuestions.length} Pyetje`}
          </div>
        </div>

        {/* Tabs */}
        <div className="max-w-4xl mx-auto mt-6 flex p-1 bg-slate-100 rounded-xl w-fit">
          <button 
            onClick={() => setActiveTab('quiz')}
            className={`px-4 py-2 font-bold text-sm rounded-lg flex items-center gap-2 transition-all ${activeTab === 'quiz' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
             <Gamepad2 size={16} /> Kuizi
          </button>
          <button 
            onClick={() => setActiveTab('study')}
            className={`px-4 py-2 font-bold text-sm rounded-lg flex items-center gap-2 transition-all ${activeTab === 'study' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
             <List size={16} /> Pyetjet me Shkrim
          </button>
        </div>

        {/* Progress Bar */}
        {activeTab === 'quiz' && (
          <div className="max-w-4xl mx-auto mt-4 h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
              className="h-full bg-indigo-500 rounded-full"
            />
          </div>
        )}
      </header>

      {activeTab === 'quiz' ? (
        <main className="max-w-4xl mx-auto p-4 md:p-8 mt-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Question Card */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-bl-full -z-0 opacity-50" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-lg text-slate-500 text-xs font-bold uppercase mb-4">
                  <BookOpen size={14} /> {currentQuestion.type === 'multiple-choice' ? 'Zgjedhje e shumëfishtë' : 'Pyetje e hapur'}
                </div>
                
                <h2 className="text-xl md:text-2xl font-bold text-slate-800 leading-tight mb-6">
                  {currentQuestion.question}
                </h2>

                {currentQuestion.imageHint && (
                  <div className="mb-6 p-4 bg-slate-900 rounded-xl font-mono text-sm text-indigo-300 overflow-x-auto border-l-4 border-indigo-500 shadow-inner">
                    <pre>{currentQuestion.imageHint}</pre>
                  </div>
                )}

                {currentQuestion.type === 'multiple-choice' ? (
                  <div className="space-y-3">
                    {currentQuestion.options?.map((option, idx) => {
                      const isCorrect = option === currentQuestion.correctAnswer;
                      const isSelected = option === selectedOption;
                      
                      let variantClasses = "border-slate-200 hover:border-indigo-200 hover:bg-slate-50";
                      let icon = null;

                      if (showLogic) {
                        if (isCorrect) {
                          variantClasses = "border-emerald-500 bg-emerald-50 text-emerald-900";
                          icon = <CheckCircle2 className="text-emerald-500" size={20} />;
                        } else if (isSelected) {
                          variantClasses = "border-rose-300 bg-rose-50 text-rose-900";
                          icon = <XCircle className="text-rose-400" size={20} />;
                        } else {
                          variantClasses = "border-slate-100 opacity-50";
                        }
                      } else if (isSelected) {
                        variantClasses = "border-indigo-600 bg-indigo-50";
                      }

                      return (
                        <button
                          key={idx}
                          id={`option-${idx}`}
                          disabled={showLogic}
                          onClick={() => handleOptionSelect(option)}
                          className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group ${variantClasses}`}
                        >
                          <span className="font-medium">{option}</span>
                          {icon}
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {!showLogic ? (
                      <button 
                        onClick={() => setShowLogic(true)}
                        className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100"
                      >
                        Shfaq përgjigjen
                      </button>
                    ) : (
                      <div className="p-6 bg-emerald-50 border-2 border-emerald-100 rounded-2xl">
                        <div className="text-xs font-bold text-emerald-600 uppercase mb-2">Përgjigja saktë:</div>
                        <div className="text-emerald-900 font-bold text-lg">{currentQuestion.correctAnswer}</div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Explanation & Logic Section */}
            <AnimatePresence>
              {showLogic && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-hidden"
                >
                  <div className="bg-white rounded-3xl border border-slate-200 p-6 flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-indigo-600">
                      <div className="bg-indigo-100 p-1.5 rounded-lg">
                        <BrainCircuit size={18} />
                      </div>
                      <span className="font-bold text-sm uppercase tracking-wide">Pse kjo përgjigje?</span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line bg-slate-50 p-4 rounded-2xl italic">
                      "{currentQuestion.logic}"
                    </p>
                  </div>

                  <div className="bg-white rounded-3xl border border-amber-200 p-6 flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-amber-600">
                      <div className="bg-amber-100 p-1.5 rounded-lg">
                        <Lightbulb size={18} />
                      </div>
                      <span className="font-bold text-sm uppercase tracking-wide">Si ta memorizosh?</span>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-2xl border border-amber-100">
                       <p className="text-amber-900 text-sm font-medium">
                        {currentQuestion.memorizationTip}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-4">
              <button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className="flex items-center gap-2 text-slate-500 font-bold hover:text-indigo-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                id="prev-btn"
              >
                <ChevronLeft size={20} /> Prapa
              </button>

              {showLogic ? (
                <button
                  id="next-btn"
                  onClick={handleNext}
                  className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-slate-800 transition-all hover:translate-x-1"
                >
                  {currentIndex === questions.length - 1 ? 'Përfundo' : 'Vazhdo'} <ChevronRight size={20} />
                </button>
              ) : (
                <div className="text-xs text-slate-400 font-medium">Zgjidh një opsion për të ecur para</div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
      ) : (
        <main className="max-w-4xl mx-auto p-4 md:p-8 mt-4 space-y-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800">Memorizim: Pyetjet e Hapura</h2>
            <p className="text-slate-500">Mëso përgjigjet, logjikën dhe truket e memorizimit për pyetjet me shkrim.</p>
          </div>
          <div className="space-y-8">
            {openEndedQuestions.map((q, idx) => (
              <div key={q.id} className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-indigo-100 text-indigo-700 font-bold rounded-xl w-10 h-10 flex items-center justify-center shrink-0">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 leading-tight">
                    {q.question}
                  </h3>
                </div>
                {q.imageHint && (
                  <div className="mb-6 ml-0 md:ml-14 p-4 bg-slate-900 rounded-xl font-mono text-sm text-indigo-300 overflow-x-auto border-l-4 border-indigo-500 shadow-inner">
                    <pre>{q.imageHint}</pre>
                  </div>
                )}
                <div className="ml-0 md:ml-14 space-y-4">
                  <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl">
                    <div className="text-xs font-bold text-emerald-600 uppercase mb-2">Përgjigja:</div>
                    <div className="text-emerald-900 font-bold text-lg whitespace-pre-line">{q.correctAnswer}</div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-4 border border-slate-100 rounded-2xl">
                        <div className="text-xs font-bold text-indigo-600 uppercase mb-2 flex items-center gap-1"><BrainCircuit size={14} /> Logjika</div>
                        <div className="text-slate-700 text-sm leading-relaxed whitespace-pre-line italic">"{q.logic}"</div>
                    </div>
                    <div className="bg-amber-50 p-4 border border-amber-100 rounded-2xl">
                        <div className="text-xs font-bold text-amber-600 uppercase mb-2 flex items-center gap-1"><Lightbulb size={14} /> Tip Memorizimi</div>
                        <div className="text-amber-900 text-sm font-medium">{q.memorizationTip}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* Professor Signature */}
      <footer className="max-w-4xl mx-auto px-8 py-10 border-t border-slate-200 mt-10">
        <div className="flex items-center gap-4 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white shrink-0">
             <GraduationCap />
          </div>
          <div>
            <div className="font-bold text-slate-800">Shënim nga Prof. Gemini</div>
            <p className="text-sm text-slate-500">
              Arkitektura e kompjuterëve është logjikë, jo thjesht memorizim. Mëso "pse"-në pas çdo instruksioni!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
