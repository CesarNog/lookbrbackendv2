/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';

import { Lookbrbackendv2TestModule } from '../../../test.module';
import { ConsultantVoteDetailComponent } from '../../../../../../main/webapp/app/entities/consultant-vote/consultant-vote-detail.component';
import { ConsultantVoteService } from '../../../../../../main/webapp/app/entities/consultant-vote/consultant-vote.service';
import { ConsultantVote } from '../../../../../../main/webapp/app/entities/consultant-vote/consultant-vote.model';

describe('Component Tests', () => {

    describe('ConsultantVote Management Detail Component', () => {
        let comp: ConsultantVoteDetailComponent;
        let fixture: ComponentFixture<ConsultantVoteDetailComponent>;
        let service: ConsultantVoteService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Lookbrbackendv2TestModule],
                declarations: [ConsultantVoteDetailComponent],
                providers: [
                    ConsultantVoteService
                ]
            })
            .overrideTemplate(ConsultantVoteDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ConsultantVoteDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ConsultantVoteService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new ConsultantVote(123)));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.consultantVote).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
