import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { App } from '../models/app.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private apiUrl = 'http://localhost:3000/graphql'; // URL do GraphQL

  constructor(private http: HttpClient) {}

  // Método para criar um novo item
  createApp(appData: any): Observable<any> {
    const mutation = `
      mutation {
        createApp(createAppInput: {
          name: "${appData.name}",
          email: "${appData.email}",
          age: ${appData.age},
          curso: "${appData.curso}",
          notasPorBimestre: [
            { bimestre: "1º Bimestre", nota: ${appData.notasPorBimestre.bimestre1} },
            { bimestre: "2º Bimestre", nota: ${appData.notasPorBimestre.bimestre2} },
            { bimestre: "3º Bimestre", nota: ${appData.notasPorBimestre.bimestre3} },
            { bimestre: "4º Bimestre", nota: ${appData.notasPorBimestre.bimestre4} }
          ]
        }) {
          _id
          name
        }
      }
    `;
    return this.http.post(this.apiUrl, { query: mutation });
  }

  getApps(): Observable<{ data: { apps: App[] } }> {
    const query = `
      query {
        apps {
          _id
          name
          email
          age
          turma
          media
          status
          notasPorBimestre {
            bimestre
            nota
          }
        }
      }
    `;
    return this.http.post<{ data: { apps: App[] } }>(this.apiUrl, { query });
  }
  
  deleteApp(id: string): Observable<any> {
    const mutation = `
      mutation {
        removeApp(id: "${id}") {
          _id
        }
      }
    `;
    return this.http.post<any>(this.apiUrl, { query: mutation });
  }
  
}
