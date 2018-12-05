import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ramasComponent } from './ramas.component';

describe('ramasComponent', () => {
  let component: ramasComponent;
  let fixture: ComponentFixture<ramasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ramasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
