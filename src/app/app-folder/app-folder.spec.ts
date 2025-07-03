import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFolder } from './app-folder';

describe('AppFolder', () => {
  let component: AppFolder;
  let fixture: ComponentFixture<AppFolder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppFolder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppFolder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
