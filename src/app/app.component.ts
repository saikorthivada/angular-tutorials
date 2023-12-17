import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ScratchCard, SCRATCH_TYPE } from 'scratchcard-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // @ViewChild('scratchCardContainer') scratchCardContainer!: ElementRef;
  // hideScratchCard = false;
  // ngAfterViewInit(): void {
  //   const sc = new ScratchCard(this.scratchCardContainer.nativeElement, {
  //     scratchType: SCRATCH_TYPE.CIRCLE,
  //     containerWidth: this.scratchCardContainer.nativeElement.offsetWidth,
  //     containerHeight: 300,
  //     imageForwardSrc: './../assets/beforeScratch.png',
  //     imageBackgroundSrc: '',
  //     clearZoneRadius: 20,
  //     nPoints: 0,
  //     pointSize: 0,
  //     brushSrc: '',
  //     htmlBackground: '',
  //     enabledPercentUpdate: true,
  //     percentToFinish: 100,
  //     callback: function () {
  //       console.log('done');
  //     }
  //   });

  //   sc.init().then((res) => {
  //     console.log('res', res)
  //   }).catch(err => {
  //     console.log(err);
  //   });

  //   sc.canvas.addEventListener('scratch.move', () => {
  //     let percent = sc.getPercent();
  //     console.log(percent);
  //     if(percent>50) {
  //       this.hideScratchCard = true
  //     }
  //   });
  // }

  spin() {
    let container = document.querySelector(".container") as HTMLDivElement;
    let number = Math.ceil(Math.random() * 1000);
    console.log(number);
    container.style.transform = "rotate(" + number + "deg)";
    number += Math.ceil(Math.random() * 1000);
    console.log(number);

    console.log(document.getElementById('main'))
  }
}
