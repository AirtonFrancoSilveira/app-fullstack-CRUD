// src/app/models/app.model.ts

export interface NotaPorBimestre {
    bimestre: string;
    nota: number;
  }
  
  export interface App {
    _id: string;
    name: string;
    email: string;
    age: number;
    notasPorBimestre: NotaPorBimestre[];
    media: number | null;
    status: string | null;
    curso: string | null;
    turma: string | null;
  }
  