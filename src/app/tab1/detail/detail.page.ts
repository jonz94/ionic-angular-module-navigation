import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
})
export class DetailPage {
  currentPageId: string;

  constructor(
    private route: ActivatedRoute,
    private navController: NavController
  ) {
    this.currentPageId = this.route.snapshot.paramMap.get('id') ?? '1';
  }

  goToPreviousPage() {
    const previousPageId = Number(this.currentPageId) - 1;

    this.navController.navigateRoot(`/tabs/tab1/${previousPageId}`);
  }

  goToNextPage() {
    const nextPageId = Number(this.currentPageId) + 1;

    this.navController.navigateRoot(`/tabs/tab1/${nextPageId}`);
  }
}
