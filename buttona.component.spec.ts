import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonaComponent } from './buttona.component';

describe('ButtonaComponent', () => {
  let component: ButtonaComponent;
  let fixture: ComponentFixture<ButtonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
