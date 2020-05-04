import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopimdbComponent } from './topimdb.component';

describe('TopimdbComponent', () => {
  let component: TopimdbComponent;
  let fixture: ComponentFixture<TopimdbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopimdbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopimdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
