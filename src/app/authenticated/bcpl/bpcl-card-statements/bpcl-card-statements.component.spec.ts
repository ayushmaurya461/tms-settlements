import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpclCardStatementsComponent } from './bpcl-card-statements.component';

describe('BpclCardStatementsComponent', () => {
  let component: BpclCardStatementsComponent;
  let fixture: ComponentFixture<BpclCardStatementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpclCardStatementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BpclCardStatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
