import {ChangeDetectionStrategy, Component, EventEmitter, forwardRef, OnDestroy, OnInit, Output} from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-query-box',
  templateUrl: './query-box.component.html',
  styleUrls: ['./query-box.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => QueryBoxComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QueryBoxComponent implements OnInit, OnDestroy, ControlValueAccessor {

  @Output() textChange: EventEmitter<string> = new EventEmitter<string>();

  protected textControl: FormControl<string> = new FormControl<string>('', {nonNullable: true});
  private unSubscriber: Subject<void> = new Subject<void>();
  public onChange!: any;
  public onTouch!: any;

  ngOnInit(): void {
    this.textControl.valueChanges
      .pipe(takeUntil(this.unSubscriber))
      .subscribe((text: string) => this.onChange?.(text))
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public writeValue(obj: any): void {
    this.textControl.patchValue(obj);
  }

  public registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  ngOnDestroy(): void {
    this.unSubscriber.next();
    this.unSubscriber.complete();
  }
}
