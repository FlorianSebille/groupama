import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { DayPilot, DayPilotSchedulerComponent } from 'daypilot-pro-angular';
import { DataService } from './data.service';

@Component({
  selector: 'scheduler-component',
  template: ` <daypilot-scheduler
    [config]="config"
    #scheduler
  ></daypilot-scheduler>`,
  styles: [``],
})
export class SchedulerComponent implements AfterViewInit {
  @ViewChild('scheduler', { static: false })
  scheduler!: DayPilotSchedulerComponent;

  config: DayPilot.SchedulerConfig = {
    timeHeaders: [{ groupBy: 'Month' }, { groupBy: 'Day', format: 'd' }],
    scale: 'Day',
    days: 90,
    onTimeRangeSelected: function (args) {
      var dp = args.control;
      DayPilot.Modal.prompt('Create a new event:', 'Event 1').then(function (
        modal
      ) {
        dp.clearSelection();
        if (!modal.result) {
          return;
        }
        dp.events.add(
          new DayPilot.Event({
            start: args.start,
            end: args.end,
            id: DayPilot.guid(),
            resource: args.resource,
            text: modal.result,
          })
        );
      });
    },
    dynamicLoading: true,
    infiniteScrollingEnabled: true,
    infiniteScrollingMargin: 10,
    infiniteScrollingStepDays: 30,
    dynamicEventRendering: 'Disabled',
    onScroll: (args) => {
      // these values are default since 2020.1.4276
      args.async = true;
      args.clearEvents = true;

      // load events in advance, +/- one month
      const from = args.viewport.start.addMonths(-1);
      const to = args.viewport.end.addMonths(1);

      this.ds.getEvents(from, to).subscribe((result) => {
        args.events = result;
        args.loaded();
      });
    },
    treeEnabled: true,
  };

  constructor(private ds: DataService) {}

  ngAfterViewInit(): void {
    this.ds
      .getResources()
      .subscribe((result) => (this.config.resources = result));

    // use scrollTo method instead of config.startDate
    // if not called, it will display the current date

    // this.scheduler.control.scrollTo("2021-06-12");
  }
}
