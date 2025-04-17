
import axios from 'axios';
import { Question } from '../types';

export const fetchQuestions = async (): Promise<Question[]> => {
  const res = await axios.get('https://opentdb.com/api.php?amount=10&type=multiple');
  return res.data.results;
};