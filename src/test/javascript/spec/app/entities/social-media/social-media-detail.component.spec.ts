/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';

import { Lookbrbackendv2TestModule } from '../../../test.module';
import { SocialMediaDetailComponent } from '../../../../../../main/webapp/app/entities/social-media/social-media-detail.component';
import { SocialMediaService } from '../../../../../../main/webapp/app/entities/social-media/social-media.service';
import { SocialMedia } from '../../../../../../main/webapp/app/entities/social-media/social-media.model';

describe('Component Tests', () => {

    describe('SocialMedia Management Detail Component', () => {
        let comp: SocialMediaDetailComponent;
        let fixture: ComponentFixture<SocialMediaDetailComponent>;
        let service: SocialMediaService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Lookbrbackendv2TestModule],
                declarations: [SocialMediaDetailComponent],
                providers: [
                    SocialMediaService
                ]
            })
            .overrideTemplate(SocialMediaDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(SocialMediaDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SocialMediaService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new SocialMedia(123)));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.socialMedia).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
