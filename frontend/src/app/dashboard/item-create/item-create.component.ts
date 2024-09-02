import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../../services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.scss']
})
export class ItemCreateComponent {
  createForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private appService: AppService,
    private router: Router
  ) {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(1)]],
      curso: ['', Validators.required],
      notasPorBimestre: this.fb.group({
        bimestre1: [null, [Validators.required, Validators.min(0), Validators.max(10)]],
        bimestre2: [null, [Validators.required, Validators.min(0), Validators.max(10)]],
        bimestre3: [null, [Validators.required, Validators.min(0), Validators.max(10)]],
        bimestre4: [null, [Validators.required, Validators.min(0), Validators.max(10)]]
      })
    });
  }

  onSubmit(): void {
    if (this.createForm.valid) {
      const formValues = this.createForm.value;
      const appInput = {
        name: formValues.name,
        email: formValues.email,
        age: formValues.age,
        curso: formValues.curso,
        notasPorBimestre: [
          { bimestre: '1º Bimestre', nota: formValues.notasPorBimestre.bimestre1 },
          { bimestre: '2º Bimestre', nota: formValues.notasPorBimestre.bimestre2 },
          { bimestre: '3º Bimestre', nota: formValues.notasPorBimestre.bimestre3 },
          { bimestre: '4º Bimestre', nota: formValues.notasPorBimestre.bimestre4 }
        ]
      };

      this.appService.createApp(appInput).subscribe(
        response => {
          console.log('Item criado com sucesso:', response);
          this.router.navigate(['/']); // Redireciona para a lista após o sucesso
        },
        error => {
          console.error('Erro ao criar item:', error);
        }
      );
    }
  }
}
