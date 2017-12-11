/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { Lookbrbackendv2TestModule } from '../../../test.module';
import { TimelineDialogComponent } from '../../../../../../main/webapp/app/entities/timeline/timeline-dialog.component';
import { TimelineService } from '../../../../../../main/webapp/app/entities/timeline/timeline.service';
import { Timeline } from '../../../../../../main/webapp/app/entities/timeline/timeline.model';

describe('Component Tests', () => {

    describe('Timeline Management Dialog Component', () => {
        let comp: TimelineDialogComponent;
        let fixture: ComponentFixture<TimelineDialogComponent>;
        let service: TimelineService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Lookbrbackendv2TestModule],
                declarations: [TimelineDialogComponent],
                providers: [
                    TimelineService
                ]
            })
            .overrideTemplate(TimelineDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(TimelineDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TimelineService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new Timeline(123);
                        spyOn(service, 'update').and.returnValue(Observable.of(entity));
                        comp.timeline = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.update).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'timelineListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );

            it('Should call create service on save for new entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new Timeline();
                        spyOn(service, 'create').and.returnValue(Observable.of(entity));
                        comp.timeline = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.create).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'timelineListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
