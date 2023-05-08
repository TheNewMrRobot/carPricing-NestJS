import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Report } from './reports.entity';
import { CreateReportDTO } from './dtos/CreateReport.dto';

@Injectable()
export class ReportsService {
  constructor(@InjectRepository(Report) public repo: Repository<Report>) {}
  create(reportDto: CreateReportDTO) {
    const report = this.repo.create(reportDto);
    return this.repo.save(report);
  }
}
