import { Component } from '@angular/core';
import { LaunchService } from '../launch.service';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent {
  daysLeft: number | null = null;

  constructor(private launchService: LaunchService) { }

  ngOnInit(): void {
    this.launchService.getDaysLeft().subscribe(
      data => {
        this.daysLeft = data.daysDifference;
      },
      error => {
        console.error('Error fetching days left:', error);
      }
    );
}
}
