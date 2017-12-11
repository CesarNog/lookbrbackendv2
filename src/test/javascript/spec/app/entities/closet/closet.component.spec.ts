/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { Headers } from '@angular/http';

import { Lookbrbackendv2TestModule } from '../../../test.module';
import { ClosetComponent } from '../../../../../../main/webapp/app/entities/closet/closet.component';
import { ClosetService } from '../../../../../../main/webapp/app/entities/closet/closet.service';
import { Closet } from '../../../../../../main/webapp/app/entities/closet/closet.model';

describe('Component Tests', () => {

    describe('Closet Management Component', () => {
        let comp: ClosetComponent;
        let fixture: ComponentFixture<ClosetComponent>;
        let service: ClosetService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Lookbrbackendv2TestModule],
                declarations: [ClosetComponent],
                providers: [
                    ClosetService
                ]
            })
            .overrideTemplate(ClosetComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ClosetComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ClosetService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of({
                    json: [new Closet(123)],
                    headers
                }));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.closets[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
