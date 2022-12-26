import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {combineLatest, debounceTime, distinctUntilChanged, forkJoin, map, Observable, startWith} from "rxjs";
import {ApiService} from "../../core/services/api.service";
import {EDIDFile} from "../../core/models";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit {
  private readonly fileNames: string[] = ["BenQ SC3211", "Dell ZT60", "Haier LE39B50", "LG 50LA621Y",
    "Mag RD24L", "Normande ND3276", "Panasonic TH-L32B6", "Philips 55PFL6008",
    "Philips 226V4LSB", "Samsung UA46F6400", "Sharp LC50LE450M",
    "Samsung UA55F6400", "Sony KDL50W656"];

  protected queryControl: FormControl<string> = new FormControl<string>('', {nonNullable: true});

  protected files$!: Observable<EDIDFile[]>;

  constructor(private filesService: ApiService) {
  }

  ngOnInit(): void {
    const filesObservables: Observable<EDIDFile>[] = this.fileNames.map<Observable<EDIDFile>>((name: string) =>
      this.filesService.getFile(name));

    const loadedFiles: Observable<EDIDFile[]> = forkJoin(filesObservables);

    const query: Observable<string> = this.queryControl.valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      distinctUntilChanged()
    );

    this.files$ = combineLatest([loadedFiles, query])
      .pipe(
        map(([files, term]: [EDIDFile[], string]) => {
          return !!term ? files.filter((file: EDIDFile) => file.Name.toLowerCase().includes(term.toLowerCase())) : files
        })
      )
  }

}
