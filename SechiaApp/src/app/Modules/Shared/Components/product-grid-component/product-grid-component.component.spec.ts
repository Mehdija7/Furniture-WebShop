import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGridComponentComponent } from './product-grid-component.component';

describe('ProductGridComponentComponent', () => {
  let component: ProductGridComponentComponent;
  let fixture: ComponentFixture<ProductGridComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductGridComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductGridComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
