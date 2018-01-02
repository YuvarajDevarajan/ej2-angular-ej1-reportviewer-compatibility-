import { Component } from '@angular/core';
import { gridData } from './grid-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	public serviceUrl: string;    
    public reportPath: string;	
  public data: string[] = ['Snooker', 'Tennis', 'Cricket', 'Football', 'Rugby'];  
  public title = 'Average Sales Comparison';
  constructor() {
      // code
	   this.serviceUrl = 'http://js.syncfusion.com/ejservices/api/ReportViewer';        
        this.reportPath = 'GroupingAgg.rdl'; 
  }
}
