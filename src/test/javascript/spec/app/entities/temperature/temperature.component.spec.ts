/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { Headers } from '@angular/http';

import { Lookbrbackendv2TestModule } from '../../../test.module';
import { TemperatureComponent } from '../../../../../../main/webapp/app/entities/temperature/temperature.component';
import { TemperatureService } from '../../../../../../main/webapp/app/entities/temperature/temperature.service';
import { Temperature } from '../../../../../../main/webapp/app/entities/temperature/temperature.model';

describe('Component Tests', () => {

    describe('Temperature Management Component', () => {
        let comp: TemperatureComponent;
        let fixture: ComponentFixture<TemperatureComponent>;
        let service: TemperatureService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Lookbrbackendv2TestModule],
                declarations: [TemperatureComponent],
                providers: [
                    TemperatureService
                ]
            })
            .overrideTemplate(TemperatureComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(TemperatureComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TemperatureService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of({
                    json: [new Temperature(123)],
                    headers
                }));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.temperatures[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
