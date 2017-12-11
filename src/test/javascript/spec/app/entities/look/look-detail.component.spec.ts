/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';

import { Lookbrbackendv2TestModule } from '../../../test.module';
import { LookDetailComponent } from '../../../../../../main/webapp/app/entities/look/look-detail.component';
import { LookService } from '../../../../../../main/webapp/app/entities/look/look.service';
import { Look } from '../../../../../../main/webapp/app/entities/look/look.model';

describe('Component Tests', () => {

    describe('Look Management Detail Component', () => {
        let comp: LookDetailComponent;
        let fixture: ComponentFixture<LookDetailComponent>;
        let service: LookService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Lookbrbackendv2TestModule],
                declarations: [LookDetailComponent],
                providers: [
                    LookService
                ]
            })
            .overrideTemplate(LookDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(LookDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(LookService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new Look(123)));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.look).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
