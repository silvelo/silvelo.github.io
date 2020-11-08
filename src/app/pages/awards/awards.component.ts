import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {

  awards: IAward[] = [];
  publications: IPublication[] = [];

  constructor(private apiService: ApiService) { }

  async ngOnInit() {
    this.awards = await this.apiService.getAwards();
    this.publications = await this.apiService.getPublications();
  }
}
