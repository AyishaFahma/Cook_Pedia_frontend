import { Component } from '@angular/core';
import { AdminHeaderComponent } from '../../components/admin-header/admin-header.component';
import { AdminSidebarComponent } from '../../components/admin-sidebar/admin-sidebar.component';

@Component({
  selector: 'app-admin-downloads',
  standalone: true,
  imports: [AdminHeaderComponent, AdminSidebarComponent],
  templateUrl: './admin-downloads.component.html',
  styleUrl: './admin-downloads.component.css'
})
export class AdminDownloadsComponent {

}
