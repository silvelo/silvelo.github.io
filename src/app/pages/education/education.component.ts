import { Component, OnInit } from '@angular/core';
import { ApiService, Education } from 'src/app/services/api.service';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  education: Education[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.education = this.apiService.getEducation();
  }

}
