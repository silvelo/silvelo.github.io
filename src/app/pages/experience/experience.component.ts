import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experience: IExperience[] = [];
  awards: IAward[] = [];
  publications: IPublication[] = [];

  constructor(private apiService: ApiService) { }

  async ngOnInit() {
    this.experience = await this.apiService.getExperience();
    this.awards = await this.apiService.getAwards();
    this.publications = await this.apiService.getPublications();
  }

}
