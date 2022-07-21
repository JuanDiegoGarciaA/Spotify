import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthPageComponent } from './auth-page.component';

describe('AuthPageComponent', () => {
  let component: AuthPageComponent;
  let fixture: ComponentFixture<AuthPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientTestingModule ],
      declarations: [ AuthPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('🔴🔴🔴should validate the wrong form', () => {

    // Patron AAA

    //Arrange 
    const mockCredentials = {
      email:'0x0x0x0x0xx0',
      password:'1111111111111111111111111111'
    }
    const emailForm : any= component.formLogin.get('email')
    const passwordForm : any= component.formLogin.get('password')

    //Act
    emailForm.setValue(mockCredentials.email)
    passwordForm.setValue(mockCredentials.password)

    //Assert
    expect(component.formLogin.invalid).toEqual(true);
  });

  it('✔✔✔should validate the correct form', () => {

    // Patron AAA

    //Arrange 
    const mockCredentials = {
      email:'test@test.com',
      password:'12345678'
    }
    const emailForm : any= component.formLogin.get('email')
    const passwordForm : any= component.formLogin.get('password')

    //Act
    emailForm.setValue(mockCredentials.email)
    passwordForm.setValue(mockCredentials.password)

    //Assert
    expect(component.formLogin.invalid).toEqual(false);
  });

  it('👍The button must have the word "iniciar sesión"', () => {
    const elementRef = fixture.debugElement.query(By.css('.form-action button'))
    const getInnerText = elementRef.nativeElement.innerText

    expect(getInnerText).toEqual('Iniciar sesión')
  })
});
