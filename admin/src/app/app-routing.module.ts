import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from "./main/main.component";
import { AdminComponent } from "./admin/admin.component";
import {AuthGuardService} from "./services/authguard/auth-guard.service";

import {ShowSearchComponent} from "./show/show-search.component";
import {ShowFormComponent} from "./show/show-form.component";
import {EventSearchComponent} from "./event/event-search.component";
import {EventFormComponent} from "./event/event-form.component";

const routes: Routes = [
    {path:"", redirectTo: "/main", pathMatch: "full"},
    {path:"main", component: MainComponent},
    {path:"admin", component: AdminComponent, canActivate: [AuthGuardService],
        children: [
            {path:"showsearch", component: ShowSearchComponent},
            {path: "showform/:name/:year", component: ShowFormComponent},
            {path:"eventsearch", component: EventSearchComponent},
            {path:"eventform/:id", component: EventFormComponent}
        ]
    }
];



@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}