import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndeXComponent } from './inde-x.component';

describe('IndeXComponent', () => {
  let component: IndeXComponent;
  let fixture: ComponentFixture<IndeXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndeXComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndeXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
