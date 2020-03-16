import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadformComponent } from './threadform.component';

describe('ThreadformComponent', () => {
  let component: ThreadformComponent;
  let fixture: ComponentFixture<ThreadformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreadformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
