import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mailto',
  templateUrl: './mailto.component.html',
  styleUrls: ['./mailto.component.scss']
})
export class MailtoComponent implements OnInit {
  subject: string = '';
  body: string = '';

  addresses: string[] = [];
  variableNames: string[] = ['1'];
  variables: string[][] = [];
  links: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.subject = localStorage.getItem('subjectTemplate') || '';
    this.body = localStorage.getItem('bodyTemplate') || '';
    this.variableNames = (localStorage.getItem('variableNames') || '').split('\n');
    this.addresses = (localStorage.getItem('addresses') || '').split('\n');
    this.variables = (localStorage.getItem('variables') || '').split('\n').map(s => s.split('\t'));
    this.update();
  }

  update(): void {
    console.log('update');

    localStorage.setItem('variableNames', this.variableNames.join('\n'));
    localStorage.setItem('subjectTemplate', this.subject);
    localStorage.setItem('bodyTemplate', this.body);
    localStorage.setItem('addresses', this.addresses.join('\n'));
    localStorage.setItem('variables', this.variables.map(r => r.join('\t')).join('\n'));

    const links: string[] = [];
    for (let i = 0; i < this.addresses.length; i++) {
      const recipient = this.addresses[i];
      const variables = this.variables[i];

      const subject = this.replaceVariables(this.subject, this.variableNames, variables);
      const body = this.replaceVariables(this.body, this.variableNames, variables);

      links.push(`mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    }
    this.links = links;
  }

  replaceVariables(body: string, variableNames: string[], variables: string[]): string {
    for (let i = 0; i < variables.length; i++) {
      body = body.replace(`#${variableNames[i]}#`, variables[i] || '');
    }
    return body;
  }

  addRow(): void {
    this.variables.push(this.variableNames.slice());
  }

  addColumn(): void {
    this.variableNames.push(`${this.variableNames.length}`);
    for (let row of this.variables) {
      row.push('');
    }
  }

  index(index: number, value: any): number {
    return index;
  }
}
