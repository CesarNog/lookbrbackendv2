/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { Headers } from '@angular/http';

import { Lookbrbackendv2TestModule } from '../../../test.module';
import { ConsultantComponent } from '../../../../../../main/webapp/app/entities/consultant/consultant.component';
import { ConsultantService } from '../../../../../../main/webapp/app/entities/consultant/consultant.service';
import { Consultant } from '../../../../../../main/webapp/app/entities/consultant/consultant.model';

describe('Component Tests', () => {

    describe('Consultant Management Component', () => {
        let comp: ConsultantComponent;
        let fixture: ComponentFixture<ConsultantComponent>;
        let service: ConsultantService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Lookbrbackendv2TestModule],
                declarations: [ConsultantComponent],
                providers: [
                    ConsultantService
                ]
            })
            .overrideTemplate(ConsultantComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ConsultantComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ConsultantService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of({
                    json: [new Consultant(123)],
                    headers
                }));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.consultants[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
