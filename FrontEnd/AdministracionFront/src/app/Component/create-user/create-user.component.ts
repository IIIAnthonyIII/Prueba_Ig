import { UserServiceService } from '../../Service/User/user-service.service';
import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CargoService } from '../../Service/Cargo/cargo.service';
import { DepartamentoService } from '../../Service/Departamento/departamento.service';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [
    MatGridListModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatSelectModule,
  ],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css',
})
export class CreateUserComponent implements OnInit{
  user: any = {};
  dataCargo: any[] = [];
  dataDepartamento: any[] = [];

  constructor(
    private cargoService: CargoService,
    private departamentoService: DepartamentoService,
    public dialogRef: MatDialogRef<CreateUserComponent>,
    private userService: UserServiceService
  ) {}

  ngOnInit(): void {
    this.llenarCargo();
    this.llenarDepartamento();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  llenarCargo() {
    this.cargoService.getData().subscribe((data) => {
      this.dataCargo = data;
    });
  }
  llenarDepartamento() {
    this.departamentoService.getData().subscribe((data) => {
      this.dataDepartamento = data;
    });
  }
  submitForm(): void {
    this.userService.createData(this.user).subscribe(
      (response) => {
        alert('Usuario creado con éxito');
        this.dialogRef.close();
      },
      (error) => {
        console.error('Error al crear el usuario:', error);
      }
    );
  }
}
