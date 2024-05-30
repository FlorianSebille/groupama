import {
  Component,
  ViewChild,
  AfterViewInit,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { DayPilot, DayPilotSchedulerComponent } from 'daypilot-pro-angular';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../stores/store';
import {
  addEvent,
  addRessource,
  loadUsers,
  updateEvent,
  updateRessource,
} from '../../stores/actions';
import { selectEvents$, selectRessources$ } from '../../stores/selectors';

@Component({
  selector: 'scheduler-component',
  template: `<daypilot-scheduler
    [config]="config"
    [events]="events$"
    #scheduler
  ></daypilot-scheduler>`,
  styles: [``],
})
export class SchedulerComponent implements AfterViewInit {
  @ViewChild('scheduler')
  scheduler!: DayPilotSchedulerComponent;

  config: DayPilot.SchedulerConfig = {
    timeHeaders: [{ groupBy: 'Month' }, { groupBy: 'Day', format: 'd' }],
    scale: 'Day',
    days: 90,
    dynamicLoading: true,
    infiniteScrollingEnabled: true,
    infiniteScrollingMargin: 10,
    infiniteScrollingStepDays: 30,
    dynamicEventRendering: 'Disabled',
    treeEnabled: true,
    rowHeaderColumns: [
      { text: 'Name', display: 'name', sort: 'name' },
      { text: 'Capacity', display: 'capacity', sort: 'capacity' },
    ],
    timeRangeSelectedHandling: 'Enabled',
    onTimeRangeSelected: async (args) => {
      const dp = args.control;
      const modal = await DayPilot.Modal.prompt(
        'Create a new event:',
        'Event 1'
      );
      dp.clearSelection();
      if (modal.canceled) {
        return;
      }

      this.addEventFunction({
        start: args.start,
        end: args.end,
        id: DayPilot.guid(),
        resource: args.resource,
        text: modal.result,
      });
    },
    contextMenu: new DayPilot.Menu({
      items: [
        {
          text: 'Edit...',
          onClick: async (args) => {
            const e = args.source;
            this.editEvent(e);
          },
        },
        {
          text: 'Delete',
          onClick: (args) => {
            const e = args.source;
            this.scheduler.control.events.remove(e);
          },
        },
      ],
    }),
    onScroll: (args) => {
      // these values are default since 2020.1.4276
      args.async = true;
      args.clearEvents = true;
      // load events in advance, +/- one month
      const from = args.viewport.start.addMonths(-1);
      const to = args.viewport.end.addMonths(1);

      this.store.select(selectEvents$).subscribe((result) => {
        args.events = result;
        args.loaded();
      });
    },

    onBeforeEventRender: (args) => {
      args.data.areas = [
        {
          right: 5,
          top: 10,
          width: 16,
          height: 16,
          symbol: 'assets/daypilot.svg#minichevron-down-2',
          fontColor: '#aaa',
          backColor: '#fff',
          action: 'ContextMenu',
          style: 'border: 1px solid #aaa; border-radius: 50%;',
          visibility: 'Hover',
        },
      ];
    },
    bubble: new DayPilot.Bubble({
      onLoad: (args) => {
        args.html = DayPilot.Util.escapeHtml(
          args.source.data.description || ''
        );
      },
    }),
    onEventClick: (args) => {
      this.editEvent(args.e);
    },
    eventMoveHandling: 'Update',
    onEventMoved: (args) => {
      args.control.message('Event moved: ' + args.e.text());
    },
    eventResizeHandling: 'Update',
    onEventResized: (args) => {
      args.control.message('Event resized: ' + args.e.text());
    },
  };

  events$: DayPilot.EventData[];
  isLoading$: Observable<boolean>;

  constructor(
    private store: Store<AppState>,
    private cdRef: ChangeDetectorRef
  ) {
    this.events$ = [];
    this.store.dispatch(loadUsers());

    this.isLoading$ = this.store.select((state) => state.users.loading);
  }

  async editEvent(e: DayPilot.Event): Promise<void> {
    const form = [
      { name: 'Name', id: 'text', type: 'text' },
      { name: 'Description', id: 'description', type: 'textarea' },
    ];
    const modal = await DayPilot.Modal.form(form, e.data);
    if (modal.canceled) {
      return;
    }
    const updated = modal.result;
    this.scheduler.control.events.update(updated);
  }

  addRessourceFunction(name: string, id: string, capacity: number) {
    const ressource: DayPilot.ResourceData = {
      name: name,
      id: id,
      capacity: capacity,
    };
    this.store.dispatch(addRessource({ ressource }));
  }
  addEventFunction(event: DayPilot.EventData) {
    this.store.dispatch(addEvent({ event: event }));

    this.store.select(selectEvents$).forEach((elem) => console.log(elem));
  }
  completeRessources(ressource: DayPilot.ResourceData) {
    this.store.dispatch(
      updateRessource({ ressource: { ...ressource, completed: true } })
    );
  }
  completeEvent(event: DayPilot.EventData) {
    this.store.dispatch(updateEvent({ event: { ...event, completed: true } }));
  }

  ngAfterViewInit(): void {
    this.store.select(selectEvents$).subscribe((result) => {
      this.events$ = result;
      console.log('events : ', result);
    });
    this.store.select(selectRessources$).subscribe((result) => {
      this.config.resources = result;
      console.log('ressources : ', result);
    });
    this.cdRef.detectChanges();
  }
}
