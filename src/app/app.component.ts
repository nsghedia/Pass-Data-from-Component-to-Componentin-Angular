import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PassDatafromComponenttoComponentinAngular';
  tableData = [
    {
      FirstName: "Gururaj",
      LastName: "Jewargi",
      Mobile: 1234567890,
      Location: "Bangalore"
    },
    {
      FirstName: "RAju",
      LastName: "Jewargi",
      Mobile: 1478523690,
      Location: "Gulbarga"
    },
    {
      FirstName: "Guru",
      LastName: "Jewargi",
      Mobile: 9874563215,
      Location: "Kalaburagi"
    }
  ]

  submitted(obj: any) {
    this.tableData.push({
      FirstName: obj.FirstName, LastName: obj.LastName,
      Mobile: obj.Mobile, Location: obj.Location
    })
  }

  DeletedItem(values: any) {
    for (var i = this.tableData.length - 1; i >= 0; i--) {
      if (this.tableData[i].Mobile === values) {
        this.tableData.splice(i, 1);
      }
    }
  }

}
