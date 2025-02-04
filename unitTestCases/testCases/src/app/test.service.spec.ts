import { TestBed } from '@angular/core/testing';

import { TestService } from './test.service';
import { LogService } from './log.service';

describe('TestService', () => {
  let service: TestService;
  let service2: LogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[]
    });
    service = TestBed.inject(TestService);
    service2 = TestBed.inject(LogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call add', () => {    
    expect(service.add(10,20)).toBe(30);//log service is getting called along with constructor
  });  

  it('should call add without calling log service', () => {  
    spyOn(service2,'log')  //here log method won't call as we are not calling original method here jasine stub that call, but calls with constructor
    expect(service.add(10,20)).toBe(30);//log service is not getting called
    expect(service2.log).toHaveBeenCalledTimes(1);
  });

  it('should call add with calling original log service instead of stub call', () => {  
    spyOn(service2,'log').and.callThrough() //here original method is called instead of jasine stub that call, but calls with constructor
    expect(service.add(10,20)).toBe(30);//log service is not getting called
    expect(service2.log).toHaveBeenCalled();
  });

  it('should call add without calling log service and no call for constructor', () => {  
    //as be use TestBed.inject(LogService) before each test,it will call constructor.Here it creates obj with methods
    //now instead using original service we will mock service only.jasimine.createObj it creates mock service object and tracks methods of service(dummy methods)(need to specify explicitly which to keep trak)
        // Implementing Jasmine Create Spy Object
    const logger = jasmine.createSpyObj('LogService', ['log']);
    console.log(logger)
    
    const calculator = service.add(50,30);

    expect(calculator).toBe(80); // First exepct
   
    
  });


  it('should call add without calling log service with intance and no call for constructor', () => {  
   
    const logger = jasmine.createSpyObj('LogService', ['log']);
    let calculator = new TestService(logger);
    const result = calculator.add(60,30);

    expect(result).toBe(90); // First exepct
    expect(logger.log).toHaveBeenCalled();
   
    
  });

});

