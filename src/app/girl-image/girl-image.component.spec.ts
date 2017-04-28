import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GirlImageComponent } from './girl-image.component';

describe('GirlImageComponent', () => {
  let component: GirlImageComponent;
  let fixture: ComponentFixture<GirlImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GirlImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GirlImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
