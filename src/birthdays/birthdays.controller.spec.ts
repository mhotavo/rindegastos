import { Test, TestingModule } from '@nestjs/testing';
import { BirthdaysController } from './birthdays.controller';
import { BirthdaysService } from './birthdays.service';

describe('BirthdaysController', () => {
  let controller: BirthdaysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BirthdaysController],
      providers: [BirthdaysService],
    }).compile();

    controller = module.get<BirthdaysController>(BirthdaysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
