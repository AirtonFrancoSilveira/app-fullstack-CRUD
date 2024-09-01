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
  createApp(appInput: any): Observable<any> {
    const mutation = `
      mutation {
        createApp(createAppInput: {
          name: "${appInput.name}",
          email: "${appInput.email}",
          age: ${appInput.age},
          notasPorBimestre: [
            { bimestre: "${appInput.notasPorBimestre[0].bimestre}", nota: ${appInput.notasPorBimestre[0].nota} },
            { bimestre: "${appInput.notasPorBimestre[1].bimestre}", nota: ${appInput.notasPorBimestre[1].nota} },
            { bimestre: "${appInput.notasPorBimestre[2].bimestre}", nota: ${appInput.notasPorBimestre[2].nota} },
            { bimestre: "${appInput.notasPorBimestre[3].bimestre}", nota: ${appInput.notasPorBimestre[3].nota} }
          ]
        }) {
          _id
          name
          turma
          media
          status
        }
      }
    `;
    return this.http.post<any>(this.apiUrl, { query: mutation });
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
