import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-space-x',
  templateUrl: './space-x.component.html',
  styleUrls: ['./space-x.component.css']
})
export class SpaceXComponent implements OnInit {
  data: any
  link = 'https://api.spacexdata.com/v3/missions'
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.link).subscribe((responseData: any) => {
      this.data=responseData;
    })
  }

}
