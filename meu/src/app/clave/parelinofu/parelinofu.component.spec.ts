import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParelinofuComponent } from './parelinofu.component';

describe('ParelinofuComponent', () => {
  let component: ParelinofuComponent;
  let fixture: ComponentFixture<ParelinofuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParelinofuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParelinofuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
