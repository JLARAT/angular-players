import { Injectable } from '@angular/core';
import { Player } from './player';
import { Observable } from 'rxjs/Observable';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()

export class PlayerService {

  private playersUrl = 'api/players';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.playersUrl).pipe(
      catchError(this.handleError('getPlayers', []))
    );
    
  }

  private log(message: string) {
    this.messageService.add(`PlayerService: ${message}`);
  }


private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
 
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
 
    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);
 
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  /*
  getPlayer(id: number): Observable<Player> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`PlayerService: fetched player id=${id}`);
    return of(PLAYERS.find(player => player.id === id));
  }*/

}
