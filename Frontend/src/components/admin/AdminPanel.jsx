import React, { useEffect, useState } from "react";
import questionService from "../../services/QuestionService";
import "./admin.css";

const AdminPanel = () => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await questionService.getQuestions();
        setQuestions(res.data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  const handleAddQuestion = async () => {
    try {
      await questionService.addQuestion(newQuestion, newAnswer);
      setNewQuestion("");
      setNewAnswer("");
      const res = await questionService.getQuestions();
      setQuestions(res.data);
    } catch (error) {
      console.error("Error adding question:", error);
    }
  };

  const handleDeleteQuestion = async (id) => {
    try {
      await questionService.deleteQuestion(id);
      const res = await questionService.getQuestions();
      setQuestions(res.data);
    } catch (error) {
      console.error("Error deleting question:", error);
    }
  };

  return (
    <div className="admin-container">
      <h2>Admin Panel</h2>
      <input
        type="text"
        placeholder="New question"
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
      />
      <input
        type="text"
        placeholder="New answer"
        value={newAnswer}
        onChange={(e) => setNewAnswer(e.target.value)}
      />
      <button onClick={handleAddQuestion}>Add Question</button>

      <ul>
        {questions.map((q) => (
          <li key={q._id}>
            {q.question} - {q.answer}
            <button onClick={() => handleDeleteQuestion(q._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
