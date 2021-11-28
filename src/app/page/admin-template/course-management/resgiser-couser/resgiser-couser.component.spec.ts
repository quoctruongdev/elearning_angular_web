import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgiserCouserComponent } from './resgiser-couser.component';

describe('ResgiserCouserComponent', () => {
  let component: ResgiserCouserComponent;
  let fixture: ComponentFixture<ResgiserCouserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResgiserCouserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResgiserCouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
