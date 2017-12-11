/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { Lookbrbackendv2TestModule } from '../../../test.module';
import { ClosetDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/closet/closet-delete-dialog.component';
import { ClosetService } from '../../../../../../main/webapp/app/entities/closet/closet.service';

describe('Component Tests', () => {

    describe('Closet Management Delete Component', () => {
        let comp: ClosetDeleteDialogComponent;
        let fixture: ComponentFixture<ClosetDeleteDialogComponent>;
        let service: ClosetService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Lookbrbackendv2TestModule],
                declarations: [ClosetDeleteDialogComponent],
                providers: [
                    ClosetService
                ]
            })
            .overrideTemplate(ClosetDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ClosetDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ClosetService);
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
