import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletecomponentComponent } from './deletecomponent.component';

describe('DeletecomponentComponent', () => {
  let component: DeletecomponentComponent;
  let fixture: ComponentFixture<DeletecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
