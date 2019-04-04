import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SietecrucesComponent } from './sietecruces.component';

describe('SietecrucesComponent', () => {
  let component: SietecrucesComponent;
  let fixture: ComponentFixture<SietecrucesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SietecrucesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SietecrucesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
