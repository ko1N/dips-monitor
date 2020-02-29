import { Component, HostListener, Input, OnChanges, OnInit, SimpleChanges, ViewChild, AfterViewInit, ViewChildren, QueryList, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.sass']
})
export class ConsoleComponent implements AfterViewInit, OnDestroy, OnChanges {

  ngOnChanges(): void {
    this.onLinesChanged();
  }
  @Input() messages: Array<string>;

  @ViewChild('console', { static: false }) console;
  @ViewChildren('line') lines: QueryList<any>;

  private linesSub: any;
  private consoleContainer: any;

  constructor() { }

  ngAfterViewInit(): void {
    this.consoleContainer = this.console.nativeElement;
    this.linesSub = this.lines.changes.subscribe(_ => this.onLinesChanged());
  }

  ngOnDestroy(): void {
    this.linesSub.unsubscribe();
  }

  private onLinesChanged(): void {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    if (this.consoleContainer) {
      // -2 is required because we have a top/bottom border of 1px each
      if (this.consoleContainer.scrollTop - 2 === (this.consoleContainer.scrollHeight - this.consoleContainer.offsetHeight)) {
        this.consoleContainer.scroll({
          top: this.consoleContainer.scrollHeight,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }

}
