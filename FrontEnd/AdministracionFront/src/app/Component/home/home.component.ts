import { MatIconModule } from '@angular/material/icon';
import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../Service/user-service.service';
import {MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, CommonModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  data: any[] = [];
  displayedColumns: string[] = ['id', 'usuario', 'primerNombre', 'segundoNombre', 'primerApellido', 'segundoApellido'];
  constructor(private userService: UserServiceService){}
  ngOnInit(): void{
    this.llenarData();
  }
  llenarData(){
    this.userService.getData().subscribe(data =>{
      this.data = data;
    })
  }
  mostrarMensaje(): void {
    alert('Aún en proceso...');
  }
}
