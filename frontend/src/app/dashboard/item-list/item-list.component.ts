import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { App } from '../../models/app.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  apps: App[] = [];

  constructor(private appService: AppService, public router: Router) {}

  ngOnInit(): void {
    this.appService.getApps().subscribe((response: { data: { apps: App[] } }) => {
      console.log('Dados recebidos:', response.data.apps);
      this.apps = response.data.apps;
    });
  }

  onEdit(app: App): void {
    this.router.navigate(['/edit', app._id]);
  }

  onDelete(app: App): void {
    if (confirm(`Tem certeza que deseja excluir o item ${app.name}?`)) {
      this.appService.deleteApp(app._id).subscribe(() => {
        this.apps = this.apps.filter(a => a._id !== app._id);
      });
    }
  }
}
