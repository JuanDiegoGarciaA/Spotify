import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorypageComponent } from './historypage.component';

describe('HistorypageComponent', () => {
  let component: HistorypageComponent;
  let fixture: ComponentFixture<HistorypageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ HistorypageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
