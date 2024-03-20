import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificaAnniComponent } from './verifica-anni.component';

describe('VerificaAnniComponent', () => {
  let component: VerificaAnniComponent;
  let fixture: ComponentFixture<VerificaAnniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerificaAnniComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerificaAnniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
