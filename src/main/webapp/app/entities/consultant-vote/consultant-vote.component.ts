import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { ConsultantVote } from './consultant-vote.model';
import { ConsultantVoteService } from './consultant-vote.service';
import { Principal, ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-consultant-vote',
    templateUrl: './consultant-vote.component.html'
})
export class ConsultantVoteComponent implements OnInit, OnDestroy {
consultantVotes: ConsultantVote[];
    currentAccount: any;
    eventSubscriber: Subscription;
    currentSearch: string;

    constructor(
        private consultantVoteService: ConsultantVoteService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private activatedRoute: ActivatedRoute,
        private principal: Principal
    ) {
        this.currentSearch = this.activatedRoute.snapshot && this.activatedRoute.snapshot.params['search'] ?
            this.activatedRoute.snapshot.params['search'] : '';
    }

    loadAll() {
        if (this.currentSearch) {
            this.consultantVoteService.search({
                query: this.currentSearch,
                }).subscribe(
                    (res: ResponseWrapper) => this.consultantVotes = res.json,
                    (res: ResponseWrapper) => this.onError(res.json)
                );
            return;
       }
        this.consultantVoteService.query().subscribe(
            (res: ResponseWrapper) => {
                this.consultantVotes = res.json;
                this.currentSearch = '';
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }

    search(query) {
        if (!query) {
            return this.clear();
        }
        this.currentSearch = query;
        this.loadAll();
    }

    clear() {
        this.currentSearch = '';
        this.loadAll();
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInConsultantVotes();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: ConsultantVote) {
        return item.id;
    }
    registerChangeInConsultantVotes() {
        this.eventSubscriber = this.eventManager.subscribe('consultantVoteListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
