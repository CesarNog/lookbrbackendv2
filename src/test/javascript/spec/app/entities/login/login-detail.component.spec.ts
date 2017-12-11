/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';

import { Lookbrbackendv2TestModule } from '../../../test.module';
import { LoginDetailComponent } from '../../../../../../main/webapp/app/entities/login/login-detail.component';
import { LoginService } from '../../../../../../main/webapp/app/entities/login/login.service';
import { Login } from '../../../../../../main/webapp/app/entities/login/login.model';

describe('Component Tests', () => {

    describe('Login Management Detail Component', () => {
        let comp: LoginDetailComponent;
        let fixture: ComponentFixture<LoginDetailComponent>;
        let service: LoginService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Lookbrbackendv2TestModule],
                declarations: [LoginDetailComponent],
                providers: [
                    LoginService
                ]
            })
            .overrideTemplate(LoginDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(LoginDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(LoginService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new Login(123)));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.login).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
