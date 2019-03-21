import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocManadaComponent } from './doc-manada.component';

describe('DocManadaComponent', () => {
  let component: DocManadaComponent;
  let fixture: ComponentFixture<DocManadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocManadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocManadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
