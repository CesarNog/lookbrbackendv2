/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';

import { Lookbrbackendv2TestModule } from '../../../test.module';
import { InspirationDetailComponent } from '../../../../../../main/webapp/app/entities/inspiration/inspiration-detail.component';
import { InspirationService } from '../../../../../../main/webapp/app/entities/inspiration/inspiration.service';
import { Inspiration } from '../../../../../../main/webapp/app/entities/inspiration/inspiration.model';

describe('Component Tests', () => {

    describe('Inspiration Management Detail Component', () => {
        let comp: InspirationDetailComponent;
        let fixture: ComponentFixture<InspirationDetailComponent>;
        let service: InspirationService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Lookbrbackendv2TestModule],
                declarations: [InspirationDetailComponent],
                providers: [
                    InspirationService
                ]
            })
            .overrideTemplate(InspirationDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(InspirationDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(InspirationService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new Inspiration(123)));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.inspiration).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
