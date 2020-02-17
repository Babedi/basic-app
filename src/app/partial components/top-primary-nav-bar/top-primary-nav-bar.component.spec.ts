import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TopPrimaryNavBarComponent } from "./top-primary-nav-bar.component";

describe("TopPrimaryNavBarComponent", () => {
  let component: TopPrimaryNavBarComponent;
  let fixture: ComponentFixture<TopPrimaryNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopPrimaryNavBarComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPrimaryNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
