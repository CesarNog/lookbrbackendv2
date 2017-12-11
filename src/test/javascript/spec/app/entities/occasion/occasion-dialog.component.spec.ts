/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { Lookbrbackendv2TestModule } from '../../../test.module';
import { OccasionDialogComponent } from '../../../../../../main/webapp/app/entities/occasion/occasion-dialog.component';
import { OccasionService } from '../../../../../../main/webapp/app/entities/occasion/occasion.service';
import { Occasion } from '../../../../../../main/webapp/app/entities/occasion/occasion.model';
import { InspirationService } from '../../../../../../main/webapp/app/entities/inspiration';
import { LookService } from '../../../../../../main/webapp/app/entities/look';

describe('Component Tests', () => {

    describe('Occasion Management Dialog Component', () => {
        let comp: OccasionDialogComponent;
        let fixture: ComponentFixture<OccasionDialogComponent>;
        let service: OccasionService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Lookbrbackendv2TestModule],
                declarations: [OccasionDialogComponent],
                providers: [
                    InspirationService,
                    LookService,
                    OccasionService
                ]
            })
            .overrideTemplate(OccasionDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(OccasionDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(OccasionService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new Occasion(123);
                        spyOn(service, 'update').and.returnValue(Observable.of(entity));
                        comp.occasion = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.update).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'occasionListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );

            it('Should call create service on save for new entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new Occasion();
                        spyOn(service, 'create').and.returnValue(Observable.of(entity));
                        comp.occasion = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.create).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'occasionListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
