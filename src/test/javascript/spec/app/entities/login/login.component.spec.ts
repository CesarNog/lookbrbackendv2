/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { Headers } from '@angular/http';

import { Lookbrbackendv2TestModule } from '../../../test.module';
import { LoginComponent } from '../../../../../../main/webapp/app/entities/login/login.component';
import { LoginService } from '../../../../../../main/webapp/app/entities/login/login.service';
import { Login } from '../../../../../../main/webapp/app/entities/login/login.model';

describe('Component Tests', () => {

    describe('Login Management Component', () => {
        let comp: LoginComponent;
        let fixture: ComponentFixture<LoginComponent>;
        let service: LoginService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Lookbrbackendv2TestModule],
                declarations: [LoginComponent],
                providers: [
                    LoginService
                ]
            })
            .overrideTemplate(LoginComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(LoginComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(LoginService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of({
                    json: [new Login(123)],
                    headers
                }));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.logins[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
