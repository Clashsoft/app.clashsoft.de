import {Injectable} from "@angular/core";
import {Achievement} from "./achievement.interface";
import {achievements, normalize} from "./achievements";

@Injectable({providedIn: 'root'})
export class AchievementService {
  pinned: Achievement[];
  completed: Achievement[];
  threeSymbolMode: boolean;

  constructor() {
    this.threeSymbolMode = localStorage.getItem('threeSymbolMode') === 'true';
    this.pinned = (localStorage.getItem('pinned') ?? '').split('\n').map(n => this.getAchievement(n));
    this.completed = (localStorage.getItem('completed') ?? '').split('\n').map(n => this.getAchievement(n));
  }

  private getAchievement(title: string) {
    return achievements.find(a => a.title === title);
  }

  findMatching(searchText: string): Achievement[] {
    const normalized = normalize(searchText);
    return achievements.filter(achievement => {
      const anorm = this.threeSymbolMode ? achievement.threeSymbols : achievement.normalized;
      return anorm.startsWith(normalized);
    });
  }
}
