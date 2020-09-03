import { Injectable } from '@angular/core';
import Butter from 'buttercms';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _butterService = null;
  constructor() {
    this._butterService = Butter('fed7d717ce0e71dd943cba17237589d3eaafb275');

  }

  async getEducation(): Promise<IEducation[]> {
    const res = await this.getContent(['education']);
    return res.data.data.education;
  }

  async getCertification(): Promise<ICertification[]> {
    const res = await this.getContent(['certification']);
    return res.data.data.certification;
  }

  async getExperience(): Promise<IExperience[]> {
    const res = await this.getContent(['experience']);
    return res.data.data.experience;
  }

  async getAwards(): Promise<IAward[]> {
    const res = await this.getContent(['awards']);
    return res.data.data.awards;
  }

  async getPublications(): Promise<IPublication[]> {
    const res = await this.getContent(['publication']);
    return res.data.data.publication;
  }

  async getSocial(): Promise<ISocialNetwork[]> {
    const res = await this.getContent(['social-network']);
    return res.data.data['social-network'];
  }

  async getMenu(): Promise<ISidenav[]> {
    const res = await this.getContent(['sidenav']);
    return res.data.data.sidenav;
  }

  async getAbout(): Promise<IMeInfo> {
    const res = await this.getContent(['me-info']);
    const aboutMe = res.data.data['me-info'];
    if (aboutMe.length > 0) {
      return aboutMe[0];
    } else {
      return {} as IMeInfo;
    }
  }

  async getPortfolio(): Promise<IPortfolio[]> {
    const res = await this.getContent(['portfolio']);
    return res.data.data.portfolio;
  }


  async getContent(content: string[]) {
    return await this._butterService.content.retrieve(content);
  }
}
