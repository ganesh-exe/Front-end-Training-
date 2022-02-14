import { Component, OnInit } from '@angular/core';
import { ProivideDataService } from '../proivide-data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  data:any;
  constructor(service:ProivideDataService) {
    service.getData().subscribe((data1)=>{
      this.data=data1;
    });
   }
  ngOnInit(): void {
  }

}
