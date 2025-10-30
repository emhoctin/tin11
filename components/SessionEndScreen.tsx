
import React from 'react';
import { Attempt, AdaptiveSuggestions } from '../types';
import Card from './Card';
import { CheckCircleIcon, XCircleIcon, SparklesIcon, ArrowPathIcon, LightBulbIcon, HomeIcon } from './icons';

interface SessionEndScreenProps {
  attempts: Attempt[];
  suggestions: AdaptiveSuggestions | null;
  onRestart: () => void;
  onPracticeAgain: () => void;
}

const SessionEndScreen: React.FC<SessionEndScreenProps> = ({ attempts, suggestions, onRestart, onPracticeAgain }) => {
  const correctAnswers = attempts.filter(r => r.isCorrect).length;
  const totalQuestions = attempts.length;
  const score = totalQuestions > 0 ? (correctAnswers / totalQuestions) * 100 : 0;

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="text-center mb-8 bg-gradient-to-br from-primary to-indigo-700 text-white shadow-xl">
        <h1 className="text-4xl font-extrabold mb-2">Kết thúc phiên luyện tập</h1>
        <p className="text-xl font-semibold mb-4 text-indigo-200">{`Bạn đã trả lời đúng ${correctAnswers}/${totalQuestions} câu`}</p>
        <div className="text-6xl font-bold mb-4">{score.toFixed(0)}<span className="text-4xl">%</span></div>
      </Card>

      <div className="grid md:grid-cols-2 gap-8">
        {/* AI Suggestions Card */}
        <Card>
            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                <SparklesIcon className="w-7 h-7 text-secondary mr-3"/>
                Gợi ý từ Gia sư AI
            </h2>
            {suggestions ? (
                <div className="space-y-5">
                    <div>
                        <h3 className="font-semibold text-lg text-primary mb-1">Nhận xét tổng quan</h3>
                        <p className="text-dark/90 italic">"{suggestions.feedback_summary}"</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg text-primary mb-1">Lỗ hổng kiến thức</h3>
                        {suggestions.knowledge_gaps.length > 0 ? (
                             <ul className="list-disc list-inside text-dark/90 pl-2 space-y-1">
                                {suggestions.knowledge_gaps.map((gap, i) => <li key={i}>{gap}</li>)}
                            </ul>
                        ) : <p className="text-dark/80 italic">Không phát hiện lỗ hổng kiến thức lớn. Làm tốt lắm!</p>}
                    </div>
                     <div>
                        <h3 className="font-semibold text-lg text-primary mb-1">Gợi ý hành động</h3>
                         {suggestions.actionable_steps.length > 0 ? (
                            <ul className="list-disc list-inside text-dark/90 pl-2 space-y-1">
                                {suggestions.actionable_steps.map((step, i) => <li key={i}>{step}</li>)}
                            </ul>
                         ) : <p className="text-dark/80 italic">Tuyệt vời, bạn đã nắm vững chủ đề này!</p>}
                    </div>
                </div>
            ) : (
                <p className="text-dark/80 italic">Đang phân tích kết quả của bạn...</p>
            )}
        </Card>

        {/* Attempts Review Card */}
        <Card>
             <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                <LightBulbIcon className="w-7 h-7 text-secondary mr-3"/>
                Xem lại câu trả lời
            </h2>
            <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
                {attempts.map((attempt, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-light border border-slate-200">
                        <p className="flex-1 truncate pr-4 text-slate-700">{index + 1}. {attempt.question.stem}</p>
                        {attempt.isCorrect ? 
                            <CheckCircleIcon className="w-6 h-6 text-success flex-shrink-0" /> : 
                            <XCircleIcon className="w-6 h-6 text-danger flex-shrink-0" />
                        }
                    </div>
                ))}
            </div>
        </Card>
      </div>
      
      <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <button
          onClick={onPracticeAgain}
          className="bg-accent text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-accent/90 transform hover:scale-105 transition-all duration-300 flex items-center justify-center w-full sm:w-auto"
        >
          <ArrowPathIcon className="w-6 h-6 mr-2"/>
          Làm bài tiếp
        </button>
        <button
          onClick={onRestart}
          className="bg-white border-2 border-slate-300 text-dark font-bold py-3 px-8 rounded-full shadow-lg hover:bg-slate-100 transform hover:scale-105 transition-all duration-300 flex items-center justify-center w-full sm:w-auto"
        >
          <HomeIcon className="w-6 h-6 mr-2"/>
          Về trang chủ
        </button>
      </div>
    </div>
  );
};

export default SessionEndScreen;
