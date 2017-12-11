import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Lookbrbackendv2LoginModule } from './login/login.module';
import { Lookbrbackendv2SignupModule } from './signup/signup.module';
import { Lookbrbackendv2TimelineModule } from './timeline/timeline.module';
import { Lookbrbackendv2ConsultantModule } from './consultant/consultant.module';
import { Lookbrbackendv2SocialMediaModule } from './social-media/social-media.module';
import { Lookbrbackendv2IntentionModule } from './intention/intention.module';
import { Lookbrbackendv2InspirationModule } from './inspiration/inspiration.module';
import { Lookbrbackendv2OccasionModule } from './occasion/occasion.module';
import { Lookbrbackendv2LookModule } from './look/look.module';
import { Lookbrbackendv2CommentModule } from './comment/comment.module';
import { Lookbrbackendv2ConsultantVoteModule } from './consultant-vote/consultant-vote.module';
import { Lookbrbackendv2ClosetModule } from './closet/closet.module';
import { Lookbrbackendv2TemperatureModule } from './temperature/temperature.module';
import { Lookbrbackendv2DayTimeModule } from './day-time/day-time.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        Lookbrbackendv2LoginModule,
        Lookbrbackendv2SignupModule,
        Lookbrbackendv2TimelineModule,
        Lookbrbackendv2ConsultantModule,
        Lookbrbackendv2SocialMediaModule,
        Lookbrbackendv2IntentionModule,
        Lookbrbackendv2InspirationModule,
        Lookbrbackendv2OccasionModule,
        Lookbrbackendv2LookModule,
        Lookbrbackendv2CommentModule,
        Lookbrbackendv2ConsultantVoteModule,
        Lookbrbackendv2ClosetModule,
        Lookbrbackendv2TemperatureModule,
        Lookbrbackendv2DayTimeModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Lookbrbackendv2EntityModule {}
