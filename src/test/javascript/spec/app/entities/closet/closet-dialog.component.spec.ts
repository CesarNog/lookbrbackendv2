/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { Lookbrbackendv2TestModule } from '../../../test.module';
import { ClosetDialogComponent } from '../../../../../../main/webapp/app/entities/closet/closet-dialog.component';
import { ClosetService } from '../../../../../../main/webapp/app/entities/closet/closet.service';
import { Closet } from '../../../../../../main/webapp/app/entities/closet/closet.model';

describe('Component Tests', () => {

    describe('Closet Management Dialog Component', () => {
        let comp: ClosetDialogComponent;
        let fixture: ComponentFixture<ClosetDialogComponent>;
        let service: ClosetService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Lookbrbackendv2TestModule],
                declarations: [ClosetDialogComponent],
                providers: [
                    ClosetService
                ]
            })
            .overrideTemplate(ClosetDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ClosetDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ClosetService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new Closet(123);
                        spyOn(service, 'update').and.returnValue(Observable.of(entity));
                        comp.closet = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.update).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'closetListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );

            it('Should call create service on save for new entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new Closet();
                        spyOn(service, 'create').and.returnValue(Observable.of(entity));
                        comp.closet = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.create).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'closetListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
