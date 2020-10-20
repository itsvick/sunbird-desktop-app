import { of } from 'rxjs';
import { collectionData } from './toc-page.component.spec.data';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule, NavigationHelperService } from '@sunbird/shared';
import { TelemetryModule } from '@sunbird/telemetry';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TocPageComponent } from './toc-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '@sunbird/core';
import { ResourceService } from '@sunbird/shared';

describe('TocPageComponent', () => {
  let component: TocPageComponent;
  let fixture: ComponentFixture<TocPageComponent>;
  const ActivatedRouteStub = {
    params: of({
      collectionId: 'do_312352584359821312285'
    }),
    snapshot: {
      data: {
        telemetry: {
          env: 'content',
          pageid: 'play-collection',
          subtype: 'paginate'
        }
      },
    },
    queryParams: {
      params: {
        contentId: collectionData.collection.result.content.children[0].identifier,
      }
    },
  };

  const resourceMockData = {
    frmelmnts: {
      btn: {
        all: 'All',
        video: 'Video',
        interactive: 'Interactive',
        docs: 'Docs'
      }
    },
    languageSelected$: of({})
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TocPageComponent],
      imports: [TelemetryModule.forRoot(), SharedModule.forRoot(), HttpClientTestingModule, RouterTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: ActivatedRouteStub }, ContentService,
        { provide: ResourceService, useValue: resourceMockData }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TocPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call onplayContent', () => {
    expect(component).toBeTruthy();
    spyOn(component, 'OnPlayContent');
    spyOn(component, 'logTelemetry');
    const collection = collectionData.collection.result.content;
    component.collectionData = collection;
    component.tocCardClickHandler({ data: collection.children[0], rollup: {} });
    expect(component.OnPlayContent).toHaveBeenCalledWith(collection.children[0], true);
    expect(component.logTelemetry).toHaveBeenCalledWith('content-inside-collection', {}, collection.children[0]);
    expect(component.isContentPresent).toBeTruthy();
  });

  it('should change active mimeType filter', () => {
    spyOn(component, 'logTelemetry');
    expect(component.activeMimeTypeFilter[0]).toEqual('all');
    component.selectedFilter({ data: { text: 'video', value: 'video' } });
    expect(component.activeMimeTypeFilter).toEqual('video');
    expect(component.logTelemetry).toHaveBeenCalledWith('filter-video');
  });

  it('should call navigateToContent', () => {
    spyOn<any>(component, 'navigateToContent');
    const content = collectionData.collection.result.content.children[0];
    component.OnPlayContent(content, true);
    expect(component['navigateToContent']).toHaveBeenCalledWith(content);
  });

  it('show make isContentpresent false', () => {
    expect(component.isContentPresent).toBeTruthy();
    component.showNoContent({ message: 'No Content Available' });
    expect(component.isContentPresent).toBeFalsy();
  });

  it('should handle contentFullScreenEvent', () => {
    const contentService = TestBed.get(ContentService);
    spyOn(contentService, 'contentFullScreenEvent').and.returnValue(of());
    expect(component.isFullScreenView).toBeFalsy();
  });

  it('should call sortChildrenWithIndex', () => {
    const returnValue = component.sortChildrenWithIndex(collectionData.unOrderedTocData);
    expect(returnValue).toEqual(collectionData.orderedTocData);
  });

  it('should assign dialcode', () => {
    const navigationHelperService = TestBed.get(NavigationHelperService);
    navigationHelperService['_history'] = [{ url: '/browse' }, { url: 'dial/123d4' }, { url: 'play/collection' }];
    component.ngOnInit();
    expect(component.dialCode).toEqual('123d4');
  });

  it('should not assign dialcode', () => {
    const navigationHelperService = TestBed.get(NavigationHelperService);
    navigationHelperService['_history'] = [{ url: '/browse' }, { url: 'search/key?con' }, { url: 'play/collection' }];
    component.ngOnInit();
    expect(component.dialCode).toEqual('');
  });

});
