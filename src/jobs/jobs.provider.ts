import { JOB_REPOSITORY } from 'src/core/constants';
import { Job } from './job.entity';

export const jobsProviders = [
  {
    provide: JOB_REPOSITORY,
    useValue: Job,
  },
];
