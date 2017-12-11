/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { Lookbrbackendv2TestModule } from '../../../test.module';
import { SignupDialogComponent } from '../../../../../../main/webapp/app/entities/signup/signup-dialog.component';
import { SignupService } from '../../../../../../main/webapp/app/entities/signup/signup.service';
import { Signup } from '../../../../../../main/webapp/app/entities/signup/signup.model';

describe('Component Tests', () => {

    describe('Signup Management Dialog Component', () => {
        let comp: SignupDialogComponent;
        let fixture: ComponentFixture<SignupDialogComponent>;
        let service: SignupService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Lookbrbackendv2TestModule],
                declarations: [SignupDialogComponent],
                providers: [
                    SignupService
                ]
            })
            .overrideTemplate(SignupDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(SignupDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SignupService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new Signup(123);
                        spyOn(service, 'update').and.returnValue(Observable.of(entity));
                        comp.signup = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.update).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'signupListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );

            it('Should call create service on save for new entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new Signup();
                        spyOn(service, 'create').and.returnValue(Observable.of(entity));
                        comp.signup = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.create).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'signupListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
