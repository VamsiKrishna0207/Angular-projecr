import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficalSiteComponent } from './offical-site.component';

describe('OfficalSiteComponent', () => {
  let component: OfficalSiteComponent;
  let fixture: ComponentFixture<OfficalSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficalSiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficalSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
