import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { DayPilot, DayPilotSchedulerComponent } from 'daypilot-pro-angular';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserListModule } from '../../stores/actions/user-list.action';
import { AppState } from '../../stores';
import { User, UsersListState } from '../../models/users.model';
import { selectUsers$ } from '../../stores/selectors/user-list.selector';

@Component({
  selector: 'scheduler-component',
  template: ` <daypilot-scheduler
    [config]="config"
    #scheduler
  ></daypilot-scheduler>`,
  styles: [``],
})
export class SchedulerComponent implements AfterViewInit, OnInit {
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

        console.log(dp);
        console.log(dp.events);
        console.log(DayPilot.guid());

        const newEvent = new DayPilot.Event({
          start: args.start,
          end: args.end,
          id: DayPilot.guid(),
          resource: args.resource,
          text: modal.result,
        });

        dp.events.add(newEvent);
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

      this.users$.subscribe((result) => {
        args.events = result ? result.events : [];
        args.loaded();
      });
    },
    treeEnabled: true,
  };

  users$: Observable<User | null>;

  constructor(private store: Store<AppState>) {
    this.users$ = store.pipe(select(selectUsers$));
  }

  ngAfterViewInit(): void {
    this.users$.subscribe(
      (result) => (this.config.resources = result ? result.ressources : [])
    );

    // use scrollTo method instead of config.startDate
    // if not called, it will display the current date

    // this.scheduler.control.scrollTo("2021-06-12");
  }

  ngOnInit() {
    this.store.dispatch(new UserListModule.InitUsers());
  }
}
