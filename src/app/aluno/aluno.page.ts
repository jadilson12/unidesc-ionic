import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.page.html',
  styleUrls: ['./aluno.page.scss']
})
export class AlunoPage implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {}

  rota(): void {
    //this.route.navigate;
  }
}
