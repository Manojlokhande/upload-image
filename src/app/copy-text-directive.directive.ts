import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[text-copy]'
})
export class CopyTextDirectiveDirective {

  @Input('text-copy') text: string;

  constructor() {
   
   }

  @HostListener('click') copyText() {

    var textArea = document.createElement("textarea");

    textArea.style.position = 'fixed';
    textArea.style.top = '-999px';
    textArea.style.left = '-999px';
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = '0';
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';

    textArea.value = this.text;
    document.body.appendChild(textArea);

    textArea.select();

    try {
      // Most modern browsers support execCommand('copy'|'cut'|'paste'), if it doesn't it  should throw an error
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      // Let the user know the text has been copied, e.g toast, alert etc.
      console.log(msg);
    } catch (err) {
      // Tell the user copying is not supported and give alternative, e.g alert window with the text to copy
      console.log('unable to copy');
    }
    // Finally we remove the textarea from the DOM
    document.body.removeChild(textArea);
  }
 
}
