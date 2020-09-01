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
    const res = await this._butterService.content.retrieve(['education']);
    return res.data.data.education;
  }

  async getCertification(): Promise<ICertification[]> {
    const res = await this._butterService.content.retrieve(['certification']);
    return res.data.data.certification;
  }

  async getExperience(): Promise<IExperience[]> {
    const res = await this._butterService.content.retrieve(['experience']);
    return res.data.data.experience;
  }

  async getAwards(): Promise<IAward[]> {
    const res = await this._butterService.content.retrieve(['awards']);
    return res.data.data.awards;
  }


  async getPublications(): Promise<IPublication[]> {
    const res = await this._butterService.content.retrieve(['publication']);
    return res.data.data.publication;
  }
}

export interface IEducation {
  degree: string;
  start_date: string;
  end_date: string;
  college_name: string;
  college_logo: string;
}

export interface IAward {
  title: string;
  issuer: string;
  description: string;
  expedition: Date;
}
export interface IExperience {
  position: string;
  start_date: string;
  end_date: string;
  company_name: string;
  description: string;
  company_logo: string;
}

export interface ICertification {
  title: string;
  company_name: string;
  company_logo: string;
  expedition: Date;
  credential_url: string;
}

export interface IPublication {
  title: string;
  editorial: string;
  publication_date: Date;
  author: string;
  publication_url: string;
  description: string;
}