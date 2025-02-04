import { TestBed } from '@angular/core/testing';

import { LogService } from './log.service';

describe('LogService', () => {
  let service: LogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogService);
  });

  //isolated service which don't have dependencies



  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(service.messages.length).toBe(0);
  });

  it('should call log', () => {
    service.log('testing');
    expect(service.messages.length).toBe(1);
  });

  it('should call clear ', () => {
    service.log('testing');//Act
    service.clear();//Act
    expect(service.messages.length).toBe(0);
  });
});
