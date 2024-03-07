import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UserServiceService } from '../../Service/User/user-service.service';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteComponent>,
    private userService: UserServiceService,
    @Inject(MAT_DIALOG_DATA) public data: {id: any},
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  deleteUser(): void {
    this.userService.deleteData(this.data.id).subscribe(
      (response) => {
        console.log('Usuario eliminado con éxito:', response);
        this.dialogRef.close();
      },
      (error) => {
        console.error('Error al eliminar el usuario:', error);
      }
    );
  }
}
