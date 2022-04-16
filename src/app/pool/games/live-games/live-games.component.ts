import {Component, OnInit} from '@angular/core';
import {ClubService} from "../../services/club.service";

@Component({
    selector: 'app-live-games',
    templateUrl: './live-games.component.html',
    styleUrls: ['./live-games.component.scss']
})
export class LiveGamesComponent implements OnInit {

    club;

    constructor(private clubService: ClubService) {
    }

    ngOnInit(): void {
        this.clubService.getClubWaitingList().subscribe((club: any) => {
        // .then(a => console.log(a.data()))
            console.log(club.waitingList[0].player);
            console.log(club)
            this.club = club;
        });
    }

}
