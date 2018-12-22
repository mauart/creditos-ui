import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillasTablaComponent } from './plantillas-tabla.component';

describe('PlantillasTablaComponent', () => {
  let component: PlantillasTablaComponent;
  let fixture: ComponentFixture<PlantillasTablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantillasTablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantillasTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
