import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AwesomeJhipster4DemoBlogModule } from './blog/blog.module';
import { AwesomeJhipster4DemoEntryModule } from './entry/entry.module';
import { AwesomeJhipster4DemoTagModule } from './tag/tag.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        AwesomeJhipster4DemoBlogModule,
        AwesomeJhipster4DemoEntryModule,
        AwesomeJhipster4DemoTagModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AwesomeJhipster4DemoEntityModule {}
