import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnInit,
} from '@angular/core';
import { INgxSelectOption } from 'ngx-select-ex';

@Component({
  selector: 'borderless-select2',
  templateUrl: './borderless-select2.component.html',
  styleUrls: ['./borderless-select2.component.css'],
})
export class BorderlessSelect2Component implements AfterViewInit, OnInit {
  @ViewChild('normalInput') normalInput!: ElementRef;

  @Input() options: any = [];
  @Input() width: string = 'auto';
  @Input() class: string = '';
  @Input() multiple: boolean = false;
  @Input() required: boolean = false;
  @Input() allowClear: boolean = true;
  @Input() placeholder: string = '';
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() isFocused: boolean = false;
  @Output('onChange') onChange: any = new EventEmitter();

  @Input() selectedData: any = [];
  @Input() prevElement: any = {};
  @Input() nextElement: any = {};

  public disableShiftFocus: boolean = false;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  public inputTyped = (source: string, text: string) => {
    let evt: any = event;
    evt.preventDefault();

    if (!this.disableShiftFocus) {
      if ((evt?.key == 'Tab' || evt.keyCode == 9) && evt.shiftKey) {
        if (
          this.prevElement.id &&
          this.prevElement.id != '' &&
          this.prevElement.type &&
          this.prevElement.type != ''
        ) {
          if (this.prevElement.type == 'select') {
            setTimeout(() => {
              $('#' + this.prevElement.id + ' .ngx-select').trigger('focus');
            }, 10);
          } else {
            setTimeout(() => {
              $('#' + this.prevElement.id).trigger('focus');
            }, 10);
          }
        }
      }
    }
    this.disableShiftFocus = false;
  };

  public doFocus = (id: string) => {
    let evt: any = event;
    if (
      $(evt.relatedTarget).attr('class') != 'ngx-select__search form-control'
    ) {
      this.disableShiftFocus = true;
    }
    $('#' + id + ' .ngx-select__toggle').trigger('click');
    // console.log('SingleDemoComponent.doFocus',);
  };

  public doBlur = () => {
    // console.log('SingleDemoComponent.doBlur');
  };

  public doOpen = (id: string) => {
    $('#' + id + ' .ngx-select_multiple .ngx-select__selected').removeClass(
      'show'
    );
    setTimeout(function () {
      $('#' + id + ' .ngx-select__choices > li a').each(function () {
        $(this).attr('tabindex', '-1');
      });
    }, 100);
    // console.log('SingleDemoComponent.doOpen',);
  };

  public doClose = () => {
    let evt: any = event;
    if (this.selectedData == 0 || this.selectedData === '0') {
      this.selectedData = [this.options[0]?.id];
    }
    if (evt.type == 'keydown') {
      if (this.nextElement.type == 'select') {
        setTimeout(() => {
          const targetElement = $('#' + this.nextElement.id + ' .ngx-select');
          if (targetElement.length > 0) {
            setTimeout(() => {
              targetElement.trigger('focus');
            }, 10);
          } else {
            setTimeout(() => {
              $('#' + this.nextElement.id + 'normalInput').trigger('focus');
            }, 10);
          }
        }, 100);
      } else {
        setTimeout(() => {
          $('#' + this.nextElement.id).trigger('focus');
        }, 10);
      }
    }
  };

  public doSelect = (value: any) => {
    // console.log('SingleDemoComponent.doSelect', value);
  };

  public doRemove = (value: any) => {
    // console.log('SingleDemoComponent.doRemove', value);
  };

  public doSelectOptions = (options: INgxSelectOption[], id: string) => {
    $('#selected-options-count.' + id).text(options.length);
    let data: any = [];
    options.forEach((option: any) => {
      data.push(option.value);
    });
    this.onChange.emit(data);
    if (options.length == 0) {
      $('#' + id + ' .ngx-select_multiple .ngx-select__selected').removeClass(
        'show'
      );
    }
  };

  public showSelectedOptions(id: string) {
    $('#' + id + ' .ngx-select_multiple .ngx-select__selected').toggleClass(
      'show'
    );
  }

  public setValueForNormalInput(evnt: KeyboardEvent) {
    if (evnt.key == 'Enter' || evnt.code == 'Enter') {
      const data = this.normalInput.nativeElement.value;
      this.onChange.emit(data);
      if (!(data == '')) {
        if (this.nextElement.type == 'select') {
          setTimeout(() => {
            $('#' + this.nextElement.id + ' .ngx-select').trigger('focus');
          }, 10);
        } else {
          setTimeout(() => {
            $('#' + this.nextElement.id).trigger('focus');
          }, 10);
        }
      } else {
        if (confirm('You can not leave this blank') == true) {
          setTimeout(() => {
            $('#' + this.id + 'normalInput').trigger('focus');
          }, 10);
        } else {
          setTimeout(() => {
            $('#' + this.id + 'normalInput').trigger('focus');
          }, 10);
        }
      }
    }
  }
}
