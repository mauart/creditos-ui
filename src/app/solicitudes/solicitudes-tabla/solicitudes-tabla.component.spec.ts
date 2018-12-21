import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesTablaComponent } from './solicitudes-tabla.component';

describe('SolicitudesTablaComponent', () => {
  let component: SolicitudesTablaComponent;
  let fixture: ComponentFixture<SolicitudesTablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudesTablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
