/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';

import { Lookbrbackendv2TestModule } from '../../../test.module';
import { ClosetDetailComponent } from '../../../../../../main/webapp/app/entities/closet/closet-detail.component';
import { ClosetService } from '../../../../../../main/webapp/app/entities/closet/closet.service';
import { Closet } from '../../../../../../main/webapp/app/entities/closet/closet.model';

describe('Component Tests', () => {

    describe('Closet Management Detail Component', () => {
        let comp: ClosetDetailComponent;
        let fixture: ComponentFixture<ClosetDetailComponent>;
        let service: ClosetService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Lookbrbackendv2TestModule],
                declarations: [ClosetDetailComponent],
                providers: [
                    ClosetService
                ]
            })
            .overrideTemplate(ClosetDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ClosetDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ClosetService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new Closet(123)));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.closet).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
