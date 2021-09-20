import { ApplicationRef, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { SwUpdate } from '@angular/service-worker';

import { concat, interval, Observable, throwError } from 'rxjs';
import { catchError, first, retry } from 'rxjs/operators';

import { Item } from '../interfaces/item';
import { MessageService } from './message.service';
import { AddItem } from '../interfaces/additem';

@Injectable({
  providedIn: 'root'
})

export class ItemService {

  constructor(private http: HttpClient, private messageService: MessageService, 
    appRef: ApplicationRef, updates: SwUpdate) 
  {
    const appIsStable$ = appRef.isStable.pipe(first(isStable => isStable === true));
    const everySixHours$ = interval( 10 * 60 * 1000);
    const everySixHoursOnceAppIsStable$ = concat(appIsStable$, everySixHours$);

    everySixHoursOnceAppIsStable$.subscribe(() => updates.checkForUpdate());
    
  }

  private testUrl: string = "http://localhost:8080/items/";

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
  
  getItems(): Observable<Item[]> 
  {
    this.messageService.add("ItemService: Fetched items");
    return this.http.get<Item[]>(this.testUrl);
  }

  getItem(id: String): Observable<Item> 
  {
    this.messageService.add(`ItemService: Fetched item: ${id}`);
    return this.http.get<Item>(this.testUrl + id);
  }

  postItem(item: AddItem): Observable<AddItem>
  { 
    return this.http.post<AddItem>(this.testUrl, item);
  
  }

  deleteItem(item: Item): Observable<Item>
  { 
    const url = `${this.testUrl}${item.id}`;

    return this.http.delete<Item>(url);
  }
}
