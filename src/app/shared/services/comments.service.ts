import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class CommentsService {

    private apiUrl = 'http://localhost:5173/api/v1/comments';

    constructor(private http: HttpClient) { }

    getComments(): Observable<Comment[]> {
        return this.http.get<Comment[]>(this.apiUrl);
    }

    addComment(comment: Comment): Observable<Comment> {
        return this.http.post<Comment>(this.apiUrl, comment);
    }
}
