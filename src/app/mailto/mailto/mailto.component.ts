import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mailto',
  templateUrl: './mailto.component.html',
  styleUrls: ['./mailto.component.scss'],
  standalone: false,
})
export class MailtoComponent implements OnInit {
  subject = '';
  body = '';

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
    localStorage.setItem('variableNames', this.variableNames.join('\n'));
    localStorage.setItem('subjectTemplate', this.subject);
    localStorage.setItem('bodyTemplate', this.body);
    this.saveRows();

    const links: string[] = [];
    for (let i = 0; i < this.addresses.length; i++) {
      const link = this.getLink(i);
      links.push(link);
    }
    this.links = links;
  }

  updateRow(index: number): void {
    this.saveRows();
    this.links[index] = this.getLink(index);
  }

  private saveRows(): void {
    localStorage.setItem('addresses', this.addresses.join('\n'));
    localStorage.setItem('variables', this.variables.map(r => r.join('\t')).join('\n'));
  }

  private getLink(rowIndex: number): string {
    const recipient = this.addresses[rowIndex];
    const variables = this.variables[rowIndex];

    const subject = this.replaceVariables(this.subject, this.variableNames, variables);
    const body = this.replaceVariables(this.body, this.variableNames, variables);

    return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  replaceVariables(body: string, variableNames: string[], variables: string[]): string {
    for (let i = 0; i < variables.length; i++) {
      body = body.replace(`#${variableNames[i]}#`, variables[i] || '');
    }
    return body;
  }

  addRow(): void {
    this.addresses.push('');
    this.variables.push(this.variableNames.slice());
    this.links.push('');
  }

  deleteRow(index: number): void {
    this.addresses.splice(index, 1);
    this.variables.splice(index, 1);
    this.links.splice(index, 1);
    this.saveRows();
  }

  addColumn(): void {
    this.variableNames.push(`${this.variableNames.length}`);
    for (const row of this.variables) {
      row.push('');
    }
  }

  deleteColumn(index: number): void {
    this.variableNames.splice(index, 1);
    for (const row of this.variables) {
      row.splice(index, 1);
    }
    this.update();
  }

  index(index: number, value: any): number {
    return index;
  }

  paste(event: ClipboardEvent, startRowIndex: number, startColumnIndex: number): void {
    const clipboard = event.clipboardData;
    if (!clipboard) {
      return;
    }
    const text = clipboard.getData('text');

    const matrix = text.split('\n').map(s => s.split('\t'));

    if (matrix.length === 1 && matrix[0].length === 1) {
      return;
    }

    event.preventDefault();

    for (let i = 0; i < matrix.length; i++) {
      const rowIndex = startRowIndex + i;
      if (rowIndex >= this.addresses.length) {
        this.addRow();
      }

      for (let j = 0; j < matrix[i].length; j++) {
        const colIndex = startColumnIndex + j;
        if (colIndex >= this.variableNames.length) {
          this.addColumn();
        }

        if (colIndex === -1) {
          this.addresses[rowIndex] = matrix[i][j];
        } else {
          this.variables[rowIndex][colIndex] = matrix[i][j];
        }
      }
    }

    this.update();
  }
}
