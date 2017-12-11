/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';

import { Lookbrbackendv2TestModule } from '../../../test.module';
import { DayTimeDetailComponent } from '../../../../../../main/webapp/app/entities/day-time/day-time-detail.component';
import { DayTimeService } from '../../../../../../main/webapp/app/entities/day-time/day-time.service';
import { DayTime } from '../../../../../../main/webapp/app/entities/day-time/day-time.model';

describe('Component Tests', () => {

    describe('DayTime Management Detail Component', () => {
        let comp: DayTimeDetailComponent;
        let fixture: ComponentFixture<DayTimeDetailComponent>;
        let service: DayTimeService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Lookbrbackendv2TestModule],
                declarations: [DayTimeDetailComponent],
                providers: [
                    DayTimeService
                ]
            })
            .overrideTemplate(DayTimeDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(DayTimeDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(DayTimeService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new DayTime(123)));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.dayTime).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
