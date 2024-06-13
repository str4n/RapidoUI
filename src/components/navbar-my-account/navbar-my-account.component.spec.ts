import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMyAccountComponent } from './navbar-my-account.component';

describe('NavbarMyAccountComponent', () => {
  let component: NavbarMyAccountComponent;
  let fixture: ComponentFixture<NavbarMyAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarMyAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarMyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
