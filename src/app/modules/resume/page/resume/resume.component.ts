import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../core/services/api.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  public education: IEducation[] = [];
  public certifications: ICertification[] = [];
  public experience: IExperience[] = [];

  constructor(
    private apiService: ApiService,
    private titleService: Title,
    private metaTagService: Meta
  ) {}

  async ngOnInit() {
    this.titleService.setTitle('Silveo Portfolio');
    this.metaTagService.updateTag({
      name: 'description',
      content: 'Soy Arturo Silvelo desarrollador JS Fullstack'
    });
    this.education = await this.apiService.getEducation();
    this.experience = await this.apiService.getExperience();
    this.certifications = await this.apiService.getCertification();
  }
}
