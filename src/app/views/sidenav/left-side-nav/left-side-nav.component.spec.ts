import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSideNavComponent } from './left-side-nav.component';

xdescribe('LeftSideNavComponent', () => {
  let component: LeftSideNavComponent;
  let fixture: ComponentFixture<LeftSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LeftSideNavComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
