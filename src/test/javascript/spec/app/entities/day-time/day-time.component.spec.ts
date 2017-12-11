/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { Headers } from '@angular/http';

import { Lookbrbackendv2TestModule } from '../../../test.module';
import { DayTimeComponent } from '../../../../../../main/webapp/app/entities/day-time/day-time.component';
import { DayTimeService } from '../../../../../../main/webapp/app/entities/day-time/day-time.service';
import { DayTime } from '../../../../../../main/webapp/app/entities/day-time/day-time.model';

describe('Component Tests', () => {

    describe('DayTime Management Component', () => {
        let comp: DayTimeComponent;
        let fixture: ComponentFixture<DayTimeComponent>;
        let service: DayTimeService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Lookbrbackendv2TestModule],
                declarations: [DayTimeComponent],
                providers: [
                    DayTimeService
                ]
            })
            .overrideTemplate(DayTimeComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(DayTimeComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(DayTimeService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of({
                    json: [new DayTime(123)],
                    headers
                }));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.dayTimes[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
