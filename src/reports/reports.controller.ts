import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateReportDTO } from './dtos/CreateReport.dto';
import { ReportsService } from './reports.service';
import { AuthGaurd } from 'src/guards/auth.guard';

@Controller('reports')
export class ReportsController {
  constructor(private reportService: ReportsService) {}
  @Post()
  @UseGuards(AuthGaurd)
  createReport(@Body() body: CreateReportDTO) {
    this.reportService.create(body);
  }
}
