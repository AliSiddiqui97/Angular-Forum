import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsAndAdsComponent } from './tags-and-ads.component';

describe('TagsAndAdsComponent', () => {
  let component: TagsAndAdsComponent;
  let fixture: ComponentFixture<TagsAndAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagsAndAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsAndAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
