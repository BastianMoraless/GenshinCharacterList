import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PjListComponent } from './pj-list.component';

describe('PjListComponent', () => {
  let component: PjListComponent;
  let fixture: ComponentFixture<PjListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PjListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PjListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
