/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { Headers } from '@angular/http';

import { Lookbrbackendv2TestModule } from '../../../test.module';
import { OccasionComponent } from '../../../../../../main/webapp/app/entities/occasion/occasion.component';
import { OccasionService } from '../../../../../../main/webapp/app/entities/occasion/occasion.service';
import { Occasion } from '../../../../../../main/webapp/app/entities/occasion/occasion.model';

describe('Component Tests', () => {

    describe('Occasion Management Component', () => {
        let comp: OccasionComponent;
        let fixture: ComponentFixture<OccasionComponent>;
        let service: OccasionService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Lookbrbackendv2TestModule],
                declarations: [OccasionComponent],
                providers: [
                    OccasionService
                ]
            })
            .overrideTemplate(OccasionComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(OccasionComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(OccasionService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of({
                    json: [new Occasion(123)],
                    headers
                }));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.occasions[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
