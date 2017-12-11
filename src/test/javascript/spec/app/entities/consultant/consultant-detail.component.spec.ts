/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';

import { Lookbrbackendv2TestModule } from '../../../test.module';
import { ConsultantDetailComponent } from '../../../../../../main/webapp/app/entities/consultant/consultant-detail.component';
import { ConsultantService } from '../../../../../../main/webapp/app/entities/consultant/consultant.service';
import { Consultant } from '../../../../../../main/webapp/app/entities/consultant/consultant.model';

describe('Component Tests', () => {

    describe('Consultant Management Detail Component', () => {
        let comp: ConsultantDetailComponent;
        let fixture: ComponentFixture<ConsultantDetailComponent>;
        let service: ConsultantService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Lookbrbackendv2TestModule],
                declarations: [ConsultantDetailComponent],
                providers: [
                    ConsultantService
                ]
            })
            .overrideTemplate(ConsultantDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ConsultantDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ConsultantService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new Consultant(123)));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.consultant).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
