import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {

  awards: IAward[] = [];
  publications: IPublication[] = [];

  constructor(
    private apiService: ApiService,
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  async ngOnInit() {
    this.titleService.setTitle('Silveo Portfolio');
    this.metaTagService.updateTag({ name: 'description', content: 'Soy Arturo Silvelo desarrollador JS Fullstack' });
    this.awards = await this.apiService.getAwards();
    this.publications = await this.apiService.getPublications();
  }
}
