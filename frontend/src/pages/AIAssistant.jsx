import { useState } from 'react';
import axios from 'axios';

const AIAssistant = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [loading, setLoading] = useState(false);

    const askQuestion = async () => {
        setLoading(true);
        setAnswer('');
        try {
            const res = await axios.post("http://localhost:8000/api/ask", {
                question,
            });
            setAnswer(res.data.answer.content || res.data.answer);
        } catch (error) {
            setAnswer('Error fetching answer. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Ask about a destination</h2>

            <textarea
                rows="3"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="e.g. Is Ladakh safe in June?"
                style={{ width: "100%" }}
            />

            <button onClick={askQuestion} disabled={loading || !question}>
                {loading ? "Thinking..." : "Ask"}
            </button>

            {answer && (
                <div style={{ marginTop: "20px" }}>
                    <strong>Answer:</strong>
                    <p>{answer}</p>
                </div>
            )}
            <p style={{ fontSize: "12px", color: "#666" }}>
                Answers are generated using stored destination data.
                If information is unavailable, the system will explicitly say so.
            </p>
        </div>
    );
};

export default AIAssistant;