import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MurcieladoComponent } from './murcielado.component';

describe('MurcieladoComponent', () => {
  let component: MurcieladoComponent;
  let fixture: ComponentFixture<MurcieladoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MurcieladoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MurcieladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
