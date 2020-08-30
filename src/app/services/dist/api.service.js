"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ApiService = void 0;
var core_1 = require("@angular/core");
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.getEducation = function () {
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
    };
    ApiService.prototype.getExperience = function () {
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
    };
    ApiService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
