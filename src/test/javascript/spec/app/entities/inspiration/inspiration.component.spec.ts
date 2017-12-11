/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { Headers } from '@angular/http';

import { Lookbrbackendv2TestModule } from '../../../test.module';
import { InspirationComponent } from '../../../../../../main/webapp/app/entities/inspiration/inspiration.component';
import { InspirationService } from '../../../../../../main/webapp/app/entities/inspiration/inspiration.service';
import { Inspiration } from '../../../../../../main/webapp/app/entities/inspiration/inspiration.model';

describe('Component Tests', () => {

    describe('Inspiration Management Component', () => {
        let comp: InspirationComponent;
        let fixture: ComponentFixture<InspirationComponent>;
        let service: InspirationService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Lookbrbackendv2TestModule],
                declarations: [InspirationComponent],
                providers: [
                    InspirationService
                ]
            })
            .overrideTemplate(InspirationComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(InspirationComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(InspirationService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of({
                    json: [new Inspiration(123)],
                    headers
                }));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.inspirations[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
