import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocCaminantesComponent } from './doc-caminantes.component';

describe('DocCaminantesComponent', () => {
  let component: DocCaminantesComponent;
  let fixture: ComponentFixture<DocCaminantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocCaminantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocCaminantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
