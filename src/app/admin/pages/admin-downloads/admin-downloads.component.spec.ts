import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDownloadsComponent } from './admin-downloads.component';

describe('AdminDownloadsComponent', () => {
  let component: AdminDownloadsComponent;
  let fixture: ComponentFixture<AdminDownloadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDownloadsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDownloadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
