import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../../models/comment.model';

@Injectable({ providedIn: 'root' })
export class CommentsService {
    private apiUrl = '/api/comments';

    constructor(private http: HttpClient) { }

    getCommentsForPost(postId: string): Observable<Comment[]> {
        return this.http.get<Comment[]>(`${this.apiUrl}?postId=${postId}`);
    }

    addComment(comment: Comment): Observable<Comment> {
        return this.http.post<Comment>(this.apiUrl, comment);
    }
}
