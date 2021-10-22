import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignupCustomerPage } from './signup-customer.page';

describe('SignupCustomerPage', () => {
  let component: SignupCustomerPage;
  let fixture: ComponentFixture<SignupCustomerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupCustomerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupCustomerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
