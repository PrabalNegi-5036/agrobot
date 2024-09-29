import React, { useEffect, useState } from 'react';
import questionService from '../../services/QuestionService';
import nluService from '../../services/NluService'; // Import NLU Service
import './chatbot.css';

const Chatbot = () => {
  const [questions, setQuestions] = useState([]);
  const [displayedQuestions, setDisplayedQuestions] = useState([]); // State for displayed questions
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await questionService.getQuestions();
        setQuestions(res.data);
        // Initialize displayed questions with the first two questions
        setDisplayedQuestions(res.data.slice(0, 2));
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  const handleQuerySubmit = async () => {
    try {
      const res = await nluService.processNLU(query); // Use NLU Service for processing
      setResponse(res.data.answer);
      
      // Add new question and answer to the displayed questions
      const newQuestion = { question: query, answer: res.data.answer, _id: Date.now() }; // Use timestamp as ID
      setDisplayedQuestions(prev => {
        const updatedQuestions = [newQuestion, ...prev].slice(0, 2); // Keep only the latest two
        return updatedQuestions;
      });

      // Add new question to the complete questions list
      setQuestions(prev => [newQuestion, ...prev]);

      // Reset the query input
      setQuery('');
    } catch (error) {
      console.error('Error processing NLU:', error);
    }
  };

  return (
    <div className="chat-container">
      <h2>Chatbot</h2>
      <input
        type="text"
        placeholder="Ask something..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleQuerySubmit}>Ask</button>
      <div className="response">{response}</div>
      <ul>
        {displayedQuestions.map((q) => (
          <li key={q._id}>
            <strong>Q:</strong> {q.question} <br />
            <strong>A:</strong> {q.answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Chatbot;
