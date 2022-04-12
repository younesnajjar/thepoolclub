import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoolRoutingModule } from './pool-routing.module';
import { HomeComponent } from './home/home.component';
import {MenuModule} from "primeng/menu";
import {ChartModule} from "primeng/chart";
import {TableModule} from "primeng/table";
import { GameComponent } from './components/game/game.component';
import { ProfileComponent } from './components/profile/profile.component';
import {AvatarModule} from "primeng/avatar";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import { IconedCardComponent } from './components/iconed-card/iconed-card.component';
import { DashboaedNotificationsComponent } from './components/dashboaed-notifications/dashboaed-notifications.component';
import { DashboaedNotificationsItemComponent } from './components/dashboaed-notifications-item/dashboaed-notifications-item.component';


@NgModule({
  declarations: [
    HomeComponent,
    GameComponent,
    ProfileComponent,
    IconedCardComponent,
    DashboaedNotificationsComponent,
    DashboaedNotificationsItemComponent
  ],
    imports: [
        CommonModule,
        PoolRoutingModule,
        MenuModule,
        ChartModule,
        TableModule,
        AvatarModule,
        ButtonModule,
        RippleModule
    ]
})
export class PoolModule { }
