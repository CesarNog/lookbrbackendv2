/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { Headers } from '@angular/http';

import { Lookbrbackendv2TestModule } from '../../../test.module';
import { SignupComponent } from '../../../../../../main/webapp/app/entities/signup/signup.component';
import { SignupService } from '../../../../../../main/webapp/app/entities/signup/signup.service';
import { Signup } from '../../../../../../main/webapp/app/entities/signup/signup.model';

describe('Component Tests', () => {

    describe('Signup Management Component', () => {
        let comp: SignupComponent;
        let fixture: ComponentFixture<SignupComponent>;
        let service: SignupService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Lookbrbackendv2TestModule],
                declarations: [SignupComponent],
                providers: [
                    SignupService
                ]
            })
            .overrideTemplate(SignupComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(SignupComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SignupService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of({
                    json: [new Signup(123)],
                    headers
                }));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.signups[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
