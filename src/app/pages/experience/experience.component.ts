import { Component, OnInit } from '@angular/core';
import { ApiService, Experience } from 'src/app/services/api.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experience: Experience[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.experience = this.apiService.getExperience();
  }

}
