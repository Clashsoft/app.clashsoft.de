import {Injectable} from '@angular/core';

import {Achievement} from './model/achievement';
import {achievements, normalize} from './model/achievements';

@Injectable({providedIn: 'root'})
export class AchievementService {
  pinned: Achievement[];
  completed: Achievement[];
  #threeSymbolMode: boolean;

  constructor() {
    this.#threeSymbolMode = localStorage.getItem('threeSymbolMode') === 'true';
    this.pinned = (localStorage.getItem('pinned') || '').split('\n').map(n => this.getAchievement(n)).filter(a => a);
    this.completed = (localStorage.getItem('completed') || '').split('\n').map(n => this.getAchievement(n)).filter(a => a);
  }

  get threeSymbolMode(): boolean {
    return this.#threeSymbolMode;
  }

  set threeSymbolMode(value: boolean) {
    this.#threeSymbolMode = value;
    localStorage.setItem('threeSymbolMode', `${value}`);
  }

  private getAchievement(title: string): Achievement | undefined {
    return achievements.find(a => a.title === title);
  }

  private savePinned(): void {
    localStorage.setItem('pinned', this.pinned.map(a => a.title).join('\n'));
  }

  private saveCompleted(): void {
    localStorage.setItem('completed', this.completed.map(a => a.title).join('\n'));
  }

  findMatching(searchText: string): Achievement[] {
    const normalized = normalize(searchText);
    return achievements.filter(achievement => {
      const anorm = this.#threeSymbolMode ? achievement.threeSymbols : achievement.normalized;
      return anorm.startsWith(normalized);
    });
  }

  clearSaved(): void {
    this.pinned.length = 0;
    this.savePinned();
    this.completed.length = 0;
    this.saveCompleted();
  }

  pin(achievement: Achievement): void {
    if (this.pinned.indexOf(achievement) < 0) {
      this.pinned.push(achievement);
      this.savePinned();
    }
    this.uncomplete(achievement);
  }

  unpin(achievement: Achievement): void {
    const index = this.pinned.indexOf(achievement);
    if (index >= 0) {
      this.pinned.splice(index, 1);
      this.savePinned();
    }
  }

  complete(achievement: Achievement): void {
    if (this.completed.indexOf(achievement) < 0) {
      this.completed.push(achievement);
      this.saveCompleted();
    }
    this.unpin(achievement);
  }

  uncomplete(achievement: Achievement): void {
    const index = this.completed.indexOf(achievement);
    if (index >= 0) {
      this.completed.splice(index, 1);
      this.saveCompleted();
    }
  }
}
