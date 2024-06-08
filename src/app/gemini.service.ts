import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {

  private generativeAI: GoogleGenerativeAI;

  private messageHistory: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor() {
    this.generativeAI = new GoogleGenerativeAI('YOUR_API_KEY');
  }

  async generateText(prompt: string) {
    const model = this.generativeAI.getGenerativeModel({ model: 'gemini-pro' });
    this.messageHistory.next({
      from: 'user',
      message: prompt
    });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    this.messageHistory.next({
      from: 'bot',
      message: text
    })
  }

  public getMessageHistory(): Observable<any> {
    return this.messageHistory.asObservable();
  }
}
