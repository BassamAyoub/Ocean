import { Component } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name:string = '';

  //header('Access-Control-Allow-Origin', '*');
constructor (private httpClient: HttpClient)
{}
onNameKeyUP(event:any){
  this.name = event.target.value;

}
getProfile()
{
 // this.httpClient.get('http://www.dneonline.com/calculator.asmx?op=Add&intA=1&intB=2')
 this.httpClient.get('https://api.test.hotelbeds.com/hotel-api')
  .subscribe(
    (data:any[]) =>{
      console.log(data);
    });
}
}

