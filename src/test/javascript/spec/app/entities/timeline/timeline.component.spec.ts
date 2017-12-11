/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { Headers } from '@angular/http';

import { Lookbrbackendv2TestModule } from '../../../test.module';
import { TimelineComponent } from '../../../../../../main/webapp/app/entities/timeline/timeline.component';
import { TimelineService } from '../../../../../../main/webapp/app/entities/timeline/timeline.service';
import { Timeline } from '../../../../../../main/webapp/app/entities/timeline/timeline.model';

describe('Component Tests', () => {

    describe('Timeline Management Component', () => {
        let comp: TimelineComponent;
        let fixture: ComponentFixture<TimelineComponent>;
        let service: TimelineService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Lookbrbackendv2TestModule],
                declarations: [TimelineComponent],
                providers: [
                    TimelineService
                ]
            })
            .overrideTemplate(TimelineComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(TimelineComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TimelineService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of({
                    json: [new Timeline(123)],
                    headers
                }));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.timelines[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
