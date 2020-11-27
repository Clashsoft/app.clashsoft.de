import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Achievement} from "../model/achievement";
import {achievements} from "../model/achievements";
import {AchievementService} from "../achievement.service";
import {ClipboardService} from "ngx-clipboard";

@Component({
  selector: 'app-payday2-secret',
  templateUrl: './payday2-secret.component.html',
  styleUrls: ['./payday2-secret.component.scss']
})
export class Payday2SecretComponent implements OnInit {
  achievements: Achievement[] = achievements;
  searchText: string = '';
  threeSymbolMode: boolean;

  constructor(
    private modalService: NgbModal,
    private achievementService: AchievementService,
    private clipboardService: ClipboardService,
  ) {
  }

  ngOnInit(): void {
    this.threeSymbolMode = this.achievementService.threeSymbolMode;
  }

  openModal(content): void {
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

  pin(achievement: Achievement) {
    this.achievementService.pin(achievement);
  }

  unpin(achievement: Achievement) {
    this.achievementService.unpin(achievement);
  }

  complete(achievement: Achievement) {
    this.achievementService.complete(achievement);
  }

  uncomplete(achievement: Achievement) {
    this.achievementService.uncomplete(achievement);
  }
}
