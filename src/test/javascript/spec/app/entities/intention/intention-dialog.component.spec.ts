/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { Lookbrbackendv2TestModule } from '../../../test.module';
import { IntentionDialogComponent } from '../../../../../../main/webapp/app/entities/intention/intention-dialog.component';
import { IntentionService } from '../../../../../../main/webapp/app/entities/intention/intention.service';
import { Intention } from '../../../../../../main/webapp/app/entities/intention/intention.model';
import { InspirationService } from '../../../../../../main/webapp/app/entities/inspiration';
import { LookService } from '../../../../../../main/webapp/app/entities/look';

describe('Component Tests', () => {

    describe('Intention Management Dialog Component', () => {
        let comp: IntentionDialogComponent;
        let fixture: ComponentFixture<IntentionDialogComponent>;
        let service: IntentionService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Lookbrbackendv2TestModule],
                declarations: [IntentionDialogComponent],
                providers: [
                    InspirationService,
                    LookService,
                    IntentionService
                ]
            })
            .overrideTemplate(IntentionDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(IntentionDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(IntentionService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new Intention(123);
                        spyOn(service, 'update').and.returnValue(Observable.of(entity));
                        comp.intention = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.update).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'intentionListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );

            it('Should call create service on save for new entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new Intention();
                        spyOn(service, 'create').and.returnValue(Observable.of(entity));
                        comp.intention = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.create).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'intentionListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
