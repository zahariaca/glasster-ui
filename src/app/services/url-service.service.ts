import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }

  todo(urlValue) {
    console.log('UrlService-- ' + urlValue);
  }
}
