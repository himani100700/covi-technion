import { Component, OnInit, ViewChild } from '@angular/core';
import { CovitechnionService } from "../covitechnion.service";
// import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {
  // [x: string]: any;
  // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private service: CovitechnionService) {
    this.covidata = new Array<any>()
   }
  covidata: Array<any>;
  totalRecords: string;
page: number=1;
  ngOnInit(): void {
    // this.dataSource.paginator = this.paginator;
    this.service.covidData().subscribe(
      (data)=>{
        this.covidata=data;
        this.totalRecords= data.length
        console.warn(data)
      }
    )
  }

}
