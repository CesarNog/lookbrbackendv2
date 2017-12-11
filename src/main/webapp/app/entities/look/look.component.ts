import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Look } from './look.model';
import { LookService } from './look.service';
import { Principal, ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-look',
    templateUrl: './look.component.html'
})
export class LookComponent implements OnInit, OnDestroy {
looks: Look[];
    currentAccount: any;
    eventSubscriber: Subscription;
    currentSearch: string;

    constructor(
        private lookService: LookService,
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
            this.lookService.search({
                query: this.currentSearch,
                }).subscribe(
                    (res: ResponseWrapper) => this.looks = res.json,
                    (res: ResponseWrapper) => this.onError(res.json)
                );
            return;
       }
        this.lookService.query().subscribe(
            (res: ResponseWrapper) => {
                this.looks = res.json;
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
        this.registerChangeInLooks();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: Look) {
        return item.id;
    }
    registerChangeInLooks() {
        this.eventSubscriber = this.eventManager.subscribe('lookListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
