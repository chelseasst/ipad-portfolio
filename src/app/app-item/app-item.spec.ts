import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppItem } from './app-item';

describe('AppItem', () => {
  let component: AppItem;
  let fixture: ComponentFixture<AppItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
