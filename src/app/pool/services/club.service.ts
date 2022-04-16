import {Injectable} from '@angular/core';
import {AngularFirestore} from "angularfire2/firestore";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ClubService {

    constructor(private db: AngularFirestore, private http: HttpClient) {}
    getData() {

    }
    getClubWaitingList() {
        return this.http.get(environment.base_url + '/hello');
        // return this.db.collection('/clubs').doc('/2JRrI2LnnzjGyoZDJ5jt').valueChanges();
    }
}
