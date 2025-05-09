// route/GeminiAI.js
const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
    console.error('GEMINI_API_KEY is not set in environment variables');
}

router.post('/chat', async(req, res) => {
    const { messages } = req.body;
    if (!messages) {
        return res.status(400).json({ error: 'Messages are required.' });
    }

    if (!GEMINI_API_KEY) {
        return res.status(500).json({ error: 'Gemini API key is not configured.' });
    }

    try {
        const lastMessage = messages[messages.length - 1].content;
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;
        const body = {
            contents: [{
                parts: [{ text: lastMessage }]
            }]
        };

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });

        const data = await response.json();
        if (!response.ok) {
            console.error('Gemini REST API error:', data);
            return res.status(response.status).json({ error: (data.error && data.error.message) ? data.error.message : 'Error from Gemini REST API' });
        }

        // Format to match frontend expectations
        const text = data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0] && data.candidates[0].content.parts[0].text ? data.candidates[0].content.parts[0].text : '';
        res.json({
            choices: [{
                message: { content: text }
            }]
        });
    } catch (err) {
        console.error('Error in Gemini REST route:', err);
        res.status(500).json({
            error: 'Error contacting Gemini REST API. Please check server logs for details.'
        });
    }
});

module.exports = router;