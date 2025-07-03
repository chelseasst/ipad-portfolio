import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Batteries } from './batteries';

describe('Batteries', () => {
  let component: Batteries;
  let fixture: ComponentFixture<Batteries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Batteries]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Batteries);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
