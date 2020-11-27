import {Injectable} from "@angular/core";
import {Achievement} from "./model/achievement";
import {achievements, normalize} from "./model/achievements";

@Injectable({providedIn: 'root'})
export class AchievementService {
  pinned: Achievement[];
  completed: Achievement[];
  private _threeSymbolMode: boolean;

  constructor() {
    this._threeSymbolMode = localStorage.getItem('threeSymbolMode') === 'true';
    this.pinned = (localStorage.getItem('pinned') || '').split('\n').map(n => this.getAchievement(n)).filter(a => a);
    this.completed = (localStorage.getItem('completed') || '').split('\n').map(n => this.getAchievement(n)).filter(a => a);
  }

  get threeSymbolMode(): boolean {
    return this._threeSymbolMode;
  }

  set threeSymbolMode(value: boolean) {
    this._threeSymbolMode = value;
    localStorage.setItem('threeSymbolMode', `${value}`);
  }

  private getAchievement(title: string) {
    return achievements.find(a => a.title === title);
  }

  private savePinned() {
    localStorage.setItem('pinned', this.pinned.map(a => a.title).join('\n'));
  }

  private saveCompleted() {
    localStorage.setItem('completed', this.completed.map(a => a.title).join('\n'));
  }

  findMatching(searchText: string): Achievement[] {
    const normalized = normalize(searchText);
    return achievements.filter(achievement => {
      const anorm = this._threeSymbolMode ? achievement.threeSymbols : achievement.normalized;
      return anorm.startsWith(normalized);
    });
  }

  clearSaved() {
    this.pinned.length = 0;
    this.savePinned();
    this.completed.length = 0;
    this.saveCompleted();
  }

  pin(achievement: Achievement) {
    if (this.pinned.indexOf(achievement) < 0) {
      this.pinned.push(achievement);
      this.savePinned();
    }
    this.uncomplete(achievement);
  }

  unpin(achievement: Achievement) {
    const index = this.pinned.indexOf(achievement);
    if (index >= 0) {
      this.pinned.splice(index, 1);
      this.savePinned();
    }
  }

  complete(achievement: Achievement) {
    if (this.completed.indexOf(achievement) < 0) {
      this.completed.push(achievement);
      this.saveCompleted();
    }
    this.unpin(achievement);
  }

  uncomplete(achievement: Achievement) {
    const index = this.completed.indexOf(achievement);
    if (index >= 0) {
      this.completed.splice(index, 1);
      this.saveCompleted();
    }
  }
}
