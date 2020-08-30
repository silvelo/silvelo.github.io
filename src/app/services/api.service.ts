import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getEducation(): Education[] {
    return [{
      degree: 'Graduado en Ingenieria Informatica',
      startDate: '1598798291676',
      endDate: '1598798291676',
      college: 'Universidade Da Coruña',
      logo: './assets/images/udc.png'
    },
    {
      degree: 'Máster en Ciberseguridad',
      startDate: '1598798291676',
      endDate: '1598798291676',
      college: 'Universidade Da Coruña',
      logo: './assets/images/udc.png'
    }
    ];

  }

  getExperience(): Experience[] {
    return [{
      position: 'Javascript Full Stack Developer',
      startDate: '1598798291676',
      endDate: '1598798291676',
      company: 'CITIC Centro de Investigación TIC',
      description: '',
      logo: './assets/images/citic.png'
    },
    {
      position: 'Javascript Full Stack Developer',
      startDate: '1598798291676',
      endDate: '1598798291676',
      company: 'Ágora binaria',
      description: '',
      logo: './assets/images/agora_binaria.png'
    }
    ];
  }
}

export interface Education {
  degree: string;
  startDate: string;
  endDate: string;
  college: string;
  logo: string;
}

export interface Experience {
  position: string;
  startDate: string;
  endDate: string;
  company: string;
  description: string;
  logo: string;
}
