import { fromEvent, merge, Observable } from "rxjs";
import { bufferMap } from 'rxjs-operators';

// check out buffer count and buffer when

export const fromEvent_example = (): void => {
    const 
        triggerBtn = document.getElementsByName('triggerBtn'),
        triggerBtnObservable$ = fromEvent(triggerBtn[0], 'click'),
        
        badBtn = document.getElementsByName('badBtn'),
        badBtnObservable$ = fromEvent(badBtn[0], 'click'),

        switchBtn = document.getElementsByName('switchBtn'),
        switchBtnObservable$ = fromEvent(switchBtn[0], 'click');
        // challenge is to take a event from button and extend to do something with complete
        // and then pass into bufferMap. build up clicks and then release all when other
        // button clicked

    merge(
        badBtnObservable$,
        triggerBtnObservable$
    ).subscribe(res => {
        console.log(res);
        console.log('Clicked!');
    });

    // triggerBtnObservable$.pipe(bufferMap()).subscribe(() => {
    //     console.log('switch');
    // });
};