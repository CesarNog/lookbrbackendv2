/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { Lookbrbackendv2TestModule } from '../../../test.module';
import { SocialMediaDialogComponent } from '../../../../../../main/webapp/app/entities/social-media/social-media-dialog.component';
import { SocialMediaService } from '../../../../../../main/webapp/app/entities/social-media/social-media.service';
import { SocialMedia } from '../../../../../../main/webapp/app/entities/social-media/social-media.model';
import { ConsultantService } from '../../../../../../main/webapp/app/entities/consultant';

describe('Component Tests', () => {

    describe('SocialMedia Management Dialog Component', () => {
        let comp: SocialMediaDialogComponent;
        let fixture: ComponentFixture<SocialMediaDialogComponent>;
        let service: SocialMediaService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Lookbrbackendv2TestModule],
                declarations: [SocialMediaDialogComponent],
                providers: [
                    ConsultantService,
                    SocialMediaService
                ]
            })
            .overrideTemplate(SocialMediaDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(SocialMediaDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SocialMediaService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new SocialMedia(123);
                        spyOn(service, 'update').and.returnValue(Observable.of(entity));
                        comp.socialMedia = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.update).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'socialMediaListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );

            it('Should call create service on save for new entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new SocialMedia();
                        spyOn(service, 'create').and.returnValue(Observable.of(entity));
                        comp.socialMedia = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.create).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'socialMediaListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
