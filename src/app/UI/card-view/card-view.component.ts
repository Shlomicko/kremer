import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {EDIDFile} from "../../core/models";

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardViewComponent {

  @Input() file!: EDIDFile;

}
