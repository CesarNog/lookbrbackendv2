/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { Lookbrbackendv2TestModule } from '../../../test.module';
import { ConsultantVoteDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/consultant-vote/consultant-vote-delete-dialog.component';
import { ConsultantVoteService } from '../../../../../../main/webapp/app/entities/consultant-vote/consultant-vote.service';

describe('Component Tests', () => {

    describe('ConsultantVote Management Delete Component', () => {
        let comp: ConsultantVoteDeleteDialogComponent;
        let fixture: ComponentFixture<ConsultantVoteDeleteDialogComponent>;
        let service: ConsultantVoteService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Lookbrbackendv2TestModule],
                declarations: [ConsultantVoteDeleteDialogComponent],
                providers: [
                    ConsultantVoteService
                ]
            })
            .overrideTemplate(ConsultantVoteDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ConsultantVoteDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ConsultantVoteService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        spyOn(service, 'delete').and.returnValue(Observable.of({}));

                        // WHEN
                        comp.confirmDelete(123);
                        tick();

                        // THEN
                        expect(service.delete).toHaveBeenCalledWith(123);
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
