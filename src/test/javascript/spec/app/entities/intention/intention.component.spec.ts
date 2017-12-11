/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { Headers } from '@angular/http';

import { Lookbrbackendv2TestModule } from '../../../test.module';
import { IntentionComponent } from '../../../../../../main/webapp/app/entities/intention/intention.component';
import { IntentionService } from '../../../../../../main/webapp/app/entities/intention/intention.service';
import { Intention } from '../../../../../../main/webapp/app/entities/intention/intention.model';

describe('Component Tests', () => {

    describe('Intention Management Component', () => {
        let comp: IntentionComponent;
        let fixture: ComponentFixture<IntentionComponent>;
        let service: IntentionService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Lookbrbackendv2TestModule],
                declarations: [IntentionComponent],
                providers: [
                    IntentionService
                ]
            })
            .overrideTemplate(IntentionComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(IntentionComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(IntentionService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of({
                    json: [new Intention(123)],
                    headers
                }));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.intentions[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
