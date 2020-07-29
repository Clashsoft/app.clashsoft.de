import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-payday2-secret',
  templateUrl: './payday2-secret.component.html',
  styleUrls: ['./payday2-secret.component.scss']
})
export class Payday2SecretComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
  ) {
  }

  ngOnInit(): void {
  }

  openModal(content): void {
    this.modalService.open(content, {size: 'lg'});
  }
}
