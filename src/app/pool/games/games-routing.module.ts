import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GamesListComponent} from "./games-list/games-list.component";
import {LiveGamesComponent} from "./live-games/live-games.component";

const routes: Routes = [
    {
        path: '',
        component: LiveGamesComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
