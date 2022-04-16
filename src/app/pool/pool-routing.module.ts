import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";

const routes: Routes = [{
    path: '',
    redirectTo: 'dashboard'
},
    {
        path: 'dashboard',
        component: HomeComponent
    },
    {
        path: 'games',
        loadChildren: () => import('./games/games.module').then((m) => m.GamesModule)
    },
    {
        path: 'players',
        loadChildren: () => import('./players/players.module').then((m) => m.PlayersModule)
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoolRoutingModule { }
