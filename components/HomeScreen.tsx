
import React from 'react';
import { Topic } from '../types';
import Card from './Card';
import { AcademicCapIcon, BookOpenIcon, BoltIcon } from './icons';

interface HomeScreenProps {
  topics: Topic[];
  onStartQuiz: (topic: Topic) => void;
  onViewSummary: (topic: Topic) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ topics, onStartQuiz, onViewSummary }) => {
  return (
    <div className="flex flex-col items-center">
      <Card className="w-full max-w-5xl text-center mb-10 bg-gradient-to-br from-primary to-indigo-700 text-white shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Chào mừng đến với Tin Học 11!</h1>
        <p className="text-lg text-indigo-200">Luyện tập các chủ đề trong sách giáo khoa "Định hướng Tin học ứng dụng" với sự trợ giúp của AI.</p>
      </Card>
      
      <div className="w-full max-w-5xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-dark">Chọn một bài học để bắt đầu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map(topic => (
            <Card key={topic.id} className="flex flex-col justify-between">
              <div>
                <div className="flex items-center mb-3">
                    <span className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center mr-4">
                      <AcademicCapIcon className="w-6 h-6"/>
                    </span>
                    <h3 className="text-xl font-bold text-dark">{topic.name}</h3>
                </div>
                <p className="text-slate-500 text-sm mb-6 min-h-[60px]">{topic.description}</p>
              </div>
              <div className="flex flex-col space-y-3 mt-auto">
                <button
                  onClick={() => onViewSummary(topic)}
                  className="w-full bg-primary/10 text-primary font-semibold py-2.5 px-4 rounded-lg hover:bg-primary/20 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <BookOpenIcon className="w-5 h-5"/>
                  <span>AI Tóm tắt</span>
                </button>
                <button
                  onClick={() => onStartQuiz(topic)}
                  className="w-full bg-accent text-white font-bold py-2.5 px-4 rounded-lg shadow-md hover:bg-accent/90 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <BoltIcon className="w-5 h-5"/>
                  <span>Luyện tập</span>
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
