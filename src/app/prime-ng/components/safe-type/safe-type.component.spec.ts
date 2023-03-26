import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeTypeComponent } from './safe-type.component';

describe('SafeTypeComponent', () => {
  let component: SafeTypeComponent;
  let fixture: ComponentFixture<SafeTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafeTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SafeTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
