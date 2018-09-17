import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

 employees: any[];

  constructor() { 
    this.employees = [
      {code:'emp001',name:'Ram',gender:'male',salary:2000,dateofbirth:'10/25/1987'},
      {code:'emp002',name:'Raju',gender:'male',salary:8300,dateofbirth:'05/01/1987'},
      {code:'emp003',name:'Mani',gender:'female',salary:9300,dateofbirth:'09/01/1987'},
      {code:'emp004',name:'Sanjay',gender:'male',salary:2300,dateofbirth:'05/10/1999'},
      {code:'emp005',name:'Visa',gender:'female',salary:2700,dateofbirth:'05/05/1989'},
  ];
  }

  ngOnInit() {
  }

}
