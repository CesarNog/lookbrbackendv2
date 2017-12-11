/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';

import { Lookbrbackendv2TestModule } from '../../../test.module';
import { OccasionDetailComponent } from '../../../../../../main/webapp/app/entities/occasion/occasion-detail.component';
import { OccasionService } from '../../../../../../main/webapp/app/entities/occasion/occasion.service';
import { Occasion } from '../../../../../../main/webapp/app/entities/occasion/occasion.model';

describe('Component Tests', () => {

    describe('Occasion Management Detail Component', () => {
        let comp: OccasionDetailComponent;
        let fixture: ComponentFixture<OccasionDetailComponent>;
        let service: OccasionService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Lookbrbackendv2TestModule],
                declarations: [OccasionDetailComponent],
                providers: [
                    OccasionService
                ]
            })
            .overrideTemplate(OccasionDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(OccasionDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(OccasionService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new Occasion(123)));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.occasion).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
