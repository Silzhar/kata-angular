import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KatapassengerComponent } from './katapassenger.component';

describe('KatapassengerComponent', () => {
  let component: KatapassengerComponent;
  let fixture: ComponentFixture<KatapassengerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KatapassengerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KatapassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
