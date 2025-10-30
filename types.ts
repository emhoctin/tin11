
export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface Topic {
  id: string;
  name: string;
  description: string;
}

export interface Question {
  id: string;
  topicId: string;
  stem: string;
  options: string[];
  answerIndices: number[]; // Hỗ trợ nhiều đáp án đúng
  difficulty: Difficulty;
  tags: string[];
  explanation_prompt: string;
}

export interface Attempt {
  question: Question;
  userAnswerIndices: number[]; // Hỗ trợ nhiều lựa chọn của người dùng
  isCorrect: boolean;
}

export interface LessonSummary {
  chapter_title: string;
  content_markdown: string;
}

export interface AdaptiveSuggestions {
    feedback_summary: string;
    knowledge_gaps: string[];
    actionable_steps: string[];
}
