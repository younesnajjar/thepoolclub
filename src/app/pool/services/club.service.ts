import {Injectable} from '@angular/core';
import {AngularFirestore} from "angularfire2/firestore";

@Injectable({
    providedIn: 'root'
})
export class ClubService {

    constructor(private db: AngularFirestore) {
        console.log('hello');
        db.collection('clubs').valueChanges().subscribe((response) => {
            console.log('reponse ', response);
        }, err => console.log(err));
    }
    getData() {

    }
}
