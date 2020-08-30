"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var service_worker_1 = require("@angular/service-worker");
var environment_1 = require("../environments/environment");
var animations_1 = require("@angular/platform-browser/animations");
var home_component_1 = require("./pages/home/home.component");
var shared_module_1 = require("./shared/shared.module");
var about_component_1 = require("./pages/about/about.component");
var skills_component_1 = require("./pages/skills/skills.component");
var work_component_1 = require("./pages/work/work.component");
var contact_component_1 = require("./pages/contact/contact.component");
var education_component_1 = require("./pages/education/education.component");
var experience_component_1 = require("./pages/experience/experience.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                about_component_1.AboutComponent,
                skills_component_1.SkillsComponent,
                work_component_1.WorkComponent,
                contact_component_1.ContactComponent,
                education_component_1.EducationComponent,
                experience_component_1.ExperienceComponent,
                home_component_1.HomeComponent,
                about_component_1.AboutComponent,
                skills_component_1.SkillsComponent,
                education_component_1.EducationComponent,
                experience_component_1.ExperienceComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                service_worker_1.ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment_1.environment.production }),
                animations_1.BrowserAnimationsModule,
                shared_module_1.SharedModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
