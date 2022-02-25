import { Component, HostListener, Input, OnChanges, OnInit, SimpleChanges, ViewChild, AfterViewInit, ViewChildren, QueryList, OnDestroy } from '@angular/core';

enum ConsoleMessageType {
  Debug = 0,
  Info = 1,
  Warn = 2,
  Error = 3,
  Crit = 4,

  StdOut = 10,
  StdErr = 11,
}

export class ConsoleMessage {
  type: ConsoleMessageType;
  message: string;
}

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.sass']
})
export class ConsoleComponent implements AfterViewInit, OnDestroy, OnChanges {

  @Input() messages: Array<ConsoleMessage>;
  private messagesLength = 0;

  @ViewChild('console', { static: false }) console;
  @ViewChildren('line') lines: QueryList<any>;

  private linesSub: any;
  private consoleContainer: any;

  constructor() { }

  ngAfterViewInit(): void {
    this.consoleContainer = this.console.nativeElement;
    this.linesSub = this.lines.changes.subscribe(_ => this.onLinesChanged());
  }

  ngOnChanges(): void {
    this.onLinesChanged();
  }

  ngOnDestroy(): void {
    this.linesSub.unsubscribe();
  }

  getMessageClass(message: ConsoleMessage) {
    switch (message.type) {
      case ConsoleMessageType.Debug:
        return `debug`;
      case ConsoleMessageType.Info:
        return `info`;
      case ConsoleMessageType.Warn:
        return `warn`;
      case ConsoleMessageType.Error:
        return `error`;
      case ConsoleMessageType.Crit:
        return `crit`;

      case ConsoleMessageType.StdOut:
        return `stdout`;
      case ConsoleMessageType.StdErr:
        return `stderr`;
    }
  }

  trackLine(index: number, item: any) {
    return index;
  }

  private onLinesChanged(): void {
    if (this.messages.length > this.messagesLength) {
      this.scrollToBottom();
      this.messagesLength = this.messages.length;
    }
  }

  private scrollToBottom(): void {
    if (this.consoleContainer) {
      // -2 is required because we have a top/bottom border of 1px each
      //if (this.consoleContainer.scrollTop - 2 === (this.consoleContainer.scrollHeight - this.consoleContainer.offsetHeight)) {
      this.consoleContainer.scroll({
        top: this.consoleContainer.scrollHeight,
        left: 0,
        behavior: 'smooth'
      });
      //}
    }
  }

}
