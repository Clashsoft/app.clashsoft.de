import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Achievement} from "./achievement.interface";
import {achievements} from "./achievements";
import {AchievementService} from "./achievement.service";

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
  }

  copySaved(): void {
  }

  pinned(achievement: Achievement) {
    this.achievementService.pin(achievement);
  }

  completed(achievement: Achievement) {
    this.achievementService.complete(achievement);
  }
}
