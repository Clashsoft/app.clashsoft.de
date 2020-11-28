import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TemplateService {

  constructor() {
  }

  get savedTemplate(): string {
    return localStorage.getItem('grading-helper/template') || '';
  }

  set savedTemplate(value: string) {
    localStorage.setItem('grading-helper/template', value);
  }
}
