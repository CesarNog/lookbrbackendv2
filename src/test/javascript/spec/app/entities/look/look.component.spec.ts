/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { Headers } from '@angular/http';

import { Lookbrbackendv2TestModule } from '../../../test.module';
import { LookComponent } from '../../../../../../main/webapp/app/entities/look/look.component';
import { LookService } from '../../../../../../main/webapp/app/entities/look/look.service';
import { Look } from '../../../../../../main/webapp/app/entities/look/look.model';

describe('Component Tests', () => {

    describe('Look Management Component', () => {
        let comp: LookComponent;
        let fixture: ComponentFixture<LookComponent>;
        let service: LookService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Lookbrbackendv2TestModule],
                declarations: [LookComponent],
                providers: [
                    LookService
                ]
            })
            .overrideTemplate(LookComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(LookComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(LookService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of({
                    json: [new Look(123)],
                    headers
                }));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.looks[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
