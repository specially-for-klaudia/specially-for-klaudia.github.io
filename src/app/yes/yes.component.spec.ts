import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YesComponent } from './yes.component';

describe('YesComponent', () => {
  let component: YesComponent;
  let fixture: ComponentFixture<YesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
