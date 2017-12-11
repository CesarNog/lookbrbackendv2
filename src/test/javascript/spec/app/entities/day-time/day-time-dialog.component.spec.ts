/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { Lookbrbackendv2TestModule } from '../../../test.module';
import { DayTimeDialogComponent } from '../../../../../../main/webapp/app/entities/day-time/day-time-dialog.component';
import { DayTimeService } from '../../../../../../main/webapp/app/entities/day-time/day-time.service';
import { DayTime } from '../../../../../../main/webapp/app/entities/day-time/day-time.model';
import { InspirationService } from '../../../../../../main/webapp/app/entities/inspiration';

describe('Component Tests', () => {

    describe('DayTime Management Dialog Component', () => {
        let comp: DayTimeDialogComponent;
        let fixture: ComponentFixture<DayTimeDialogComponent>;
        let service: DayTimeService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Lookbrbackendv2TestModule],
                declarations: [DayTimeDialogComponent],
                providers: [
                    InspirationService,
                    DayTimeService
                ]
            })
            .overrideTemplate(DayTimeDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(DayTimeDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(DayTimeService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new DayTime(123);
                        spyOn(service, 'update').and.returnValue(Observable.of(entity));
                        comp.dayTime = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.update).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'dayTimeListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );

            it('Should call create service on save for new entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new DayTime();
                        spyOn(service, 'create').and.returnValue(Observable.of(entity));
                        comp.dayTime = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.create).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'dayTimeListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
