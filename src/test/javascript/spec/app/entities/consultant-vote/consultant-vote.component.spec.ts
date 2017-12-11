/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { Headers } from '@angular/http';

import { Lookbrbackendv2TestModule } from '../../../test.module';
import { ConsultantVoteComponent } from '../../../../../../main/webapp/app/entities/consultant-vote/consultant-vote.component';
import { ConsultantVoteService } from '../../../../../../main/webapp/app/entities/consultant-vote/consultant-vote.service';
import { ConsultantVote } from '../../../../../../main/webapp/app/entities/consultant-vote/consultant-vote.model';

describe('Component Tests', () => {

    describe('ConsultantVote Management Component', () => {
        let comp: ConsultantVoteComponent;
        let fixture: ComponentFixture<ConsultantVoteComponent>;
        let service: ConsultantVoteService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Lookbrbackendv2TestModule],
                declarations: [ConsultantVoteComponent],
                providers: [
                    ConsultantVoteService
                ]
            })
            .overrideTemplate(ConsultantVoteComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ConsultantVoteComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ConsultantVoteService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of({
                    json: [new ConsultantVote(123)],
                    headers
                }));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.consultantVotes[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
