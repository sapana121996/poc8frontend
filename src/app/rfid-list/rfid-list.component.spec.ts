import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RfidListComponent } from './rfid-list.component';

describe('RfidListComponent', () => {
  let component: RfidListComponent;
  let fixture: ComponentFixture<RfidListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RfidListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RfidListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
