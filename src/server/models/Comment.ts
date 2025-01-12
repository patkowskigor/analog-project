// server/models/Comment.ts
import mongoose from '../utils/mongo';

const commentSchema = new mongoose.Schema({
    author: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

export const Comment = mongoose.model('Comment', commentSchema);
