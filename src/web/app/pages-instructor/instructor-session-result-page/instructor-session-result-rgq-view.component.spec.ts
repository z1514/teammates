import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingSpinnerModule } from '../../components/loading-spinner/loading-spinner.module';
import { PanelChevronModule } from '../../components/panel-chevron/panel-chevron.module';
import {
  GrqRgqViewResponsesModule,
} from '../../components/question-responses/grq-rgq-view-responses/grq-rgq-view-responses.module';
import { InstructorSessionResultRgqViewComponent } from './instructor-session-result-rgq-view.component';

describe('InstructorSessionResultRgqViewComponent', () => {
  let component: InstructorSessionResultRgqViewComponent;
  let fixture: ComponentFixture<InstructorSessionResultRgqViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [InstructorSessionResultRgqViewComponent],
      imports: [GrqRgqViewResponsesModule, NgbModule, LoadingSpinnerModule, PanelChevronModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorSessionResultRgqViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
