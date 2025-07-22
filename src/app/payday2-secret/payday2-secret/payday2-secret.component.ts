import {Component, OnInit, TemplateRef} from '@angular/core';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ClipboardService} from 'ngx-clipboard';

import {Achievement} from '../model/achievement';
import {achievements} from '../model/achievements';
import {AchievementService} from '../achievement.service';

@Component({
  selector: 'app-payday2-secret',
  templateUrl: './payday2-secret.component.html',
  styleUrls: ['./payday2-secret.component.scss'],
  standalone: false,
})
export class Payday2SecretComponent implements OnInit {
  achievements: Achievement[] = achievements;
  searchText = '';
  threeSymbolMode!: boolean;

  constructor(
    private modalService: NgbModal,
    private achievementService: AchievementService,
    private clipboardService: ClipboardService,
  ) {
  }

  ngOnInit(): void {
    this.threeSymbolMode = this.achievementService.threeSymbolMode;
  }

  openModal(content: TemplateRef<unknown>): void {
    this.modalService.open(content, {size: 'lg'});
  }

  inputChanged(): void {
    this.achievementService.threeSymbolMode = this.threeSymbolMode;
    this.achievements = this.achievementService.findMatching(this.searchText);
  }

  clearSaved(): void {
    if (confirm('Discard all saved achievements? This cannot be undone.')) {
      this.achievementService.clearSaved();
    }
  }

  copySaved(): void {
    const text = [...this.achievementService.pinned, ...this.achievementService.completed].map(a => a.title).join('\n');
    this.clipboardService.copy(text);
  }

  get pinned(): Achievement[] {
    return this.achievementService.pinned;
  }

  get completed(): Achievement[] {
    return this.achievementService.completed;
  }

  pin(achievement: Achievement): void {
    this.achievementService.pin(achievement);
  }

  unpin(achievement: Achievement): void {
    this.achievementService.unpin(achievement);
  }

  complete(achievement: Achievement): void {
    this.achievementService.complete(achievement);
  }

  uncomplete(achievement: Achievement): void {
    this.achievementService.uncomplete(achievement);
  }
}
