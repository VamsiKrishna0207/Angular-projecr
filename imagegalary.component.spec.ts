import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagegalaryComponent } from './imagegalary.component';

describe('ImagegalaryComponent', () => {
  let component: ImagegalaryComponent;
  let fixture: ComponentFixture<ImagegalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagegalaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagegalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
