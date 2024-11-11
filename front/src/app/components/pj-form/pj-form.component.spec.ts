import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PjFormComponent } from './pj-form.component';

describe('PjFormComponent', () => {
  let component: PjFormComponent;
  let fixture: ComponentFixture<PjFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PjFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PjFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
