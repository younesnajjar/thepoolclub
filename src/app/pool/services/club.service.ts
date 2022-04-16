import {Injectable} from '@angular/core';
import {AngularFirestore} from "angularfire2/firestore";

@Injectable({
    providedIn: 'root'
})
export class ClubService {

    constructor(private db: AngularFirestore) {}
    getData() {

    }
    getClubWaitingList() {
        return this.db.collection('/clubs').doc('/2JRrI2LnnzjGyoZDJ5jt').valueChanges();
    }
}
