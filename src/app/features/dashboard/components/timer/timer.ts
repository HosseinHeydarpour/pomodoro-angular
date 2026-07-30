import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PomoTimer } from './pomo-timer/pomo-timer';
import { Summary } from './summary/summary';
import { TasksWidget } from './tasks-widget/tasks-widget';
import { NotesWidget } from './notes-widget/notes-widget';

@Component({
  selector: 'app-timer',
  imports: [PomoTimer, Summary, TasksWidget, NotesWidget],
  templateUrl: './timer.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './timer.scss',
})
export class Timer {}
