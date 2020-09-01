import { Component, OnInit } from '@angular/core';
import { ApiService, } from 'src/app/services/api.service';
import { ICertification, IEducation } from '../../services/api.service';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  education: IEducation[] = [];
  certification: ICertification[] = [];
  constructor(private apiService: ApiService) { }

  async ngOnInit() {
    this.education = await this.apiService.getEducation();
    this.certification = await this.apiService.getCertification();
  }

}
