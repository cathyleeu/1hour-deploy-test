import { createContext, useContext, useReducer, PropsWithChildren } from 'react';
import { generateUUID } from 'lib/utils';
import { RandomQuizList, generateRandom } from 'lib/utils';

interface AnswersType {
  id: string;
  content: string;
}
export interface QuestionType {
  id: string;
  question: string;
  answer: string
}

interface ContextState {
  timer: number;
  expired: boolean;
  answers: AnswersType[];
  questions: QuestionType[];
  isGenerated: boolean;

  errorMessage: string;
  expiredMessage: string;

  currentStage: number;
  totalStage: number;

  minimumMin: number;
  minimumText: number;
  phase: 'SETUP' | 'ONGOING' | 'FINISHED';
  isOpen: boolean;
}

interface QuizContextType extends ContextState  {
  setTimer: (time: number) => void;
  setQuizNum: (quiz: number) => void;
  updataAnswer: (answer: AnswersType) => void;
  generateQuestion: (stage: number) => void;
  goNextStage: () => void;
  updatePhase: (phase:'SETUP' | 'ONGOING' | 'FINISHED') => void;
  setError: (errorMessage:string) => void;
  setCurrentStage:(stage:number) => void;
  setTimeExpired:(expired: boolean) => void;
}

interface ActionType {
  type: string;
  payload: any;
}

export const QuizContext = createContext<QuizContextType>({} as QuizContextType);


const actions = {
  SET_TIMER: 'SET_TIMER',
  SET_TIME_EXPIRED: 'SET_TIME_EXPIRED', 
  SET_PHASE:'SET_PHASE',
  SET_ERROR_MESSAGE: 'SET_ERROR_MESSAGE',
  SET_EXPIRED_MESSAGE: 'SET_EXPIRED_MESSAGE',
  SET_QUIZ_NUM: 'SET_QUIZ_NUM',

  
  GENERATE_QUESTION: 'GENERATE_QUESTION',
  SAVE_ANSWER: 'SAVE_ANSWER',
  IS_EXPIRED: 'IS_EXPIRED',
  UPDATE_ANSWER: 'UPDATE_ANSWER',
  GO_NEXT_STEP: 'GO_NEXT_STEP',
  SET_CURRENT_STAGE: 'SET_CURRENT_STAGE'
};

const initialState = {
  timer: 0,
  expired: false,
  answers: [],
  questions: [],
  isGenerated: false,
  errorMessage: '',
  expiredMessage: '',

  currentStage: 0,
  totalStage: 3,
  minimumMin: 1,
  minimumText: 10,
  phase: 'SETUP',
  isOpen: false,
};




const reducer = (state:ContextState, { type, payload }:ActionType) => {
  switch (type) {
    case 'SET_TIMER': 
      return {...state, timer: payload.timer }
    case 'SET_TIME_EXPIRED': 
      return {...state, expired: payload.expired}
    case 'SET_CURRENT_STAGE':
      return {...state, currentStage: payload.currentStage}
    case 'SET_PHASE': 
      return {...state, phase: payload.phase}
    case 'SET_QUIZ_NUM' : 
      return { ...state, totalStage: payload.quiz}

    case 'GENERATE_QUESTION':
      return {...state, questions: payload.questions, isGenerated: payload.isGenerated}

    case 'UPDATE_ANSWER': 
      return {...state, answers: payload.answers }
    case 'GO_NEXT_STEP': 
      return {...state, currentStage: payload.currentStage }

    case 'SET_ERROR_MESSAGE':
      return {...state, errorMessage: payload.errorMessage}
    default:
      return state;
  }
};

const QuizProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <QuizContext.Provider
      value={{
        ...state,
        updataAnswer: (answer:AnswersType) => {
          const _answers =  state.answers;
          _answers.push(answer);
          dispatch({type: actions.UPDATE_ANSWER, payload: { answers: _answers }})
        },
        generateQuestion: (stage: number) => {
          const random = generateRandom(RandomQuizList.length - 1, stage);
          const questions = random.reduce((acc:any, curr) => {
            acc.push({
              id: generateUUID(),
              ...RandomQuizList[curr]
            })
            return acc;
          }, [])
          dispatch({type: actions.GENERATE_QUESTION, payload: { questions, isGenerated: true }})
        },
        updatePhase: (phase:string) => {
          dispatch({type: actions.SET_PHASE, payload: { phase }})
        },
        goNextStage: () => {
          dispatch({type: actions.GO_NEXT_STEP, payload: {currentStage: state.currentStage + 1}})
        },
        setTimer: (timer: number) => {
          dispatch({type: actions.SET_TIMER, payload: { timer }})
        },
        setQuizNum: (quiz: number) => {
          dispatch({type: actions.SET_QUIZ_NUM, payload: { quiz }})
        },
        setTimeExpired: (expired: boolean) => {
          dispatch({type: actions.SET_TIME_EXPIRED, payload: { expired }})
        },
        setError: (errorMessage:string) => {
          dispatch({type: actions.SET_ERROR_MESSAGE, payload: {errorMessage}})
        },
        setCurrentStage: (currentStage:number) => {
          dispatch({type: actions.SET_CURRENT_STAGE, payload: {currentStage}})
        }
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  return useContext(QuizContext);
};

export default QuizProvider;
