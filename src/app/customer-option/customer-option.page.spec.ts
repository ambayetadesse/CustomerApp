import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomerOptionPage } from './customer-option.page';

describe('CustomerOptionPage', () => {
  let component: CustomerOptionPage;
  let fixture: ComponentFixture<CustomerOptionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerOptionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerOptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
