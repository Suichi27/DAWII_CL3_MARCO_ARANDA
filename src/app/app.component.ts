import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DAWII_CL3_MARCO_ARANDA';
  constructor(private router:Router){}
  Listar(){this.router.navigate(['listar'])}
}
