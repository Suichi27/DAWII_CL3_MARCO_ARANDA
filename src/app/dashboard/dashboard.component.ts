import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private route: ActivatedRoute,
    private router: Router){

    }

    irPaginaHome(): void{
      this.router.navigate(['home'],{relativeTo: this.route});
    }

    irPaginaPromedio(): void{
      this.router.navigate(['promedio'], {relativeTo: this.route});
    }

    irPaginaLista(): void{
      this.router.navigate(['lista'], {relativeTo: this.route});
    }

}
