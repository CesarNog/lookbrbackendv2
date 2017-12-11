/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { Lookbrbackendv2TestModule } from '../../../test.module';
import { ConsultantDialogComponent } from '../../../../../../main/webapp/app/entities/consultant/consultant-dialog.component';
import { ConsultantService } from '../../../../../../main/webapp/app/entities/consultant/consultant.service';
import { Consultant } from '../../../../../../main/webapp/app/entities/consultant/consultant.model';
import { LookService } from '../../../../../../main/webapp/app/entities/look';

describe('Component Tests', () => {

    describe('Consultant Management Dialog Component', () => {
        let comp: ConsultantDialogComponent;
        let fixture: ComponentFixture<ConsultantDialogComponent>;
        let service: ConsultantService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Lookbrbackendv2TestModule],
                declarations: [ConsultantDialogComponent],
                providers: [
                    LookService,
                    ConsultantService
                ]
            })
            .overrideTemplate(ConsultantDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ConsultantDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ConsultantService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new Consultant(123);
                        spyOn(service, 'update').and.returnValue(Observable.of(entity));
                        comp.consultant = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.update).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'consultantListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );

            it('Should call create service on save for new entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new Consultant();
                        spyOn(service, 'create').and.returnValue(Observable.of(entity));
                        comp.consultant = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.create).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'consultantListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
