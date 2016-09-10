import {Component, OnChanges, Input } from "angular2/core";
import {Output} from "angular2/src/core/metadata";
import {EventEmitter} from "angular2/src/facade/async";

@Component({
    selector: 'common-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})
export class StarComponent {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> =
        new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }

    onClick() {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}