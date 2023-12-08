import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSellersAddFormComponent } from './admin-sellers-add-form.component';

describe('AdminSellersAddFormComponent', () => {
  let component: AdminSellersAddFormComponent;
  let fixture: ComponentFixture<AdminSellersAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSellersAddFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSellersAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
