import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocUnidadComponent } from './doc-unidad.component';

describe('DocUnidadComponent', () => {
  let component: DocUnidadComponent;
  let fixture: ComponentFixture<DocUnidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocUnidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocUnidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
