import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { IData } from 'src/app/interfaces/i-data';
import { IServicing } from 'src/app/interfaces/i-servicing';

@Component({
  selector: 'app-policy-servicing',
  templateUrl: './policy-servicing.page.html',
  styleUrls: ['./policy-servicing.page.scss'],
})
export class PolicyServicingPage implements OnInit {
data: IServicing;
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.apiService.getData().subscribe(data => this.data = data.servicing)
  }



}
