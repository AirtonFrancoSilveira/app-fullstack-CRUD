// src/app/components/student-dashboard/student-dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {
  studentForm!: FormGroup;
  students: any[] = [];
  isEditMode = false;
  currentStudentId: string | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      course: ['', Validators.required],
      grade: ['', Validators.required],
    });

    // Aqui você pode carregar a lista de alunos se estiver vindo de um serviço
    this.loadStudents();
  }

  loadStudents(): void {
    // Simulando uma carga inicial de alunos
    this.students = [
      { id: '1', name: 'João', age: 10, course: 'Matemática', grade: 8 },
      { id: '2', name: 'Maria', age: 12, course: 'Português', grade: 9 },
    ];
  }

  onSubmit(): void {
    if (this.studentForm.valid) {
      const studentData = this.studentForm.value;
      if (this.isEditMode && this.currentStudentId) {
        // Atualizar aluno existente
        this.updateStudent(this.currentStudentId, studentData);
      } else {
        // Adicionar novo aluno
        this.addStudent(studentData);
      }
    }
  }

  addStudent(student: any): void {
    // Lógica para adicionar o aluno à lista (pode incluir chamada ao backend)
    this.students.push({ id: new Date().getTime().toString(), ...student });
    this.resetForm();
  }

  editStudent(student: any): void {
    this.isEditMode = true;
    this.currentStudentId = student.id;
    this.studentForm.patchValue(student);
  }

  updateStudent(id: string, studentData: any): void {
    const index = this.students.findIndex((student) => student.id === id);
    if (index !== -1) {
      this.students[index] = { id, ...studentData };
    }
    this.resetForm();
  }

  deleteStudent(id: string): void {
    this.students = this.students.filter((student) => student.id !== id);
  }

  resetForm(): void {
    this.isEditMode = false;
    this.currentStudentId = null;
    this.studentForm.reset();
  }
}
