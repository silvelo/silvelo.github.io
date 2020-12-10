import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  me: IMeInfo = {} as IMeInfo;

  constructor(
    private apiService: ApiService,
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  async ngOnInit() {
    this.titleService.setTitle('Arturo Silvelo | Portfolio');
    this.metaTagService.updateTag({ name: 'description', content: 'Soy Arturo Silvelo desarrollador JS Fullstack entra para más información sobre mí.' });
    this.metaTagService.updateTag({ name: 'robots', content: 'index, follow' });
    this.metaTagService.updateTag({ name: 'keywords', content: 'silvelo, personal, resume, angular, javascript, typescript, developer' });
    this.me = await this.apiService.getAbout();

  }


}
