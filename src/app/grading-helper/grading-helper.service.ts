import {Injectable} from '@angular/core';
import {GradingTab} from './model/grading-tab';

@Injectable({
  providedIn: 'root',
})
export class GradingHelperService {
  private readonly prefix = 'grading-helper/tabs/';

  saveTab(tab: GradingTab): void {
    localStorage.setItem(this.prefix + tab.id, JSON.stringify(tab));
  }

  loadTab(id: string): GradingTab | undefined {
    const stored = localStorage.getItem(this.prefix + id);
    return stored ? JSON.parse(stored) : undefined;
  }

  loadTabs(): GradingTab[] {
    const result: GradingTab[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)!;
      if (key.startsWith(this.prefix)) {
        result.push(this.loadTab(key.substring(this.prefix.length))!);
      }
    }
    return result;
  }

  deleteTab(id: string): void {
    localStorage.removeItem(this.prefix + id);
  }
}
