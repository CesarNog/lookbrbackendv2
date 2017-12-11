import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Inspiration } from './inspiration.model';
import { InspirationService } from './inspiration.service';
import { Principal, ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-inspiration',
    templateUrl: './inspiration.component.html'
})
export class InspirationComponent implements OnInit, OnDestroy {
inspirations: Inspiration[];
    currentAccount: any;
    eventSubscriber: Subscription;
    currentSearch: string;

    constructor(
        private inspirationService: InspirationService,
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
            this.inspirationService.search({
                query: this.currentSearch,
                }).subscribe(
                    (res: ResponseWrapper) => this.inspirations = res.json,
                    (res: ResponseWrapper) => this.onError(res.json)
                );
            return;
       }
        this.inspirationService.query().subscribe(
            (res: ResponseWrapper) => {
                this.inspirations = res.json;
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
        this.registerChangeInInspirations();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: Inspiration) {
        return item.id;
    }
    registerChangeInInspirations() {
        this.eventSubscriber = this.eventManager.subscribe('inspirationListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
