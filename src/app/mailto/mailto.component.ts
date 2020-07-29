import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mailto',
  templateUrl: './mailto.component.html',
  styleUrls: ['./mailto.component.scss']
})
export class MailtoComponent implements OnInit {
  subject: string = '';
  body: string = '';
  addressList: string = '';
  variableList: string = '';
  rows: number = 2;

  links: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.subject = localStorage.getItem('subjectTemplate') || '';
    this.body = localStorage.getItem('bodyTemplate') || '';
    this.addressList = localStorage.getItem('addresses') || '';
    this.variableList = localStorage.getItem('variables') || '';
    this.update();
  }

  update(): void {
    localStorage.setItem('subjectTemplate', this.subject);
    localStorage.setItem('bodyTemplate', this.body);
    localStorage.setItem('addresses', this.addressList);
    localStorage.setItem('variables', this.variableList);

    const addressLines = this.addressList.split('\n');
    const variableLines = this.variableList.split('\n');

    const maxRows = Math.max(addressLines.length, variableLines.length);
    this.rows = maxRows + 2;

    const links: string[] = [];
    for (let i = 0; i < addressLines.length; i++) {
      const recipient = addressLines[i];
      const variables = (variableLines[i] || '').split('\t');

      const subject = this.replaceVariables(this.subject, variables);
      const body = this.replaceVariables(this.body, variables);

      links.push(`mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    }
    this.links = links;
  }

  replaceVariables(body: string, variables: string[]): string {
    for (let i = 0; i < variables.length; i++) {
      body = body.replace(`#${i + 1}#`, variables[i] || '');
    }
    return body;
  }
}
