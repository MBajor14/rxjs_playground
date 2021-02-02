import { Observable } from "rxjs";
import { logItem } from "./lib/helpers";

export const example = (): void => {
    // example
    const observable = Observable.create((observer:any) => {
        observer.next('Hello World!');
        observer.next('Hello Again!');
        observer.complete();
        observer.next('Bye');
    });
    
    observable.subscribe(
        (x:any) => logItem(x),
        (error: any) => logItem ('Error: ' + error),
        () => logItem('Completed')
    );
}