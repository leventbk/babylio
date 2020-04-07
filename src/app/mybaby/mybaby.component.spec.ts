import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MybabyComponent } from './mybaby.component';

describe('MybabyComponent', () => {
  let component: MybabyComponent;
  let fixture: ComponentFixture<MybabyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MybabyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MybabyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
