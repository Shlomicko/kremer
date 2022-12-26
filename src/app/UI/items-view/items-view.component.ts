import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {EDIDFile} from "../../core/models";

@Component({
  selector: 'app-items-view',
  templateUrl: './items-view.component.html',
  styleUrls: ['./items-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsViewComponent {

  @Input() files!: EDIDFile[];

}
