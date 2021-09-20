import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvilmastermindsComponent } from './evilmasterminds.component';

describe('EvilmastermindsComponent', () => {
  let component: EvilmastermindsComponent;
  let fixture: ComponentFixture<EvilmastermindsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvilmastermindsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvilmastermindsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
