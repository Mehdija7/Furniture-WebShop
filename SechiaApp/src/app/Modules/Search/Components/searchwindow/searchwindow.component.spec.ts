import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchwindowComponent } from './searchwindow.component';

describe('SearchwindowComponent', () => {
  let component: SearchwindowComponent;
  let fixture: ComponentFixture<SearchwindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchwindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchwindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
