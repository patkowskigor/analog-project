
import { defineEventHandler, readBody, getMethod } from 'h3';
import { Comment } from '../../models/Comment';

export default defineEventHandler(async (event) => {
    const method = getMethod(event);

    if (method === 'GET') {
        // Pobierz wszystkie komentarze
        try {
            const comments = await Comment.find().sort({ createdAt: -1 });
            return comments;
        } catch (error) {
            event.res.statusCode = 500;
            return { error: 'Błąd podczas pobierania komentarzy' };
        }
    }

    if (method === 'POST') {
        // Dodaj nowy komentarz
        try {
            const body = await readBody(event);
            const { author, content } = body;
            if (!author || !content) {
                event.res.statusCode = 400;
                return { error: 'Autor i treść są wymagane' };
            }
            const newComment = new Comment({ author, content });
            const savedComment = await newComment.save();
            event.res.statusCode = 201;
            return savedComment;
        } catch (error) {
            event.res.statusCode = 500;
            return { error: 'Błąd podczas dodawania komentarza' };
        }
    }

    event.res.statusCode = 405;
    return { error: 'Method not allowed' };
});
