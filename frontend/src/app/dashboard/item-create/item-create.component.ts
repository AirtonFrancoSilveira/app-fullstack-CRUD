import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../../services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.scss']
})
export class ItemCreateComponent implements OnInit {
  createForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private appService: AppService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
      curso: ['', Validators.required],
      notasPorBimestre: this.fb.group({
        bimestre1: [null, [Validators.required, Validators.min(0), Validators.max(10)]],
        bimestre2: [null, [Validators.required, Validators.min(0), Validators.max(10)]],
        bimestre3: [null, [Validators.required, Validators.min(0), Validators.max(10)]],
        bimestre4: [null, [Validators.required, Validators.min(0), Validators.max(10)]],
      })
    });
  }

  onSubmit(): void {
    if (this.createForm.valid) {
      this.appService.createApp(this.createForm.value).subscribe(response => {
        this.router.navigate(['/']);
      });
    } else {
      console.error('Formulário inválido');
      Object.keys(this.createForm.controls).forEach(key => {
        const controlErrors = this.createForm.get(key)?.errors;
        if (controlErrors) {
          console.error(`Erro no campo ${key}: `, controlErrors);
        }
      });
    }
  }
}
