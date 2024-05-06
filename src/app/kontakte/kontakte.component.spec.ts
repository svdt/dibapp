import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KontakteComponent } from './kontakte.component';

describe('KontakteComponent', () => {
  let component: KontakteComponent;
  let fixture: ComponentFixture<KontakteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KontakteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KontakteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
