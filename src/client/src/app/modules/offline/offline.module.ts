import { ContentManagerService } from './services';
import {
    SuiModalModule, SuiProgressModule, SuiAccordionModule,
    SuiTabsModule, SuiSelectModule, SuiDimmerModule, SuiCollapseModule, SuiDropdownModule
} from 'ng2-semantic-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@sunbird/core';
import { SharedModule } from '@sunbird/shared';
import { OfflineRoutingModule } from './offline-routing.module';
import { DeviceDetectorService } from 'ngx-device-detector';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    ContentImportHeaderComponent, WatchVideoComponent,
    BrowseComponent, ContentManagerComponent, OfflineHelpCenterComponent, DesktopAppUpdateComponent,
    LibraryComponent, DesktopHeaderComponent, LibraryFiltersComponent,
    OfflineFaqComponent, OfflineHelpVideosComponent, OnboardingComponent,
    OnboardingLocationComponent, OnboardingUserPreferenceComponent, DesktopProminentFilterComponent,
    LoadContentComponent, NoContentComponent, ConnectionStatusComponent, InfoCardComponent,
    ProfileDropdownComponent, SearchComponent, ViewMoreComponent,
    ContentManagerInfoPopUpComponent, CustomCheckboxComponent
} from './components';
import { WebExtensionModule } from '@project-sunbird/web-extensions';
import { FileSizeModule } from 'ngx-filesize';
import { OrderModule } from 'ngx-order-pipe';
import { SlickModule } from 'ngx-slick';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonConsumptionModule } from '@project-sunbird/common-consumption';
import { DesktopExploreContentComponent } from './components/desktop-explore-content/desktop-explore-content.component';
import { NgInviewModule } from 'angular-inport';
@NgModule({
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        CoreModule,
        SharedModule,
        OfflineRoutingModule,
        SuiModalModule,
        SuiProgressModule,
        SuiSelectModule,
        WebExtensionModule,
        FileSizeModule,
        SuiAccordionModule,
        SuiTabsModule,
        OrderModule,
        SlickModule,
        ReactiveFormsModule,
        CommonConsumptionModule,
        SuiDimmerModule,
        NgInviewModule,
        SuiCollapseModule,
        SuiDropdownModule
    ],
    providers: [DeviceDetectorService, ContentManagerService],
    declarations: [ContentImportHeaderComponent, WatchVideoComponent,
        BrowseComponent, WatchVideoComponent, ContentImportHeaderComponent, BrowseComponent,
        WatchVideoComponent, ContentManagerComponent, OfflineHelpCenterComponent,
        DesktopAppUpdateComponent,
        LibraryComponent,
        DesktopHeaderComponent,
        LibraryFiltersComponent,
        OfflineFaqComponent,
        OfflineHelpVideosComponent,
        DesktopExploreContentComponent,
        OnboardingComponent,
        OnboardingLocationComponent,
        OnboardingUserPreferenceComponent,
        DesktopProminentFilterComponent,
        ConnectionStatusComponent,
        NoContentComponent,
        LoadContentComponent,
        InfoCardComponent,
        ProfileDropdownComponent,
        SearchComponent,
        ViewMoreComponent,
        ContentManagerInfoPopUpComponent,
        CustomCheckboxComponent
    ],
    entryComponents: [
        ContentImportHeaderComponent,
        BrowseComponent,
        ContentManagerComponent,
        WatchVideoComponent,
        ContentImportHeaderComponent,
    ],
    exports: [DesktopAppUpdateComponent, DesktopHeaderComponent, LibraryFiltersComponent, OnboardingComponent,
         ContentManagerInfoPopUpComponent, CustomCheckboxComponent,
        OnboardingLocationComponent, NoContentComponent, ConnectionStatusComponent, InfoCardComponent, ProfileDropdownComponent]
})
export class OfflineModule { }
