import { MatIconModule } from '@angular/material/icon';
import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../Service/User/user-service.service';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CargoService } from '../../Service/Cargo/cargo.service';
import { DepartamentoService } from '../../Service/Departamento/departamento.service';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { DeleteComponent } from '../delete/delete.component';
import { CreateUserComponent } from '../create-user/create-user.component';
import { UpdateUserComponent } from '../update-user/update-user.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatTableModule,
    CommonModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    FontAwesomeModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;
  data: any[] = [];
  dataCargo: any[] = [];
  dataDepartamento: any[] = [];
  cargo: any;
  displayedColumns: string[] = [
    'Usuario',
    'Nombre',
    'Apellido',
    'Departamento',
    'Cargo',
    'Email',
  ];
  constructor(private userService: UserServiceService, 
    private cargoService: CargoService, 
    private departamentoService:DepartamentoService,
    public dialog: MatDialog) {}
  ngOnInit(): void {
    this.llenarData();
    this.llenarCargo();
    this.llenarDepartamento();
  }
  llenarData() {
    this.userService.getData().subscribe((data) => {
      this.data = data;
    });
  }
  llenarCargo(){
    this.cargoService.getData().subscribe((data) => {
      this.dataCargo = data;
    });
  }
  llenarDepartamento(){
    this.departamentoService.getData().subscribe((data) => {
      this.dataDepartamento = data;
    });
  }
  getCargo(id:any){
    this.cargoService.getDataOne(id).subscribe((data) => {
      this.cargo = data;
    });
    return this.cargo.name;
  }
  openDialogCreate():void{
    const dialogRef = this.dialog.open(CreateUserComponent, {
      height: '550px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  openDialogUpdate(id: any): void {
    const dialogRef = this.dialog.open(UpdateUserComponent, {
      data:{id: id},
      height: '550px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  openDialogDelete(id: any): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      data:{id: id},
      width: '550px',
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
