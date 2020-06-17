import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { IPolicies } from 'src/app/interfaces/i-policies';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.page.html',
  styleUrls: ['./policies.page.scss'],
})
export class PoliciesPage implements OnInit {
  data: IPolicies;
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.apiService.getData().subscribe(data => this.data = data.policies)
  }

  test(){
    console.log(this.data[0].detail);
  }

}
