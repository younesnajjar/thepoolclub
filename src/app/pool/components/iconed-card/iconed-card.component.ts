import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-iconed-card',
    templateUrl: './iconed-card.component.html',
    styleUrls: ['./iconed-card.component.scss']
})
export class IconedCardComponent implements OnInit {

    @Input() title: string;
    @Input() value: string;
    @Input() valueSymbol: string;
    @Input() improvement: string;
    @Input() improvementSymbol: string;
    @Input() improvementText: string;
    @Input() icon: string = 'shopping-cart';
    @Input() iconColor: string = 'blue';

    constructor() {
    }

    ngOnInit(): void {
    }

}
