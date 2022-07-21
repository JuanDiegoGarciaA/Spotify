import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import * as mockRaw from '../../../data/user.json'
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;
  let mockUser : any = (mockRaw as any).default
  let HttpClientspy:{post: jasmine.Spy}

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    HttpClientspy = jasmine.createSpyObj('HttpClient',['post'])
    service = new AuthService(HttpClientspy as any)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debe de retornar un objeto con "data" y "tokenSession"', (done:DoneFn) => {
    // Arrage
    const user: any = mockUser.userOk
    const mockResponse = {
      data: {},
      tokenSession: '0x0x0x'
    }

    HttpClientspy.post.and.returnValue(
      of(mockResponse) 
    )

    //TODO: Act
    service.sendCredentials(user.email, user.password)
      .subscribe(responseApi => {
        const getProperties = Object.keys(responseApi)
        expect(getProperties).toContain('data')
        expect(getProperties).toContain('tokenSession')
        done()
      })
  })
});
