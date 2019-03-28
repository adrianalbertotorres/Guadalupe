import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocRobertComponent } from './DocRovert.component';

describe('DocRobertComponent', () => {
  let component: DocRobertComponent;
  let fixture: ComponentFixture<DocRobertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocRobertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocRobertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
