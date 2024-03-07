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
  selector: 'app-update-user',
  standalone: true,
  imports: [MatGridListModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatSelectModule,],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent implements OnInit{
  userGet: any = {};
  user: any = {};
  dataCargo: any[] = [];
  dataDepartamento: any[] = [];

  constructor(
    private cargoService: CargoService,
    private departamentoService: DepartamentoService,
    public dialogRef: MatDialogRef<UpdateUserComponent>,
    private userService: UserServiceService,
    @Inject(MAT_DIALOG_DATA) public data: {id: any}
  ) {}

  ngOnInit(): void {
    this.llenarData();
    this.llenarCargo();
    this.llenarDepartamento();
  }
  onNoClick(): void {
    console.log('Botón Cancelar clickeado');
    this.dialogRef.close();
  }
  llenarData() {
    this.userService.getDataOne(this.data.id).subscribe((data) => {
      this.userGet = data;
      this.user = data;
    });
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
  submitForm(event: Event): void {
    event.preventDefault();
    this.userService.updateData(this.data.id,this.user).subscribe(
      (response) => {
        alert('Usuario actualizado con éxito');
        this.dialogRef.close();
      },
      (error) => {
        console.error('Error al actualizar el usuario:', error);
      }
    );
  }
}
