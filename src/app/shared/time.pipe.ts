import { Pipe , PipeTransform} from '@angular/core';

@Pipe ({
    name: 'durationPipe'
})


export class DurationPipe implements PipeTransform {
    transform(value: number): string {
        let hours = (value / 60);
        let rhours = Math.floor(hours);
        let minutes = (hours - rhours) * 60;
        let rminutes = Math.round(minutes) + "";
        rminutes = (parseInt(rminutes) < 10 ? '0' : '') + rminutes;
        let duration = rhours+'h '+rminutes+'m';
         return duration;
     }
}