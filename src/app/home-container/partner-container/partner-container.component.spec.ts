import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerContainerComponent } from './partner-container.component';

describe('PartnerContainerComponent', () => {
  let component: PartnerContainerComponent;
  let fixture: ComponentFixture<PartnerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
