import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  public education: IEducation[] = [];
  public certifications: ICertification[] = [];
  public experience: IExperience[] = [];

  constructor(private apiService: ApiService) { }

  async ngOnInit() {
    this.education = await this.apiService.getEducation();
    this.experience = await this.apiService.getExperience();
    this.certifications = await this.apiService.getCertification();
  }

}
