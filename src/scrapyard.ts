import { Observable } from "rxjs";
import { logItem } from "./lib/helpers";

export const scrapyard_code = (): void => {
    const observable = new Observable((observer: any) => {
        observer.next('Yooooo');
        observer.next(20);
        observer.complete();
    });
    
    observable.subscribe(
        x => logItem(x, true),
        error => logItem(error),
        () => logItem('we done here....',true)
    );
};