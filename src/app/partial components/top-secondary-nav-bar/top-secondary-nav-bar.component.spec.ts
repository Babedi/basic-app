import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSecondaryNavBarComponent } from './top-secondary-nav-bar.component';

describe('TopSecondaryNavBarComponent', () => {
  let component: TopSecondaryNavBarComponent;
  let fixture: ComponentFixture<TopSecondaryNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSecondaryNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSecondaryNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
