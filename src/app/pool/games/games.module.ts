import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesListComponent } from './games-list/games-list.component';
import { LiveGamesComponent } from './live-games/live-games.component';
import {OrderListModule} from "primeng/orderlist";


@NgModule({
  declarations: [
    GamesListComponent,
    LiveGamesComponent
  ],
    imports: [
        CommonModule,
        GamesRoutingModule,
        OrderListModule
    ]
})
export class GamesModule { }
