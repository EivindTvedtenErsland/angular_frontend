import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MessageService 
{
  messages: string[] = [];

  add(message: string) 
  {
    this.messages.push(message);
  }

  clear() 
  {
    this.messages = [];
    this.messages.push("Messages Cleared!")
  }
  
  length() 
  {
    return this.messages.length;
  }
}