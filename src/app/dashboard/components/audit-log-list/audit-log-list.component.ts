import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AuditLogService } from '../../../core/audit-log.service';

@Component({
  selector: 'app-audit-log-list',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './audit-log-list.component.html',
})
export class AuditLogListComponent implements OnInit {
  logs: any[] = [];
  constructor(private auditLogService: AuditLogService) {}
  ngOnInit(): void {
    this.auditLogService.getLogs().subscribe(data => this.logs = data);
  }
}
