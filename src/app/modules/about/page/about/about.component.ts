import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Meta, SafeHtml, Title } from '@angular/platform-browser';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  me: IMeInfo = {} as IMeInfo;
  aboutMe: SafeHtml;
  constructor(
    private domSanitizer: DomSanitizer,
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

    this.me = await this.apiService.getAbout();

    this.aboutMe = this.domSanitizer.bypassSecurityTrustHtml(this.me.about_me);
  }
}
