/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { Lookbrbackendv2TestModule } from '../../../test.module';
import { InspirationDialogComponent } from '../../../../../../main/webapp/app/entities/inspiration/inspiration-dialog.component';
import { InspirationService } from '../../../../../../main/webapp/app/entities/inspiration/inspiration.service';
import { Inspiration } from '../../../../../../main/webapp/app/entities/inspiration/inspiration.model';
import { TimelineService } from '../../../../../../main/webapp/app/entities/timeline';

describe('Component Tests', () => {

    describe('Inspiration Management Dialog Component', () => {
        let comp: InspirationDialogComponent;
        let fixture: ComponentFixture<InspirationDialogComponent>;
        let service: InspirationService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Lookbrbackendv2TestModule],
                declarations: [InspirationDialogComponent],
                providers: [
                    TimelineService,
                    InspirationService
                ]
            })
            .overrideTemplate(InspirationDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(InspirationDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(InspirationService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new Inspiration(123);
                        spyOn(service, 'update').and.returnValue(Observable.of(entity));
                        comp.inspiration = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.update).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'inspirationListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );

            it('Should call create service on save for new entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new Inspiration();
                        spyOn(service, 'create').and.returnValue(Observable.of(entity));
                        comp.inspiration = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.create).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'inspirationListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
