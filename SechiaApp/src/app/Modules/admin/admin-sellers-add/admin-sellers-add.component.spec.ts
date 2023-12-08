import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSellersAddComponent } from './admin-sellers-add.component';

describe('AdminSellersAddComponent', () => {
  let component: AdminSellersAddComponent;
  let fixture: ComponentFixture<AdminSellersAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSellersAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSellersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
