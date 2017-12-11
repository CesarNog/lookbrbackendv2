/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { Headers } from '@angular/http';

import { Lookbrbackendv2TestModule } from '../../../test.module';
import { SocialMediaComponent } from '../../../../../../main/webapp/app/entities/social-media/social-media.component';
import { SocialMediaService } from '../../../../../../main/webapp/app/entities/social-media/social-media.service';
import { SocialMedia } from '../../../../../../main/webapp/app/entities/social-media/social-media.model';

describe('Component Tests', () => {

    describe('SocialMedia Management Component', () => {
        let comp: SocialMediaComponent;
        let fixture: ComponentFixture<SocialMediaComponent>;
        let service: SocialMediaService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Lookbrbackendv2TestModule],
                declarations: [SocialMediaComponent],
                providers: [
                    SocialMediaService
                ]
            })
            .overrideTemplate(SocialMediaComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(SocialMediaComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SocialMediaService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of({
                    json: [new SocialMedia(123)],
                    headers
                }));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.socialMedias[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
